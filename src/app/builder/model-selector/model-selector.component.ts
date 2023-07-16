import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EditModelComponent } from './edit-model.component';
import { ModelSelectorService } from './model-selector.service';
import { Factions, Model } from 'src/app/model.d';
import { Models } from './models';

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
    models : Model[];
    originalModel: Model | undefined = undefined;
    selected : Model | undefined = undefined;
    private disallowedAltLeaders: String[] = [
        'Duelist',
        'Black Thorn',
        'Bladerider First',
        'Bladerider',
        'Shadow Hunter'
    ];
    private disallowedAltLeadersFactions: String[] = [
        'Darkgrove Demons',
        'Demons of Karelon',
        'Haradelan Questers',
        'Koronnan Moonsworn',
        'Ravenblade Mercenaries'
    ];

    constructor(private dialog: MatDialog, private modelSelectorService: ModelSelectorService) {
        this.models = [];
    }

    ngOnChanges(changes: SimpleChanges) {
        if (('altLeader' in changes || 'faction' in changes) && this.faction) {
            this.model = undefined;
            this.models = [];
            if (this.altLeader && this.disallowedAltLeadersFactions.indexOf(this.faction)) {
                const factionModels = JSON.parse(JSON.stringify(this.factionModels));
                for (let currentmodel of factionModels) {
                    let model: Model = Object.assign({}, currentmodel);
                    if (model.factions.indexOf(this.faction) > -1) {
                        if (this.type === 'Leader' && model.type === 'Standard' 
                                && model.stats.type === 'Hero' 
                                && model.stats.talents?.every(v=> ['Animal','Demon','Feral','Warbeast','Undead'].indexOf(v) < 0)
                                && model.stats.talents?.every(t => t.indexOf('Ally') < 0) 
                                && this.disallowedAltLeaders.indexOf(model.name) < 0) {
                            model.stats.talents.push('Leader');
                            //TODO: add as model.stats.option a MAR or RAR increase, default to highest?
                            //TODO: only increase melee for non-calvary attack
                            // model.stats.melee = model.stats.melee.map((mAtk) => {
                            //     mAtk.rating += 2;
                            //     return mAtk;
                            // });
                            if (model.stats.melee) {
                                model.stats.melee[0].rating += 2;
                                // Only add +1 for two-ended if MAR increase
                                for (let melee of model.stats.melee) {
                                    if ('abilities' in melee && melee.abilities && melee.abilities.indexOf('te') > -1) {
                                        model.value += 1;
                                    }
                                }
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
                                // Only add +1 for Shield Bash if MAR increase
                                if (['Die Hard', 'Dodge', 'Wraith', 'Shield Bash'].indexOf(talent) > -1) {
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
                this.models = this.factionModels.filter(model => this.faction && model.type === this.type && model.factions.indexOf(this.faction) > -1);
            }
            this.models.sort((a,b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
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
                    if (this.selectedModel.stats?.injuries) {
                        this.selected.stats.injuries = this.selectedModel.stats.injuries;
                    }
                    if (this.selectedModel.stats?.items) {
                        this.selected.stats.items = this.selectedModel.stats.items;
                    }
                    if (this.selectedModel.stats?.options) {
                        this.selected.stats.options = this.selectedModel.stats.options;
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
            data: this.originalModel
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
        if (this.model.stats?.veteran) {
            this.model.value = this.model.stats.veteran.reduce((sum: number, current:any) => current.selected ? sum + current.cost : sum, model.value)
        }
        this.model.stats = (<any>Object).assign(this.model.stats, this.modelSelectorService.calculateStats(model.stats, this.model.value));
        this.model.component_id = this.componentId;
        if (!('stats' in this.model)) {
            console.error(`Error getting stats of ${this.model.displayName}`);
            return;
        }
        this.onModelSelected.emit(this.model);
    }
}