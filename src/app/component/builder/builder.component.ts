import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { Model } from '../model';
import template from './builder.html';
import { summaryFileName } from '../../../../node_modules/@angular/compiler/src/aot/util';

@Component({
    selector: 'builder',
    template
})
export class BuilderComponent {
    @ViewChild('sidenav') sidenav: MatSidenav;
    altLeader: boolean;
    completeFollowerCount: number;
    completeHeroCount: number;
    errorMessages: string[];
    extraModels: string[];
    faction: string;
    private factionRules: Object;
    freebandBaseValue: number;
    private heroCount: number;
    limit: number;
    models: {[key: string]: Model};
    totalLifePoints: number;

    constructor() {
        //TODO: add the rest of the faction specific rules
        this.factionRules = {
            'Black Rose Bandits': this.blackRoseBanditsRule,
            'Black Thorn Bandits': this.blackThornBanditsRule,
            'Demons of Karelon': this.demonsRules,
            'Eclipse Sisterhood': this.eclipseRules,
            'Falkaaran Adventurers': this.falkaaranRules,
            'Grular Invaders': this.grularRules,
            'Haradelan Questers': this.haradelanRules,
            'Kuzaarik Forgers': this.kuzaarikRules,
            'Mershael Corsairs': this.mershaelRules,
            'Traazorite Crusaders': this.traazoriteRules,
            'Trilian Seekers': this.trilianRules,
            'Urdaggar Tribes of Valor': this.urdaggarRules
        };
        this.reset()
    }

    addModel() {
        this.extraModels.push(this.uuidv4());
    }

    calculateFreeband() {
        this.freebandBaseValue = 0;
        this.totalLifePoints = 0;
        this.errorMessages = [];
        let heroCount: number = 0;
        this.completeHeroCount = 0;
        let allyHeroCount: number = 0;
        this.completeFollowerCount = 0;
        let allyFollowerCount: number = 0;

        for (let modelId in this.models) {
            let model: Model = this.models[modelId];

            this.freebandBaseValue += model.value;
            this.totalLifePoints += model.stats.lifePoints;

            if (model.stats.type === 'Hero') {
                this.completeHeroCount++;
                if (model.stats.talentList.indexOf('Ally') > -1) {
                    allyHeroCount++;
                }
            }

            if (model.stats.type === 'Follower') {
                this.completeFollowerCount++;
                if (model.stats.talentList.indexOf('Ally') > -1) {
                    allyFollowerCount++;
                }
            }

            if (model.stats.talentList.indexOf('Leader') < 0 && model.type !== 'Caster' && model.stats.type === 'Hero') {
                heroCount++;
            }
    
            if (this.freebandBaseValue > this.limit) {
                this.addErrorMessage('Total model value is too high. Remove models until value comes under the limit.');
            }
    
            let heroFound = 0;
            for (let key in this.models) {
                if(this.models[key]['name'] === model.name && model.stats.type === 'Hero') {
                    heroFound++;
                }
            }
            if (heroFound > 2) {
                this.addErrorMessage(`You can only have two of any hero model (${model.name}).`);
            }

            try {
                this.addErrorMessage(this.factionRules[this.faction].call(this, model));
            } catch {
                console.log(`No special rule for ${this.faction}`);
            }
        }
    
        let allowedHeroCount = Math.floor((this.limit - 1) / 50);
        allowedHeroCount = (allowedHeroCount < 4) ? 4 : allowedHeroCount;
        if (allowedHeroCount < heroCount) {
            this.addErrorMessage('Too many hero units added. You can only have four plus one for each 50 points over 251.');
        }

        if ( (( (this.completeHeroCount - allyHeroCount) / 2) < allyHeroCount) || (( (this.completeFollowerCount - allyFollowerCount) / 2) < allyFollowerCount) ) {
            this.addErrorMessage('Too many ally models selected. There must be a 2:1 ratio of ally to non-ally models for a given type.');
        }
    }

    modelSelected(model: Model) {
        this.models[model.component_id] = model;
        this.calculateFreeband();
    }

    optionsSet(options: {freebandLimit: number, faction: string, altLeader: boolean}) {
        this.limit = options.freebandLimit;
        this.faction = options.faction;
        this.altLeader = options.altLeader;
        this.reset();
        this.calculateFreeband();
        this.sidenav.close();
    }

    removeModel(id: string) {
        this.extraModels.splice(this.extraModels.indexOf(id), 1);
        delete this.models[id];
        this.calculateFreeband();
    }

    private addErrorMessage(msg: string) {
        if (msg && this.errorMessages.indexOf(msg) < 0) {
            this.errorMessages.push(msg);
        }
    }

