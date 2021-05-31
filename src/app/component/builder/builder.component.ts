import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { CommunicatorService } from '../../communicator.service';
import { DbService } from './../db.service';
import { LRBService } from '../lrb.service';
import { Model } from '../model';

import template from './builder.html';
import loadPrevious from './load-previous.html';

@Component({
    selector: 'builder',
    template
})
export class BuilderComponent {
    altLeader: boolean;
    breakValue: number;
    builderPage: string;
    casterId: string;
    completeFollowerCount: number;
    completeHeroCount: number;
    errorMessages: string[];
    extraModels: string[];
    faction: string;
    private factionRules: Object;
    freebandBaseValue: number;
    freebandTotalValue: number;
    leaderId: string;
    limit: number;
    lrbVersion: string;
    models: {[key: string]: Model};
    scoutingPoints: number;
    selectedFreeband: Object;
    totalLifePoints: number;

    constructor(private commService: CommunicatorService, private dbService: DbService, private lrbService: LRBService, private dialog: MatDialog) {
        this.errorMessages = [];
        this.factionRules = {
            'Black Rose Bandits': this.blackRoseBanditsRule,
            'Black Thorn Bandits': this.blackThornBanditsRule,
            'Darkgrove Demons': this.darkgroveRules,
            'Demons of Karelon': this.demonsRules,
            'Eclipse Sisterhood': this.eclipseRules,
            'Falkaaran Adventurers': this.falkaaranRules,
            'Grular Invaders': this.grularRules,
            'Haradelan Questers': this.haradelanRules,
            'Kandoran Deathmasters': this.kandoranRules,
            'Koronnan Moonsworn': this.koronnanRules,
            'Kuzaarik Forgers': this.kuzaarikRules,
            'Mershael Corsairs': this.mershaelRules,
            'Ravenblade Mercenaries': this.ravenbladeRules,
            'Shakrim Wavestalkers': this.shakrimRules,
            'Traazorite Crusaders': this.traazoriteRules,
            'Trilian Seekers': this.trilianRules,
            'Urdaggar Tribes of Valor': this.urdaggarRules
        };
        this.lrbVersion = this.lrbService.version;
        this.builderPage = this.lrbService.buildingRules;
        this.reset()
    }

    ngOnInit() {
        this.commService.getFreeband().subscribe(prebuiltFreeband => {
            if (prebuiltFreeband) {
                this.selectedFreeband = JSON.parse(JSON.stringify(prebuiltFreeband));
            } else {
                const sub = this.dbService.getPreviousFreeband().subscribe(previousFreeband => {
                    if (previousFreeband !== undefined) {
                        const dialogRef = this.dialog.open(LoadPreviousDialog);
                        dialogRef.afterClosed().subscribe(result => {
                            if (result) {
                                this.selectedFreeband = previousFreeband;
                            } else {
                                this.dbService.deleteOldFreeband();
                            }
                        });
                    }
                    sub.unsubscribe();
                });
            }
        })
    }

    addModel() {
        this.extraModels.push(this.uuidv4());
    }

