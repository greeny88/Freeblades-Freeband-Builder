import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

import { CommunicatorService } from 'src/app/communicator.service';
import { DbService } from 'src/app/db.service';
import { LRBService } from 'src/app/lrb.service';
import { Factions, Model } from 'src/app/model.d';

type FactionList = typeof Factions[number];

@Component({
    selector: 'app-builder',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
    altLeader: boolean = false;
    breakValue: number = 0;
    builderPage: string;
    private buildSnackRef: MatSnackBarRef<any> | undefined = undefined;
    casterId: string;
    completeFollowerCount: number = 0;
    completeHeroCount: number = 0;
    errorMessages: string[];
    extraModels: string[] = [];
    faction: FactionList | '' = '';
    private factionRules: {[key in FactionList]: (model: Model) => string | undefined};
    freebandBaseValue: number = 0;
    freebandTotalValue: number = 0;
    leaderId: string;
    limit: number = 0;
    lrbVersion: string;
    models: {[key: string]: Model} = {};
    scoutingPoints: number = 0;
    selectedFreeband: any;
    totalLifePoints: number = 0;

    constructor(private commService: CommunicatorService, private dbService: DbService, private lrbService: LRBService, private dialog: MatDialog, private snackBar: MatSnackBar) {
        this.errorMessages = [];
        this.factionRules = {
            'Black Rose Bandits': this.blackRoseBanditsRule,
            'Black Thorn Bandits': this.blackThornBanditsRule,
            'The Collective': this.collectiveRules,
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
            'Urdaggar Tribes of Ruin': this.urdaggarRuinRules,
            'Urdaggar Tribes of Valor': this.urdaggarValorRules
        };
        this.lrbVersion = this.lrbService.version;
        this.builderPage = this.lrbService.buildingRules;
        this.leaderId = this.uuidv4();
        this.casterId = this.uuidv4();
        this.reset()
    }

    ngOnInit(): void {
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

    ngOnDestroy() {
        if (this.buildSnackRef) {
            this.buildSnackRef.dismiss();
        }
    }

    addModel() {
        this.extraModels.push(this.uuidv4());
    }

    calculateFreeband() {
        if (!this.faction) {
            return;
        }
        let allyFaction: string | undefined = undefined;
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
        let leader: Model | undefined = undefined;
        let performerCount: number = 0;
        let nightwhisperFound: boolean = false;
        this.totalLifePoints = 0;
        this.scoutingPoints = 0;
        let zetakorFound: boolean = false;

        for (let modelId of Object.keys(this.models)) {
            let model: Model = this.models[modelId];

            if (model === undefined || !('stats' in model)) {
                continue;
            }

            this.freebandBaseValue += model.value;
            // let extraValue = ('advancements' in model.stats) ? model.stats.advancements.reduce( ((sum,adv) => sum += adv.cost), 0) : 0;
            // extraValue += ('items' in model.stats) ? model.stats.items.reduce( ((sum,itm) => sum += itm.cost), 0) : 0;
            this.freebandTotalValue += model.stats.modelValue ?? model.value;
            // @ts-ignore
            this.totalLifePoints += ('talentList' in model.stats && model.stats.talentList.indexOf('Expendable') > -1) ? (model.stats.lifePoints / 2) : model.stats.lifePoints;

            if (model.stats.type === 'Hero') {
                this.completeHeroCount++;
                if (model.name === 'Kurgozar') {
                    this.completeHeroCount++;
                }
                // @ts-ignore
                if ('talentList' in model.stats && model.stats.talentList.indexOf('Ally') > -1) {
                    allyHeroCount++;
                    if (allyFaction === undefined) {
                        allyFaction = model.primaryFaction;
                    }
                    if (allyFaction !== model.primaryFaction) {
                        this.addErrorMessage(`You can only recruit allies from the same faction.`);
                    }
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
                // @ts-ignore
                if ('talentList' in model.stats && model.stats.talentList.indexOf('Ally') > -1) {
                    allyFollowerCount++;
                    if (allyFaction === undefined) {
                        allyFaction = model.primaryFaction;
                    }
                    if (allyFaction !== model.primaryFaction) {
                        this.addErrorMessage(`You can only recruit allies from the same faction.`);
                    }
                }
            }

            // @ts-ignore
            if ('talentList' in model.stats && model.stats.talentList.indexOf('Leader') < 0 && model.type !== 'Caster' && model.stats.type === 'Hero') {
                heroCount++;
                if (model.name === 'Kurgozar') {
                    heroCount++;
                }
            }

            // @ts-ignore
            if ('talentList' in model.stats && model.stats.talentList.indexOf('Leader') > -1) {
                leader = model;
            }

            // @ts-ignore
            if ('talentList' in model.stats && model.stats.talentList.indexOf('Scout') > -1) {
                this.scoutingPoints += 2;
            }

            if ('casting' in model.stats) {
                casterCount++;
            }

            // @ts-ignore
            if ('skillList' in model.stats && model.stats.skillList.indexOf('Perform') > -1) {
                performerCount++;
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
    
        if (this.freebandTotalValue > this.limit) {
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

        if (nightwhisperFound && leader && leader.gender !== 'F') {
            this.addErrorMessage('Nightwhisper can only be in a freeband lead by a female.')
        }

        if (zetakorFound && leader && leader.gender !== 'M') {
            this.addErrorMessage('Zetakor can only be in a freeband lead by a male.')
        }

        if (irvlorCount > 1) {
            this.addErrorMessage('There can be only one Irvlor.')
        }

        if (keldanCount > 1) {
            this.addErrorMessage('There can be only one Keldan.')
        }

        // Exception for Koronnan Moonsworn
        const casterLimit: number = (this.faction === 'Koronnan Moonsworn') ? 2 : 1;
        if (casterCount > casterLimit) {
            this.addErrorMessage('You have too many casters.');
        }

        if (performerCount > 1) {
            this.addErrorMessage('You have too many performers.');
        }

        if (this.errorMessages.length > 0) {
            this.buildSnackRef = this.snackBar.open('Invalid build', 'View', {panelClass:'invalid-build'});
            this.buildSnackRef.onAction().subscribe(() => {
                const elm = document.getElementById("errorMessage");
                if (elm) {
                    elm.scrollIntoView();
                }
            });
        } else {
            if (this.buildSnackRef) {
                this.buildSnackRef.dismiss();
            }
        }

        this.breakValue = Math.ceil(this.totalLifePoints / 2);

        const currentFreeband = this.getCurrentFreeband();
        this.dbService.saveCurrentFreeband(currentFreeband);
    }

    downloadFreeband() {
        const currentFreeband = this.getCurrentFreeband();
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=uft-8,' + encodeURIComponent(JSON.stringify(currentFreeband)));
        element.setAttribute('download', 'freeband.json');
        element.style.display = 'None';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    loadFreeband() {
        const dialogRef = this.dialog.open(LoadJsonFileDialog);
        dialogRef.afterClosed().subscribe((file: File) => {
            if (file) {
                if (!file.type || file.type !== 'application/json') {
                    console.log('Report error');
                    return;
                }
                const reader = new FileReader();
                reader.addEventListener('load', (event) => {
                    const eventTarget = event.target;
                    if (eventTarget) {
                        const previousFreeband = JSON.parse(eventTarget.result as string);
                        this.selectedFreeband = previousFreeband;
                    }
                });
                try {
                    reader.readAsText(file);
                } catch {
                    console.log('Report error');
                }
            }
        });
    }

    modelSelected(model: Model | {component_id: string}) {
        if (model.component_id) {
            if ('type' in model) {
                this.models[model.component_id] = model;
            } else {
                delete this.models[model.component_id];
            }
        }
        this.calculateFreeband();
    }

    optionsSet(options: {freebandLimit: number, faction: FactionList, altLeader: boolean}) {
        this.limit = options.freebandLimit;
        if (this.faction !== options.faction) {
            this.reset();
        }
        this.faction = options.faction;
        this.altLeader = options.altLeader;
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

    private addErrorMessage(msg: string | undefined) {
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
        const checkForDups = models.filter(modelName => modelName !== 'Highwayman' && modelName != 'Roughrider');
        return ((new Set(checkForDups)).size !== checkForDups.length) ? 'Bandits may not have duplicate heroes except for the Highwayman and Roughrider.' : undefined;
    }

    private blackThornBanditsRule(model: Model): string | undefined {
        const models: string[] = [];
        for (let key in this.models) {
            if (this.models[key].stats.type === 'Hero') {
                models.push(this.models[key].name);
            }
        }
        const checkForDups = models.filter(modelName => modelName !== 'Highwayman' && modelName != 'Roughrider');
        return ((new Set(checkForDups)).size !== checkForDups.length) ? 'Bandits may not have duplicate heroes except for the Highwayman and Roughrider.' : undefined;
    }

    private collectiveRules(model: Model): string | undefined {
        let irvlorCount: number = 0;
        let keldanCount: number = 0;
        let tyrsanCount: number = 0;
        let merchantCount: number = 0;
        for (let key in this.models) {
            if (this.models[key].name === 'Irvlor') {
                irvlorCount++;
            }
            if (this.models[key].name === 'Keldan') {
                keldanCount++;
            }
            if (this.models[key].name === 'Tyrsan') {
                tyrsanCount++;
            }
            if (this.models[key].name === 'Merchant') {
                merchantCount++;
            }
        }
        if (irvlorCount > 1) {
            return 'The Collective can only have one Irvlor.'
        }
        if (keldanCount > 1) {
            return 'The Collective can only have one Keldan.'
        }
        if (tyrsanCount > 1) {
            return 'The Collective can only have one Tyrsan.'
        }
        if (merchantCount > 1) {
            return 'The Collective can only have one Merchant.'
        }
        return undefined;
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
        
        if (model.displayName.indexOf('Lightbringer (Shadow Hunter ally)') > -1) {
            let shadowFound: boolean = false;
            for (let key in this.models) {
                if (this.models[key].name === 'Shadow Hunter' && this.models[key].type === 'Leader') {
                    shadowFound = true;
                }
            }
            if (!shadowFound) {
                return 'Lightbringer (trusted ally) can only be added when led by a Shadow Hunter.';
            }
        }
        
        if (model.name.indexOf("Sho'pel") > -1) {
            let ravenFound: boolean = false;
            for (let key in this.models) {
                if (this.models[key].name === 'Ravenblade Lieutenant' && this.models[key].type === 'Leader') {
                    ravenFound = true;
                }
            }
            if (!ravenFound) {
                return "Sho'pel can only be added when led by a Ravenblade Lieutenant.";
            }
        }

        return undefined;
    }

    private getCurrentFreeband(): Object {
        return {
            faction: this.faction,
            freebandLimit: this.limit,
            altLeader: this.altLeader,
            models: Object.values(this.models).map(model => {
                const m = {
                    displayName: model.displayName, 
                    type: model.type,
                    stats: {
                        advancements: (model.stats?.advancements) ? model.stats.advancements : null,
                        items: (model.stats?.items) ? model.stats.items : null,
                        injuries: (model.stats?.injuries) ? model.stats.injuries : null,
                        options: (model.stats?.options) ? model.stats.options : null,
                        veteran: (model.stats?.veteran) ? model.stats.veteran : null,
                    },
                    characterName: (model.characterName) ? model.characterName : null,
                    gender: (model.gender) ? model.gender : null
                };
                return m;
            })
        };
    }

    private grularRules(model: Model): string | undefined {
        let demonCount = 0;
        let totalCount = 0;
        let nonMarauderMountedFound = false;
        let gadarlFound = false;
        for (let key in this.models) {
            // @ts-ignore
            if ('talentList' in this.models[key].stats && this.models[key].stats.talentList.indexOf('Demon') > -1) {
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
        if (model.name.indexOf("Sho'pel") > -1) {
            let ravenFound: boolean = false;
            for (let key in this.models) {
                if (this.models[key].name === 'Ravenblade Lieutenant' && this.models[key].type === 'Leader') {
                    ravenFound = true;
                }
            }
            if (!ravenFound) {
                return "Sho'pel can only be added when led by a Ravenblade Lieutenant.";
            }
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
        if (model.name.indexOf("Sho'pel") > -1) {
            let ravenFound: boolean = false;
            for (let key in this.models) {
                if (this.models[key].name === 'Ravenblade Lieutenant' && this.models[key].type === 'Leader') {
                    ravenFound = true;
                }
            }
            if (!ravenFound) {
                return "Sho'pel can only be added when led by a Ravenblade Lieutenant.";
            }
        }

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
        let kobrinCount = 0;
        for (let key in this.models) {
            if (this.models[key]['name'] === 'Kobrin') {
                kobrinCount++;
            }
        }
        if (kobrinCount > 0 && (this.limit / kobrinCount) < 75) {
            return "Shakrim can only have one Kobrin for each 75 points in the freeband's base value.";
        }
        return undefined;
    }

    private traazoriteRules(model: Model): string | undefined {
        if (model.gender === 'F') {
            return 'Traazorites cannot have female models in their freeband.';
        }
        let heroCount: number = 0;
        for (let key in this.models) {
            if (this.models[key].stats.type === 'Hero') {
                heroCount++;
            }
            if (this.models[key].name === 'Kurgozar') {

            }
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

    private urdaggarRuinRules(model: Model): string | undefined {
        return undefined;
    }

    private urdaggarValorRules(model: Model): string | undefined {
        let hunterCount = 0;
        for (let key in this.models) {
            if (this.models[key]['name'] === 'Hunter') {
                hunterCount++;
            }
        }
        if (hunterCount > 0 && (this.limit / hunterCount) < 75) {
            return "Urdaggar(Valor) can only have one Hunter for each 75 points in the freeband's base value.";
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
    templateUrl: './load-previous.html'
})
export class LoadPreviousDialog {

    constructor(public dialogRef: MatDialogRef<LoadPreviousDialog>) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}

@Component({
    selector: 'load-json-file',
    templateUrl: './load-json-file.html'
})
export class LoadJsonFileDialog {
    file: any | undefined = undefined;

    constructor(public dialogRef: MatDialogRef<LoadJsonFileDialog>) { }

    onCancel(): void {
        this.dialogRef.close();
    }

    onLoad(file?: any): void {
        const elm: HTMLInputElement | null = document.querySelector('input[type=file]');
        if (elm) {
            const elmFiles = elm.files;
            if (elmFiles) {
                const file = elmFiles[0];
                this.dialogRef.close(file);
            }
        }
    }
}
