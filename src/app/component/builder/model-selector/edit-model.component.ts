import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Model } from '../../model';
import template from './edit-model.html';

@Component({
    selector: 'edit-model',
    template
})
export class EditModelComponent {
    private abilities: string[] = ['AGL 1dl','DEX 1dl','END 1dl','KNW 1dl','SPR 1dl','STR 1dl'];
    private skills: string[] = [
        'Camouflage',
        'Climb',
        'Devices',
        'Find',
        'Hunt',
        'Jump',
        'Stealth',
        'Swim',
        'Thievery'
    ];
    private talents: string[] = [
        'Accurate Shot',
        'Accurate Strike',
        'Active Defense',
        'Agile Charge',
        'Alpine',
        'Ambush',
        'Amphiibious',
        'Arboreal',
        'Assult',
        'Awareness',
        'Backstep',
        'Battler',
        'Bladedancer',
        'Bladeflash',
        'Block',
        'Bloodstruck',
        'Bold',
        'Bribery',
        'Bull Rush',
        'Confine',
        'Counterattack',
        'Deceptive Strike',
        'Deflect',
        'Deft',
        'Die Hard',
        'Disguise',
        'Dodge',
        'Elusive',
        'Enhanced Disguise',
        'Far Shot',
        'Feint',
        'Flurry',
        'Fortress',
        'Freerunner',
        'Frostfoot',
        'Furious',
        'Harasser',
        'Hardened',
        'Heroic Attack',
        'Hit and Run',
        'Impact',
        'Impetuous',
        'Infiltrate',
        'Intensify Spell',
        'Leaper',
        'March',
        'Marksman',
        'Medicine',
        'Merchant',
        'Missle Parry',
        'Mountaineer',
        'Nimble',
        'Opportune Strike',
        'Parry',
        'Pouncer',
        'Power Attack',
        'Precise Shot',
        'Protector',
        'Punish',
        'Rapid Fire',
        'Rapid Reload',
        'Raven Stance',
        'Recover',
        'Reluctant',
        'Retrograde',
        'Re-engage',
        'Running Shot',
        'Scout',
        'Scrounge',
        'Sharpshooter',
        'Shield Bash',
        'Sergeant[Follower type]',
        'Sidestep',
        'Sniper',
        'Spellbender',
        'Spellblocker',
        'Spellbracer',
        'Spelldancer',
        'Spellguider',
        'Spellhammer',
        'Spell Riposte',
        'Spotter',
        'Steadfast',
        'Subdue',
        'Taunt',
        'Teammate[Type]',
        'Tough'
    ];
    advancements: string[] = ['MAR','RAR','CAR',...this.abilities,...this.skills,...this.talents].sort();
    advancementNumber: number[];
    advancementCount: number;
    modelAdvancements: string[];

    constructor(private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public model: Model) {}

    ngOnInit() {
        // console.log(this.model);
    }

    addAdvancement(advancement: string, index: number) {
        this.modelAdvancements.splice(index, 0, advancement);
        for (let adv of this.modelAdvancements) {
            // if (this.skills.includes(adv)) {
            //     if ('skills' in this.model.stats) {
            //         if (adv in this.model.stats) {
            //             this.model.stats.skills[adv] += 2;
            //         } else {
            //             this.model.stats.skills[adv] = 6;
            //         }
            //     } else {
            //         // this.model.stats.skills = {adv: 6};
            //     }
            // }
        }
    }

    cancel(): void {
        this.dialogRef.close();
    }

    updateAdvancementCount(): void {
        this.advancementNumber = Array(this.advancementCount).fill(0);
    }
}