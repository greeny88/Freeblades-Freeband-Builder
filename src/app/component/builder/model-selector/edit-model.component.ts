import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Abilities, Skills, Talents } from './advancements';
import { Model, ModelStats } from '../../model';
import template from './edit-model.html';

@Component({
    selector: 'edit-model',
    template
})
export class EditModelComponent {
    advancements: string[] = ['MAR','RAR','CAR','DISC','SPD',...Abilities,...Skills,...Talents].sort();
    advancementNumber: number[];
    advancementCount: number;
    modelAdvancements: string[];
    modelVeteran: {name: string, cost:string}[];
    originalModelStats: ModelStats;
    veteranAdvancements: {name: string, cost:string}[];

    constructor(private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public model: Model) {
        this.originalModelStats = JSON.parse(JSON.stringify(this.model.stats));
        if ('advancements' in this.model.stats) {
            this.advancementCount = this.model.stats.advancements.length;
            this.updateAdvancementCount();
            this.modelAdvancements = this.model.stats.advancements;
        }
        let veteranTalents = this.model.stats.talents.filter(talent => talent.indexOf('Veteran') > -1);
        this.veteranAdvancements = veteranTalents.map(adv => {
            let advStats = adv.slice(8,-1).split(',', 2);
            console.log(advStats);
            let advName = advStats[0];
            let advCost = advStats[1];
            return {'name':advName, 'cost':advCost};
        });
        console.log(this.veteranAdvancements);
        this.modelVeteran = Array(this.veteranAdvancements.length).fill(undefined);
    }

    ngOnInit() { }

    addAdvancement(advancement: string, index: number) {
        this.model.stats = JSON.parse(JSON.stringify(this.originalModelStats));
        this.model.stats.advancements = this.modelAdvancements;
    }

    //TODO: addEquipment()

    //TODO: addInjury()

    //TODO: addVeteranTalent()

    cancel(): void {
        this.dialogRef.close();
    }

    updateAdvancementCount(): void {
        this.advancementNumber = Array(this.advancementCount).fill(0);
        this.modelAdvancements = Array(this.advancementCount).fill(undefined);
    }
}