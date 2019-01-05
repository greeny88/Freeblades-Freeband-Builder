import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    @Output() onModelRemoved = new EventEmitter<any>();
    @Output() onModelSelected = new EventEmitter<any>();
    factionModels : Model[] = factionModels;
    models : Model[];
    selected : Model;
    private disallowedAltLeaders: String[] = [
        'Duelist',
        'Black Thorn',
        'Bladerider First',
        'Bladerider',
        'Shadow Hunter',
        'Azalakar'
    ];

    constructor(private modelSelectorService: ModelSelectorService) {
        this.models = [];
    }

    ngOnChanges() {
        this.models = [];
        if (this.altLeader && this.faction !== 'Haradelan Questers') {
            const factionModels = JSON.parse(JSON.stringify(this.factionModels));
            // LRB 18-2 pg 90
            for (let currentmodel of factionModels) {
                let model = Object.assign({}, currentmodel);
                if (model.factions.indexOf(this.faction) > -1) {
                    if (this.type === 'Leader' && model.type === 'Standard' 
                            && model.stats.type === 'Hero' 
                            && ['Animal','Demon','Feral','Warbeast'].every(v=> model.stats.talents.indexOf(v) < 0)
                            && model.stats.talents.every(t => t.indexOf('Ally') < 0) 
                            && this.disallowedAltLeaders.indexOf(model.name) < 0) {
                        model.stats.talents.push('Leader');
                        //TODO: attempt to determine which value is better to increase: melee or range
                        //TODO: even better, find way of allowing user to pick per model
                        //TODO: only increase melee for non-calvary attack
                        model.stats.melee = model.stats.melee.map((mAtk) => {
                            mAtk.rating += 2;
                            return mAtk;
                        });
                        if (model.stats.discipline === 8) {
                            model.stats.discipline += 4;
                            model.value += 8;
                        } else {
                            model.stats.discipline += 2;
                            model.value += 7;
                        }
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
        this.selected = undefined;
    }
    
    modelRemoved() {
        this.onModelRemoved.emit(this.componentId);
    }

    modelSelected() {
        let model: any = {};
        if (this.selected) {
            model = this.selected;
            model.stats = (<any>Object).assign(this.selected.stats, this.modelSelectorService.calculateStats(this.selected.stats));
        }
        model.component_id = this.componentId;
        this.onModelSelected.emit(model);
    }
}