    calculateFreeband() {
        let allyFollowerCount: number = 0;
        let allyHeroCount: number = 0;
        let casterCount: number = 0;
        this.completeFollowerCount = 0;
        this.completeHeroCount = 0;
        this.errorMessages = [];
        this.freebandBaseValue = 0;
        this.freebandTotalValue = 0
        let heroCount: number = 0;
        let irvlorCount: number = 0;
        let keldanCount: number = 0;
        let leader: Model;
        let nightwhisperFound: boolean = false;
        this.totalLifePoints = 0;
        this.scoutingPoints = 0;
        let zetakorFound: boolean = false;

        for (let modelId of Object.keys(this.models)) {
            let model: Model = this.models[modelId];

            if (!('stats' in model)) {
                continue;
            }

            this.freebandBaseValue += model.value;
            let extraValue = ('advancements' in model.stats) ? model.stats.advancements.reduce( ((sum,adv) => sum += adv.cost), 0) : 0;
            extraValue += ('items' in model.stats) ? model.stats.items.reduce( ((sum,itm) => sum += itm.cost), 0) : 0;
            this.freebandTotalValue += model.value + extraValue;
            this.totalLifePoints += ('talentList' in model.stats && model.stats.talentList.indexOf('Expendable') > -1) ? (model.stats.lifePoints / 2) : model.stats.lifePoints;

            if (model.stats.type === 'Hero') {
                this.completeHeroCount++;
                if ('talentList' in model.stats && model.stats.talentList.indexOf('Ally') > -1) {
                    allyHeroCount++;
                    if (model.name === 'Nightwhisper') {
                        nightwhisperFound = true;
                    }
                    if (model.name === 'Zetakor') {
                        zetakorFound = true;
                    }
                    if (model.name === 'Irvlor') {
                        irvlorCount++;
                    }
                    if (model.name === 'Keldan') {
                        keldanCount++;
                    }
                }
            }

            if (model.stats.type === 'Follower') {
                this.completeFollowerCount++;
                if ('talentList' in model.stats && model.stats.talentList.indexOf('Ally') > -1) {
                    allyFollowerCount++;
                }
            }

            if ('talentList' in model.stats && model.stats.talentList.indexOf('Leader') < 0 && model.type !== 'Caster' && model.stats.type === 'Hero') {
                heroCount++;
            }

            if ('talentList' in model.stats && model.stats.talentList.indexOf('Leader') > -1) {
                leader = model;
            }

            if ('talentList' in model.stats && model.stats.talentList.indexOf('Scout') > -1) {
                this.scoutingPoints += 2;
            }

            if ('casting' in model.stats) {
                casterCount++;
            }

            let heroFound = 0;
            for (let key in this.models) {
                if(this.models[key].name === model.name && model.stats.type === 'Hero') {
                    heroFound++;
                }
            }

            // Grular Marauder exception
            const heroLimit: number = ((model.name === 'Marauder' || model.name === 'Impaler') && this.limit > 250) ? 3 : 2;
            if (heroFound > heroLimit) {
                this.addErrorMessage(`You can only have ${heroLimit} of a hero model (${model.name}).`);
            }

            try {
                this.addErrorMessage(this.factionRules[this.faction].call(this, model));
            } catch {
                console.log(`No special rule for ${this.faction}`);
            }
        }
    
        if (this.freebandBaseValue > this.limit) {
            this.addErrorMessage('Total model value is too high. Remove models until value comes under the limit.');
        }
    
        let allowedHeroCount = Math.floor((this.limit - 1) / 50);
        allowedHeroCount = (allowedHeroCount < 4) ? 4 : allowedHeroCount;
        if (leader && 'stats' in leader && 'casting' in leader.stats) {
            allowedHeroCount++;
        }
        if (allowedHeroCount < heroCount) {
            this.addErrorMessage('Too many hero units added. You can only have four plus one for each 50 points over 251.');
        }

        if ( (( (this.completeHeroCount - allyHeroCount) / 2) < allyHeroCount) || (( (this.completeFollowerCount - allyFollowerCount) / 2) < allyFollowerCount) ) {
            this.addErrorMessage('Too many ally models selected. There must be a 2:1 ratio of ally to non-ally models for a given type.');
        }

        if (nightwhisperFound && leader.gender !== 'F') {
            this.addErrorMessage('Nightwhisper can only be in a freeband lead by a female leader.')
        }

        if (zetakorFound && leader.gender !== 'M') {
            this.addErrorMessage('Zetakor can only be in a freeband lead by a male.')
        }

        if (irvlorCount > 1) {
            this.addErrorMessage('There is only one Irvlor.')
        }

        if (keldanCount > 1) {
            this.addErrorMessage('There is only one Keldan.')
        }

        // Exception for Koronnan Moonsworn
        const casterLimit: number = (this.faction === 'Koronnan Moonsworn') ? 2 : 1;
        if (casterCount > casterLimit) {
            this.addErrorMessage('You have too many casters.');
        }

        this.breakValue = Math.ceil(this.totalLifePoints / 2);

        const currentFreeband = {
            faction: this.faction,
            freebandLimit: this.limit,
            altLeader: this.altLeader,
            models: Object.values(this.models).map(model => {
                const m = {
                    displayName: model['displayName'], 
                    type: model['type']
                };
                return m;
            })
        };
        this.dbService.saveCurrentFreeband(currentFreeband);
    }

