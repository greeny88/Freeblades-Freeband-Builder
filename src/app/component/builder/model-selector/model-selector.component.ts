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
    @Input() componentId : string;
    @Input() faction : string;
    @Input() type : string;
    @Output() onModelRemoved = new EventEmitter<any>();
    @Output() onModelSelected = new EventEmitter<any>();
    models : Model[];
    selected : Model;

    constructor(private modelSelectorService: ModelSelectorService) {
        this.models = [];
    }

    ngOnChanges() {
        this.models = [];
        for (let model of factionModels) {
            if (model.type === this.type && model.factions.indexOf(this.faction) > -1) {
                this.models.push(model);
            }
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
        let model = this.selected;
        model.component_id = this.componentId;
        this.selected.stats = (<any>Object).assign(this.selected.stats, this.modelSelectorService.calculateStats(this.selected.stats));
        if (this.selected.stats.skills) {
            this.selected.stats.skillList = this.selected.stats.skills.map(skill => `${skill.name} - d${skill.rating}`).join(', ');
        }
        if (this.selected.stats.talents) {
            this.selected.stats.talentList = this.selected.stats.talents.join(', ');
        }
        this.onModelSelected.emit(model);
    }
}