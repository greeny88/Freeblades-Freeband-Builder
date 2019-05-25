import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Abilities, Skills, Talents } from './advancements';
import { Advancement, Model, ModelStats } from '../../model';
import template from './edit-model.html';

@Component({
    selector: 'edit-model',
    template
})
export class EditModelComponent {
    advancements: string[] = ['MAR','RAR','CAR','DISC','SPD',...Abilities,...Skills,...Talents].sort();
    advancementNumber: number[];
    advancementCount: number;
    modelAdvancements: Advancement[];
    modelVeteranAdvancements: Advancement[];
    originalModelStats: ModelStats;
    veteranAdvancements: Advancement[];

    constructor(private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public model: Model) {
        this.modelAdvancements = [];
        this.originalModelStats = JSON.parse(JSON.stringify(this.model.stats));
        if ('advancements' in this.model.stats) {
            this.advancementCount = this.model.stats.advancements.length;
            this.updateAdvancementCount();
            this.modelAdvancements = this.model.stats.advancements;
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
        this.model.stats = JSON.parse(JSON.stringify(this.originalModelStats));
        this.model.stats.advancements = this.modelAdvancements;
    }

    //TODO: addEquipment()

    //TODO: addInjury()

    addVeteranTalent() {
        this.model.stats = JSON.parse(JSON.stringify(this.originalModelStats));
        this.model.stats.veteranAdvancements = this.modelVeteranAdvancements;
    }

    removeAdvancement(adv: Advancement) {
        this.modelAdvancements.splice(this.modelAdvancements.indexOf(adv), 1);
    }

    cancel(): void {
        this.model.stats = JSON.parse(JSON.stringify(this.originalModelStats));
        this.dialogRef.close();
    }

    updateAdvancementCount(): void {
        this.modelAdvancements.push({'name':undefined,'cost':3});
    }
}