    modelSelected(model: Model | {component_id: string}) {
        if ('type' in model) {
            this.models[model.component_id] = model;
        } else {
            delete this.models[model.component_id];
        }
        this.calculateFreeband();
    }

    optionsSet(options: {freebandLimit: number, faction: string, altLeader: boolean}) {
        this.limit = options.freebandLimit;
        this.faction = options.faction;
        this.altLeader = options.altLeader;
        this.reset();
        if (this.selectedFreeband) {
            this.extraModels = [];
            for (let model of this.selectedFreeband['models']) {
                if (model.type === 'Leader') {
                    this.models[this.leaderId] = model;
                } else if (model.type === 'Caster') {
                    this.models[this.casterId] = model;
                } else {
                    const currentId = this.uuidv4();
                    this.extraModels.push(currentId);
                    this.models[currentId] = model;
                }
            }
            setTimeout(() => this.selectedFreeband = undefined, 1);
        } else {
            this.calculateFreeband();
        }
    }

    print() {
        window.print();
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
        const models: string[] = [];
        for (let key in this.models) {
            if (this.models[key].stats.type === 'Hero') {
                models.push(this.models[key].name);
            }
        }
        const checkForDups = models.filter(modelName => modelName !== 'Highwayman');
        return ((new Set(checkForDups)).size !== checkForDups.length) ? 'Bandits may not have duplicate heroes except for the Highwayman.' : undefined;
    }

    private blackThornBanditsRule(model: Model): string | undefined {
        const models: string[] = [];
        for (let key in this.models) {
            if (this.models[key].stats.type === 'Hero') {
                models.push(this.models[key].name);
            }
        }
        const checkForDups = models.filter(modelName => modelName !== 'Highwayman');
        return ((new Set(checkForDups)).size !== checkForDups.length) ? 'Bandits may not have duplicate heroes except for the Highwayman.' : undefined;
    }

    private darkgroveRules(model: Model): string | undefined {
        return undefined;
    }

    private demonsRules(model: Model): string | undefined {
        let heroCount: number = 0;
        let skrotCount: number = 0;
        for (let key in this.models) {
            if (this.models[key].stats.type === 'Hero') {
                heroCount++;
            }
            if (this.models[key].name === 'Skrot') {
                skrotCount++;
            }
        }
        if (skrotCount > (heroCount*2)) {
            return 'Demons may not have more than twice as many skrots as heroes.';
        }

        return undefined;
    }

    private eclipseRules(model: Model): string | undefined {
        return undefined;
    }

