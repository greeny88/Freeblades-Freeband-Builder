import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Abilities, Equipment, MagicItems, Skills, Talents } from './advancements';
import { Advancement, Model, ModelStats } from '../../model';
import template from './edit-model.html';

@Component({
    selector: 'edit-model',
    template
})
export class EditModelComponent {
    advancements: string[] = ['MAR','RAR','CAR','DISC','SPD',...Abilities,...Skills,...Talents].sort();
    injuries: string[] = [...Abilities, 'DISC', 'SPD', 'Reluctant', 'Hate[faction]'].sort();
    items: any = [...Equipment, ...MagicItems].sort((a,b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        return 0;
    });
    modelAdvancements: Advancement[];
    modelInjuries: string[];
    modelItems: any[];
    modelVeteranAdvancements: Advancement[];
    originalModelStats: ModelStats;
    veteranAdvancements: Advancement[];

    constructor(private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public model: Model) {
        this.modelAdvancements = [];
        this.modelInjuries = [];
        this.modelItems = [];
        this.originalModelStats = JSON.parse(JSON.stringify(this.model.stats));
        if ('advancements' in this.model.stats) {
            this.updateAdvancementCount();
            this.modelAdvancements = this.model.stats.advancements;
        }
        if ('injuries' in this.model.stats) {
            this.updateInjuryCount();
            this.modelInjuries = this.model.stats.injuries;
        }
        if ('items' in this.model.stats) {
            this.updateItemCount();
            this.modelItems = this.model.stats.items;
        }
        let veteranTalents = this.model.stats.talents.filter(talent => talent.indexOf('Veteran') > -1);
        this.veteranAdvancements = veteranTalents.map(adv => {
            let advStats = adv.slice(8,-1).split(',', 2);
            // console.log(`advStats: ${advStats}`);
            let name: string = advStats[0];
            let cost: number = parseInt(advStats[1]);
            return {name, cost};
        });
        // console.log(`this.veteranAdvancements: ${this.veteranAdvancements}`);
        this.modelVeteranAdvancements = Array(this.veteranAdvancements.length).fill({'name':undefined,'cost':0});
    }

    ngOnInit() { }

    addAdvancement() {
        // this.model.stats = JSON.parse(JSON.stringify(this.originalModelStats));
        this.model.stats.advancements = this.modelAdvancements;
    }

    addItem(item, index) {
        // this.model.stats = JSON.parse(JSON.stringify(this.originalModelStats));
        if (!('items' in this.model.stats)) {
            this.model.stats.items = [];
        }
        this.model.stats.items[index] = item;
    }

    addInjury(injury, index) {
        // this.model.stats = JSON.parse(JSON.stringify(this.originalModelStats));
        // console.log(injury);
        // console.log(this.modelInjuries);
        if (!('injuries' in this.model.stats)) {
            this.model.stats.injuries = [];
        }
        this.model.stats.injuries[index] = injury;
    }

    addVeteranTalent() {
        // this.model.stats = JSON.parse(JSON.stringify(this.originalModelStats));
        this.model.stats.veteranAdvancements = this.modelVeteranAdvancements;
    }

    cancel(): void {
        this.model.stats = JSON.parse(JSON.stringify(this.originalModelStats));
        this.dialogRef.close();
    }

    removeAdvancement(adv: Advancement) {
        this.modelAdvancements.splice(this.modelAdvancements.indexOf(adv), 1);
    }

    removeInjuries(injury) {
        this.modelInjuries.splice(this.modelInjuries.indexOf(injury), 1);
    }

    removeItem(item) {
        this.modelItems.splice(this.modelItems.indexOf(item), 1);
    }

    updateAdvancementCount(): void {
        this.modelAdvancements.push({'name':undefined,'cost':3});
    }

    updateInjuryCount(): void {
        this.modelInjuries.push(undefined);
    }

    updateItemCount(): void {
        this.modelItems.push(undefined);
    }
}