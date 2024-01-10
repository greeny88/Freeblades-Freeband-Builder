import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EditModelComponent } from './edit-model.component';
import { ModelSelectorService } from './model-selector.service';
import { Factions, MeleeWeapon, Model } from 'src/app/model.d';
import { Models } from './models';
import { MeleeWeapons } from './advancements';

@Component({
    selector: 'model-selector',
    templateUrl: './model-selector.component.html',
    styleUrls: ['./model-selector.component.scss']
})
export class ModelSelectorComponent {
    @Input() altLeader : boolean = false;
    @Input() componentId : string | undefined = undefined;
    @Input() faction : typeof Factions[number] | undefined;
    @Input() type : string = '';
    @Input() selectedModel : Model | undefined = undefined;
    @Output() onModelRemoved = new EventEmitter<any>();
    @Output() onModelSelected = new EventEmitter<any>();
    factionModels : Model[] = Models;
    model: Model | any;
    model_factions: string[] = [];
    model_grouping: { [key: string]: Model[] };
    models : Model[];
    originalModel: Model | undefined = undefined;
    selected : Model | undefined = undefined;
    private disallowedAltLeaders: string[] = [
        'Duelist',
        'Black Thorn',
        'Bladerider First',
        'Bladerider',
        'Shadow Hunter',
        'High Questor of Tahnar',
        'High Questor of Vidunar',
        'High Questor of Barek',
        'High Questor of Glareyn',
        'High Questor of Vasilar',
        'High Questor of Valia',
        'Questing Knight of Tahnar',
        'Questing Knight of Vidunar',
        'Questing Knight of Barek',
        'Questing Knight of Glareyn',
        'Questing Knight of Sylvia',
        'Questing Knight of Vasilar',
        'Apprentice Knight of Tahnar',
        'Apprentice Knight of Vidunar',
        'Apprentice Knight of Barek'
    ];
    private disallowedAltLeadersFactions: string[] = [
        'Darkgrove Demons',
        'Demons of Karelon',
        'Koronnan Moonsworn',
        'Ravenblade Mercenaries'
    ];

    constructor(private dialog: MatDialog, private modelSelectorService: ModelSelectorService) {
        this.models = [];
        this.model_grouping = {};
        this.model_factions = [];
    }