    private falkaaranRules(model: Model): string | undefined {
        let levyCount = 0;
        for (let key in this.models) {
            if (this.models[key].name === "Sheriff's Levy") {
                levyCount++;
            }
        }
        if (levyCount > 0 && (this.limit / levyCount) < 75) {
            return "Falkaaran can only have one Sheriff's Levy for each 75 points in the freeband's base value.";
        }

        if (model.name.indexOf('Jhenkar') > -1) {
            let shadowFound: boolean = false;
            for (let key in this.models) {
                if (this.models[key].name === 'Shadow Hunter') {
                    shadowFound = true;
                    if (model.name.indexOf(this.models[key].type) < 0) {
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
        let nonMarauderMountedFound = false;
        let gadarlFound = false;
        for (let key in this.models) {
            if (this.models[key].stats.talentList.indexOf('Demon') > -1) {
                demonCount++;
                if (this.models[key].name === 'Gadarl') {
                    gadarlFound = true;
                }
            }
            if (this.models[key].displayName.indexOf('Mounted') > -1 && this.models[key].name !== 'Marauder') {
                nonMarauderMountedFound = true;
            }
            totalCount++;
        }
        if (demonCount > totalCount) {
            return 'Grular may not have more demon models than non-demon models.';
        }
        const demonCountMinusGadarl = (gadarlFound) ? demonCount - 1 : demonCount;
        if (nonMarauderMountedFound && demonCountMinusGadarl > 0) {
            return 'Grular may not have demon models with non-Marauder mounted models.';
        }
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

    private kandoranRules(model: Model): string | undefined {
        let heroCount: number = 0;
        let shamblerCount: number = 0;
        for (let key in this.models) {
            if (this.models[key].stats.type === 'Hero') {
                heroCount++;
            }
            if (this.models[key].name === 'Skrot') {
                shamblerCount++;
            }
        }
        if (shamblerCount > (heroCount*2)) {
            return 'Kandoran may not have more than twice as many shamblers as heroes.';
        }

        return undefined;
    }

    private koronnanRules(model: Model): string | undefined {
        let mizrakaiCount: number = 0;
        let priestCount: number = 0;
        let priestessCount: number = 0;
        for (let key in this.models) {
            if (this.models[key].name === 'Mizrakai') {
                mizrakaiCount++;
            }
            if (this.models[key].name === 'Moons Priest') {
                priestCount++;
            }
            if (this.models[key].name === 'Moons Priestess') {
                priestessCount++;
            }
        }
        if (mizrakaiCount > 1) {
            return 'Koronnan can only have one Mizrakai.'
        }
        if (priestCount > 1) {
            return 'Koronnan can only have one Moons Priest.'
        }
        if (priestessCount > 1) {
            return 'Koronnan can only have one Moons Priestess.'
        }

        if (this.limit >= 200) {
            let priestCount: number = 0;
            for (let key in this.models) {
                if (this.models[key].name.indexOf("Moons Priest") > -1) {
                    priestCount++;
                }
            }
            if (priestCount != 2) {
                return "Koronnan must have both Moons Priest and Moons Priestess when the freeband's base value is 200+."
            }
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

    private ravenbladeRules(model: Model): string | undefined {
        const models: string[] = [];
        for (let key in this.models) {
            if (this.models[key].stats.type === 'Hero') {
                models.push(this.models[key].name);
            }
        }
        const checkForDups = models.filter(modelName => modelName !== 'Ravenblade Soldier');
        return ((new Set(checkForDups)).size !== checkForDups.length) ? 'Mercenaries may not have duplicate heroes except for the Ravenblade Soldier.' : undefined;
    }

    private shakrimRules(model: Model): string | undefined {
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
        let guardianCount = 0;
        for (let key in this.models) {
            if (this.models[key]['name'] === 'Tree Runner') {
                runnerCount++;
            }
            if (this.models[key]['name'] === 'Guardian') {
                guardianCount++;
            }
        }
        if (runnerCount > 0 && (this.limit / runnerCount) < 75) {
            return "Trilian can only have one Tree Runner for each 75 points in the freeband's base value.";
        }
        if (guardianCount > 0 && (this.limit / guardianCount) < 75) {
            return "Trilian can only have one Guardian for each 75 points in the freeband's base value.";
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
        this.extraModels.push(this.uuidv4());
        this.extraModels.push(this.uuidv4());
        this.casterId = this.uuidv4();
        this.leaderId = this.uuidv4();
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


@Component({
    selector: 'load-previous',
    template: loadPrevious,
})
export class LoadPreviousDialog {

    constructor(public dialogRef: MatDialogRef<LoadPreviousDialog>) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}