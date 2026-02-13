import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Abilities, Equipment, MagicItems, Skills, AdvancementTalents } from './advancements';
import { Advancement, Items, Model, ModelStats } from 'src/app/model';
import { MatRadioChange } from '@angular/material/radio';

@Component({
    selector: 'edit-model',
    templateUrl: './edit-model.component.html'
})
export class EditModelComponent {
    advancements: string[] = ['MAR','RAR','CAR','DISC','SPD','Rise of a Hero',...Abilities,...Skills,...AdvancementTalents].sort();
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
    model: Model;
    modelAdvancements: Advancement[] | undefined;
    modelInjuries: (string|undefined)[] | undefined;
    modelItems: any[] | undefined;
    originalModelStats: ModelStats;

    constructor(private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: {model: Model, altLeader: boolean}) {
        this.modelAdvancements = [];
        this.modelInjuries = [];
        this.modelItems = [];
        this.model = this.data.model;
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

    addItem(index: number) {
        if (!this.modelItems) {
            return;
        }
        const item = this.modelItems[index];
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

    cancel(): void {
        this.model.stats = JSON.parse(JSON.stringify(this.originalModelStats));
        this.dialogRef.close();
    }

    changeLeaderOption(event: MatRadioChange, type: string, index?: number) {
        if (this.model.stats.melee) {
            this.model.stats.melee.map((opt, currentIndex) => opt.altSelected = (type === 'melee' && index === currentIndex) ? true : false);
        }
        if (this.model.stats.range) {
            this.model.stats.range.map((opt, currentIndex) => opt.altSelected = (type === 'range' && index === currentIndex) ? true : false);
        }
        if (this.model.stats.casting) {
            this.model.stats.casting.altSelected = (type === 'casting') ? true : false;
        }
    }

    changeOption(event: MatRadioChange) {
        this.model.stats.options?.map(opt => opt.selected = event.value.name === opt.name ? true : false);
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
            this.modelItems.push({'name':undefined,'cost':undefined});
        }
    }
}