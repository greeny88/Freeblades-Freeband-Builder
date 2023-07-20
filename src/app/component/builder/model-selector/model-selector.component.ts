import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EditModelComponent } from './edit-model.component';
import { ModelSelectorService } from './model-selector.service';
import { Model } from '../../model';
import factionModels from './models.json';
import template from './model-selector.html';

@Component({
    selector: 'model-selector',
    template
})
export class ModelSelectorComponent {
    @Input() altLeader : boolean;
    @Input() componentId : string;
    @Input() faction : string;
    @Input() type : string;
    @Input() selectedModel : Object;
    @Output() onModelRemoved = new EventEmitter<any>();
    @Output() onModelSelected = new EventEmitter<any>();
    factionModels : Model[] = factionModels;
    model: Model | any;
    models : Model[];
    originalModel: Model;
    selected : Model;
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
        if ('altLeader' in changes || 'faction' in changes) {
            this.model = undefined;
            this.models = [];
            if (this.altLeader && this.disallowedAltLeadersFactions.indexOf(this.faction)) {
                const factionModels = JSON.parse(JSON.stringify(this.factionModels));
                for (let currentmodel of factionModels) {
                    let model: Model = Object.assign({}, currentmodel);
                    if (model.factions.indexOf(this.faction) > -1) {
                        if (this.type === 'Leader' && model.type === 'Standard' 
                                && model.stats.type === 'Hero' 
                                && ['Animal','Demon','Feral','Warbeast','Undead'].every(v=> model.stats.talents.indexOf(v) < 0)
                                && model.stats.talents.every(t => t.indexOf('Ally') < 0) 
                                && this.disallowedAltLeaders.indexOf(model.name) < 0) {
                            model.stats.talents.push('Leader');
                            //TODO: attempt to determine which value is better to increase: melee or range
                            //TODO: even better, find way of allowing user to pick per model
                            //TODO: only increase melee for non-calvary attack
                            // model.stats.melee = model.stats.melee.map((mAtk) => {
                            //     mAtk.rating += 2;
                            //     return mAtk;
                            // });
                            model.stats.melee[0].rating += 2;
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
                            }
                            // Only add +1 for two-ended if MAR increase
                            for (let melee of model.stats.melee) {
                                if ('abilities' in melee && melee.abilities.indexOf('te') > -1) {
                                    model.value += 1;
                                }
                            }
                            model.type = 'Leader';
                            this.models.push(model);
                        } else if (this.type === 'Standard' && model.type === 'Leader' && this.disallowedAltLeaders.indexOf(model.name) < 0) {
                            model.stats.talents = model.stats.talents.filter((tal) => tal !== 'Leader');
                            //TODO: determine which value is higher before decreasing: melee or range
                            model.stats.melee = model.stats.melee.map((mAtk) => {
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
                this.models = this.factionModels.filter(model => model.type === this.type && model.factions.indexOf(this.faction) > -1);
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
                this.selected = this.models.filter(model => model.displayName === this.selectedModel['displayName'])[0];
                if (!this.selected) {
                    throw '';
                }
                this.selected.gender = this.selectedModel['gender']
                if ('characterName' in this.selectedModel && this.selectedModel['characterName']) {
                    this.selected.characterName = this.selectedModel['characterName'];
                }
                if ('advancements' in this.selectedModel && this.selectedModel['advancements']) {
                    this.selected.stats.advancements = this.selectedModel['advancements'];
                }
                if ('injuries' in this.selectedModel && this.selectedModel['injuries']) {
                    this.selected.stats.injuries = this.selectedModel['injuries'];
                }
                if ('items' in this.selectedModel && this.selectedModel['items']) {
                    this.selected.stats.items = this.selectedModel['items'];
                }
                if ('veteranAdvancements' in this.selectedModel && this.selectedModel['veteranAdvancements']) {
                    this.selected.stats.veteranAdvancements = this.selectedModel['veteranAdvancements'];
                }
                this.modelSelected();
            } catch (error) {
                console.error(`Issue finding selected model ${this.selectedModel['displayName']}`, error);
            }
        }
    }
    
    modelRemoved() {
        this.onModelRemoved.emit(this.componentId);
    }

    modelSelected() {
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

    private updateModelStats(model: Model) {
        this.model = JSON.parse(JSON.stringify(model));
        this.model.stats = (<any>Object).assign(this.model.stats, this.modelSelectorService.calculateStats(model.stats, model.value));
        this.model.component_id = this.componentId;
        if (!('stats' in this.model)) {
            console.error(`Error getting stats of ${this.model.displayName}`);
            return;
        }
        this.onModelSelected.emit(this.model);
    }
}