    ngOnChanges(changes: SimpleChanges) {
        // TODO: add 'Ally[Independent]' when this.faction != model.primaryFaction and 'Ally[Trusted]' not in model.stats.talents
        if (('altLeader' in changes || 'faction' in changes) && this.faction) {
            this.model = undefined;
            this.models = [];
            this.model_grouping = {};
            this.model_factions = [];
            if (this.altLeader && !this.disallowedAltLeadersFactions.includes(this.faction)) {
                const factionModels = JSON.parse(JSON.stringify(this.factionModels));
                for (let currentmodel of factionModels) {
                    let model: Model = Object.assign({}, currentmodel);
                    // if (this.faction != model.primaryFaction) {
                    //     if (model.stats.talents && model.stats.talents.every(t => !t.includes('Ally'))) {
                    //         model.stats.talents?.push('Ally[Independent]');
                    //     } else {
                    //         model.stats.talents = ['Ally[Independent]'];
                    //     }
                    // }
                    if (model.factions.includes(this.faction)) {
                        if (this.type === 'Leader' && (model.type === 'Standard' || model.type === 'Caster') 
                                && model.stats.type === 'Hero' 
                                && model.stats.talents?.every(v=> !['Animal','Demon','Feral','Warbeast','Undead'].includes(v))
                                && model.stats.talents?.every(t => !t.includes('Ally')) 
                                && !this.disallowedAltLeaders.includes(model.name)) {
                            model.stats.talents.push('Leader');
                            if (model.stats.melee) {
                                model.stats.melee[0].altSelected = true;
                            }
                            if (model.stats.discipline === 8) {
                                model.stats.discipline += 4;
                                model.value += 8;
                            } else if (model.stats.discipline === 6) {
                                model.stats.discipline += 3;
                                model.value += 9;
                            } else {
                                model.stats.discipline += 2;
                                model.value += 7;
                            }
                            for (let talent of model.stats.talents) {
                                if (['Die Hard', 'Dodge', 'Wraith'].includes(talent)) {
                                    model.value += 1;
                                }
                                if (talent === 'Sergeant') {
                                    model.value -= 2;
                                }
                            }
                            model.type = 'Leader';
                            this.models.push(model);
                        } else if (this.type === 'Standard' && model.type === 'Leader' && this.disallowedAltLeaders.indexOf(model.name) < 0) {
                            model.stats.talents = model.stats.talents?.filter((tal) => tal !== 'Leader');
                            //TODO: determine which value is higher before decreasing: melee or range
                            model.stats.melee = model.stats.melee?.map((mAtk) => {
                                mAtk.rating -= 2;
                                return mAtk;
                            });
                            model.stats.discipline -= 2;
                            model.value -= 7;
                            model.type = 'Standard';
                            this.models.push(model);
                        } else if (model.type === this.type) {
                            this.models.push(model);
                        }
                    }
                }
            } else {
                this.models = this.factionModels.filter(model => this.faction && model.type === this.type && model.factions.includes(this.faction)).map((model) => {
                    // if (this.faction != model.primaryFaction) {
                    //     if (model.stats.talents && model.stats.talents.every(t => !t.includes('Ally'))) {
                    //         model.stats.talents?.push('Ally[Independent]');
                    //     } else {
                    //         model.stats.talents = ['Ally[Independent]'];
                    //     }
                    // }
                    return model;
                });
            }
            this.models.forEach(m => {
                // const faction = m.primaryFaction ? m.primaryFaction : this.faction;
                // if (!faction) {
                //     return;
                // }
                for(let faction of m.primaryFaction) {
                    if (!(faction in this.model_grouping)) {
                        this.model_grouping[faction] = [];
                    }
                    this.model_grouping[faction].push(m);
                }
            });

            for (let faction in this.model_grouping) {
                this.model_factions.push(faction);
                this.model_grouping[faction].sort((a,b) => {
                    if (a.stats.type === b.stats.type) {
                        return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
                    }
                    return (a.stats.type === 'Hero') ? -1 : 1;
                });
            }
            this.model_factions.sort((a,b) => {
                if (a === this.faction) {
                    return -1;
                }
                if (b === this.faction) {
                    return 1;
                }
                return (a > b) ? 1 : -1;
            });
        }
        if ('selectedModel' in changes && this.selectedModel && !('component_id' in this.selectedModel)) {
            try {
                this.selected = this.models.filter(model => model.displayName === this.selectedModel?.displayName)[0];
                if (!this.selected) {
                    throw '';
                }
                this.selected.gender = this.selectedModel.gender
                if ('characterName' in this.selectedModel && this.selectedModel.characterName) {
                    this.selected.characterName = this.selectedModel.characterName;
                }
                if (this.selectedModel.stats) {
                    if (this.selectedModel.stats?.advancements) {
                        this.selected.stats.advancements = this.selectedModel.stats.advancements;
                    }
                    if (this.selected.stats.casting && this.selectedModel.stats?.casting) {
                        this.selected.stats.casting.altSelected = this.selectedModel.stats.casting.altSelected;
                    }
                    if (this.selectedModel.stats?.injuries) {
                        this.selected.stats.injuries = this.selectedModel.stats.injuries;
                    }
                    if (this.selectedModel.stats?.items) {
                        this.selected.stats.items = this.selectedModel.stats.items;
                    }
                    if (this.selected.stats.melee && this.selectedModel.stats?.melee) {
                        this.selected.stats.melee.forEach((melee, index) => melee.altSelected = (this.selectedModel?.stats.melee && this.selectedModel.stats.melee[index]) ? this.selectedModel.stats.melee[index].altSelected : false);
                    }
                    if (this.selectedModel.stats?.options) {
                        this.selected.stats.options = this.selectedModel.stats.options;
                    }
                    if (this.selected.stats.range && this.selectedModel.stats?.range) {
                        this.selected.stats.range.forEach((range, index) => range.altSelected = (this.selectedModel?.stats.range && this.selectedModel.stats.range[index]) ? this.selectedModel.stats.range[index].altSelected : false);
                    }
                    if (this.selectedModel.stats?.veteran) {
                        this.selected.stats.veteran = this.selectedModel.stats.veteran;
                    }
                }
                this.modelSelected();
            } catch (error) {
                console.error(`Issue finding selected model ${this.selectedModel.displayName}`, error);
            }
        }
    }
    
    modelRemoved() {
        this.onModelRemoved.emit(this.componentId);
    }

    modelSelected(event?: any) {
        this.model = undefined;
        if (!this.selected) {
            this.onModelSelected.emit({ component_id: this.componentId });
            return;
        }
        this.originalModel = JSON.parse(JSON.stringify(this.selected));
        this.updateModelStats(this.originalModel);
    }

    openEditWindow() {
        const dialogRef = this.dialog.open(EditModelComponent, {
            data: {
                model: this.originalModel,
                altLeader: this.altLeader
            }
        });

        dialogRef.afterClosed().subscribe((result: Model) => {
            if (result) {
                this.updateModelStats(result);
            }
        });
    }

    private updateModelStats(model: Model | undefined) {
        if (!model) {
            return;
        }
        this.model = JSON.parse(JSON.stringify(model));
        if (!this.model) {
            return;
        }
        if (this.model.stats?.veteran) {
            this.model.value = this.model.stats.veteran.reduce((sum: number, current:any) => current.selected ? sum + current.cost : sum, model.value)
        }
        // TODO: adjust value for this.model.stats.melee[X].altSelected when 'te' or 'shield bash'
        // this.model.value = this.model.stats.melee.reduce((sum: number, current: any) => (current.altSelected && this.model.stats.talents.indexOf('Shield Bash')))
        if (this.model.stats.melee?.some((melee: MeleeWeapon) => melee.altSelected)) {
            if (this.model.stats.talents?.includes('Shield Bash')) {
                this.model.value += 1;
            }
            if (this.model.stats.melee?.some((melee: MeleeWeapon) => melee.altSelected && MeleeWeapons.find(w => w.name === melee.name)?.abilities?.includes('te'))) {
                this.model.value += 1;
            }
        }
        this.model.stats = (<any>Object).assign(this.model.stats, this.modelSelectorService.calculateStats(model.stats, this.model.value));
        this.model.component_id = this.componentId;
        // if (!('stats' in this.model)) {
        //     console.error(`Error getting stats of ${this.model.displayName}`);
        //     return;
        // }
        this.onModelSelected.emit(this.model);
    }
}