import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Model } from '../../model';
import template from './edit-model.html';

@Component({
    selector: 'edit-model',
    template
})
export class EditModelComponent {
    private abilities: String[] = ['AGL 1dl','DEX 1dl','END 1dl','KNW 1dl','SPR 1dl','STR 1dl'];
    private skills: String[] = [
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
    private talents: String[] = [
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
    advancements: String[] = ['MAR','RAR','CAR',...this.abilities,...this.skills,...this.talents].sort();
    advancementNumber: Number[];
    advancementCount: Number;

    constructor(private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public model: Model) {}

    ngOnInit() {
        // console.log(this.model);
    }

    cancel(): void {
        this.dialogRef.close();
    }

    updateAdvancementCount(): void {
        this.advancementNumber = Array(this.advancementCount).fill(0);
    }
}