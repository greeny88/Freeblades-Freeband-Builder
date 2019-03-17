import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Model, ModelStats } from '../../model';
import template from './edit-model.html';

@Component({
    selector: 'edit-model',
    template
})
export class EditModelComponent {
    private abilities: string[] = ['AGL','DEX','END','KNW','SPR','STR'];
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
    originalModelStats: ModelStats;

    constructor(private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public model: Model) {
        this.originalModelStats = JSON.parse(JSON.stringify(this.model.stats));
        if ('advancements' in this.model.stats) {
            this.advancementCount = this.model.stats.advancements.length;
            this.updateAdvancementCount();
            this.modelAdvancements = this.model.stats.advancements;
        }
    }

    ngOnInit() { }

    addAdvancement(advancement: string, index: number) {
        // TODO: move to calculateStats
        this.model.stats = JSON.parse(JSON.stringify(this.originalModelStats));
        this.model.stats.advancements = this.modelAdvancements;
        for (let adv of this.modelAdvancements) {
            if (this.skills.includes(adv)) {
                if ('skills' in this.model.stats) {
                    let skillFound: boolean = false;
                    for (let skill of this.model.stats.skills) {
                        if (skill.name === adv) {
                            skill.rating += 2;
                            skillFound = true;
                        }
                    }
                    if (!skillFound) {
                        this.model.stats.skills.push({"name":adv,"rating":6});
                    }
                } else {
                    this.model.stats.skills = [{"name":adv,"rating":6}];
                }
            } else if (this.abilities.includes(adv)) {
                const abilityReference = {'AGL':'agility','DEX':'dexterity','END':'endurance','KNW':'knowledge','SPR':'spirit','STR':'strength'};
                if (this.model.stats.abilities[abilityReference[adv]]) {
                    this.model.stats.abilities[abilityReference[adv]] += 2;
                } else {
                    this.model.stats.abilities[abilityReference[adv]] = (this.model.stats.type === 'Hero') ? 10 : 8;
                }
            } else if (this.talents.includes(adv)) {
                this.model.stats.talents.push(adv);
            } else {
                if (adv === 'MAR') {
                    this.model.stats.melee.map(melee => {
                        melee.damage += 2;
                        return melee;
                    });
                }
                if (adv === 'RAR') {
                    this.model.stats.range.map(range => {
                        range.damage += 2;
                        return range;
                    });
                }
                if (adv === 'CAR') {
                    this.model.stats.casting.rating += 2;
                }
            }
        }
    }

    cancel(): void {
        this.dialogRef.close();
    }

    updateAdvancementCount(): void {
        this.advancementNumber = Array(this.advancementCount).fill(0);
        this.modelAdvancements = Array(this.advancementCount).fill(undefined);
    }
}