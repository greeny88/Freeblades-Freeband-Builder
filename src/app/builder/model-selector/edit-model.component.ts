import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Abilities, Equipment, MagicItems, Skills, Talents } from './advancements';
import { Advancement, Items, Model, ModelStats } from 'src/app/model';

@Component({
    selector: 'edit-model',
    templateUrl: './edit-model.component.html'
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
    modelAdvancements: Advancement[] | undefined;
    modelInjuries: (string|undefined)[] | undefined;
    modelItems: any[] | undefined;
    modelVeteranAdvancements: Advancement[] | undefined;
    originalModelStats: ModelStats;
    veteranAdvancements: Advancement[] | undefined;

    constructor(private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public model: Model) {
        this.modelAdvancements = [];
        this.modelInjuries = [];
        this.modelItems = [];
        this.originalModelStats = JSON.parse(JSON.stringify(this.model.stats));
        if ('advancements' in this.model.stats) {
            this.modelAdvancements = this.model.stats.advancements;
        }
        if ('injuries' in this.model.stats) {
            this.modelInjuries = this.model.stats.injuries;
        }
        if ('items' in this.model.stats) {
            this.modelItems = this.model.stats.items;
        }
        // if (this.model.stats.talents) {
        //     const veteranTalents = this.model.stats.talents.filter(talent => talent.indexOf('Veteran') > -1);
        //     this.veteranAdvancements = veteranTalents.map(adv => {
        //         let advStats = adv.slice(8,-1).split(',', 2);
        //         // console.log(`advStats: ${advStats}`);
        //         let name: string = advStats[0];
        //         let cost: number = parseInt(advStats[1]);
        //         return {name, cost};
        //     });
        //     // console.log(`this.veteranAdvancements: ${this.veteranAdvancements}`);
        //     this.modelVeteranAdvancements = Array(this.veteranAdvancements.length).fill({'name':undefined,'cost':0});
        // }
    }

    ngOnInit() { }

    ngOnDestroy() {
        if ('advancements' in this.model.stats) {
            this.model.stats.advancements = this.model.stats.advancements?.filter( adv => adv);
        }
        if ('injuries' in this.model.stats) {
            this.model.stats.injuries = this.model.stats.injuries?.filter( inj => inj);
        }
        if ('items' in this.model.stats) {
            this.model.stats.items = this.model.stats.items?.filter( itm => itm);
        }
    }

    addAdvancement() {
        this.model.stats.advancements = this.modelAdvancements;
    }

    addItem(item: Items, index: number) {
        if (!('items' in this.model.stats)) {
            this.model.stats.items = [];
        }
        if (this.model.stats.items && item) {
            this.model.stats.items[index] = item;
        }
    }

    addInjury(injury: string | undefined, index: number) {
        if (!('injuries' in this.model.stats)) {
            this.model.stats.injuries = [];
        }
        if (this.model.stats.injuries && injury) {
            this.model.stats.injuries[index] = injury;
        }
    }

    addVeteranTalent() {
        this.model.stats.veteranAdvancements = this.modelVeteranAdvancements;
    }

    cancel(): void {
        this.model.stats = JSON.parse(JSON.stringify(this.originalModelStats));
        this.dialogRef.close();
    }

    removeAdvancement(adv: Advancement) {
        if (this.modelAdvancements) {
            this.modelAdvancements.splice(this.modelAdvancements.indexOf(adv), 1);
        }
    }

    removeInjuries(injury: string | undefined): void {
        if (this.modelInjuries) {
            this.modelInjuries.splice(this.modelInjuries.indexOf(injury), 1);
        }
    }

    removeItem(item: Items): void {
        if (this.modelItems) {
            this.modelItems.splice(this.modelItems.indexOf(item), 1);
        }
    }

    updateAdvancementCount(): void {
        if (this.modelAdvancements) {
            this.modelAdvancements.push({'name':undefined,'cost':3});
        }
    }

    updateInjuryCount(): void {
        if (this.modelInjuries) {
            this.modelInjuries.push(undefined);
        }
    }

    updateItemCount(): void {
        if (this.modelItems) {
            this.modelItems.push(undefined);
        }
    }
}