    private blackRoseBanditsRule(model: Model): string | undefined {
        const models: Model[] = [];
        for (let key in this.models) {
            models.push(this.models[key]);
        }
        const checkForDups = models.filter(model => model.name !== 'Highwayman');
        return ((new Set(checkForDups)).size !== checkForDups.length) ? 'Bandits may not have duplicate heroes except for the Highwayman.' : undefined;
    }

    private blackThornBanditsRule(model: Model): string | undefined {
        const models: Model[] = [];
        for (let key in this.models) {
            models.push(this.models[key]);
        }
        const checkForDups = models.filter(model => model.name !== 'Highwayman');
        return ((new Set(checkForDups)).size !== checkForDups.length) ? 'Bandits may not have duplicate heroes except for the Highwayman.' : undefined;
    }

    private demonsRules(model: Model): string | undefined {
        return undefined;
    }

    private eclipseRules(model: Model): string | undefined {
        return undefined;
    }

    private falkaaranRules(model: Model): string | undefined {
        let levyCount = 0;
        for (let key in this.models) {
            if (this.models[key]['name'] === "Sheriff's Levy") {
                levyCount++;
            }
        }
        if (levyCount > 0 && (this.limit / levyCount) < 75) {
            return "Falkaaran can only have one Sheriff's Levy for each 75 points in the freeband's base value.";
        }

        if (model.name.indexOf('Jhenkar') > -1) {
            let shadowFound: boolean = false;
            for (let key in this.models) {
                if (this.models[key]['name'] === 'Shadow Hunter') {
                    shadowFound = true;
                    if (model.name.indexOf(this.models[key]['type']) < 0) {
                        return 'The Jhenkar selection must match the selected Shadow Hunter.';
                    }
                }
            }
            if (!shadowFound) {
                return 'Jhenkar can only be used along side a Shadow Hunter.';
            }
        }

        return undefined;
    }

    private grularRules(model: Model): string | undefined {
        let demonCount = 0;
        let totalCount = 0;
        for (let key in this.models) {
            if (this.models[key].stats.talentList.indexOf('Demon') > -1) {
                demonCount++;
            }
            totalCount++;
        }
        if (demonCount > totalCount) {
            return 'Grular many not have more demon models than non-demon models.';
        }
        //TODO: may have one additional Marauder at 251+
        return undefined;
    }

    private haradelanRules(model: Model): string | undefined {
        let questorCount = 0;
        let apprenticeCount = 0;
        for (let key in this.models) {
            if (this.models[key].name.indexOf('Questing') > -1) {
                questorCount++;
            }
            if (this.models[key].name.indexOf('Apprentice') > -1) {
                apprenticeCount++;
            }
        }
        if (questorCount > 0 && questorCount > (apprenticeCount+1)) {
            return 'Haradelan many only have one more Questing knight than Apprentice knight.';
        }
        return undefined;
    }

    private kuzaarikRules(model: Model): string | undefined {
        let quarrelerCount = 0;
        for (let key in this.models) {
            if (this.models[key]['name'] === 'Quarreler') {
                quarrelerCount++;
            }
        }
        if (quarrelerCount > 0 && (this.limit / quarrelerCount) < 75) {
            return "Kuzaarik can only have one Quarreller for each 75 points in the freeband's base value.";
        }
        return undefined;
    }

    private mershaelRules(model: Model): string | undefined {
        return undefined;
    }

    private traazoriteRules(model: Model): string | undefined {
        if (model.gender === 'F') {
            return 'Traazorites cannot have female models in their freeband.';
        }
        return undefined;
    }

    private trilianRules(model: Model): string | undefined {
        let runnerCount = 0;
        for (let key in this.models) {
            if (this.models[key]['name'] === 'Tree Runner') {
                runnerCount++;
            }
        }
        if (runnerCount > 0 && (this.limit / runnerCount) < 75) {
            return "Trilian can only have one Tree Runner for each 75 points in the freeband's base value.";
        }
        return undefined;
    }

    private urdaggarRules(model: Model): string | undefined {
        let hunterCount = 0;
        for (let key in this.models) {
            if (this.models[key]['name'] === 'Hunter') {
                hunterCount++;
            }
        }
        if (hunterCount > 0 && (this.limit / hunterCount) < 75) {
            return "Urdaggar can only have one Hunter for each 75 points in the freeband's base value.";
        }
        return undefined;
    }

    private reset() {
        this.extraModels = [];
        this.extraModels.push(this.uuidv4());
        this.freebandBaseValue = 0;
        this.models = {};
        this.totalLifePoints = 0;
    }

    // https://stackoverflow.com/a/2117523
    private uuidv4(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}