import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { Model } from '../model';
import template from './builder.html';

@Component({
    selector: 'builder',
    template
})
export class BuilderComponent {
    @ViewChild('sidenav') sidenav: MatSidenav;
    altLeader: boolean;
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
            'Falkaaran Adventurers': this.falkaaranRules,
            'Kuzaarik Foragers': this.kuzaarikRules,
            'Traazorite Crusaders': this.traazoriteRules
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
        for (let modelId in this.models) {
            let model: Model = this.models[modelId];

            this.freebandBaseValue += model.value;
            this.totalLifePoints += model.stats.lifePoints;

            if (model.type === 'Standard' && model.stats.type === 'Hero') {
                this.heroCount +=1;
            }
    
            if (this.freebandBaseValue > this.limit) {
                this.addErrorMessage('Model value is too high. Remove models until value comes under the limit.');
            }
    
            let allowedHeroCount = Math.floor((this.freebandBaseValue - 1) / 50);
            allowedHeroCount = (allowedHeroCount < 4) ? 4 : allowedHeroCount;
            if (allowedHeroCount < this.heroCount) {
                this.addErrorMessage('Too many hero units added. You can only have four plus one for each 50 points over 251.');
            }
    
            let heroFound = 0;
            for(let key in this.models) {
                if(this.models[key]['name'] === model.name && model.stats.type === 'Hero') {
                    heroFound++;
                }
            }
            if(heroFound > 1) {
                this.addErrorMessage('You can only have two of any hero model.');
            }

            try {
                this.addErrorMessage(this.factionRules[this.faction].call(this, model));
            } catch {
                console.log(`No special rule for ${this.faction}`);
            }
            
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

        // TODO: add rule on jhenkar selection

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

    private reset() {
        this.extraModels = [];
        this.extraModels.push(this.uuidv4());
        this.freebandBaseValue = 0;
        this.models = {};
        this.totalLifePoints = 0;
    }

    private traazoriteRules(model: Model): string | undefined {
        if (model.gender === 'F') {
            return 'Traazorites cannot have female models in their freeband.';
        }
        return undefined;
    }

    // https://stackoverflow.com/a/2117523
    private uuidv4(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}