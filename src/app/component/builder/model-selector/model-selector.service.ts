import { Injectable } from '@angular/core';

import { ModelStats } from '../../model';

interface stats {
    abilities: Object,
    defense: number,
    lifePoints: number,
    melee?: Object,
    moraleBonus: number,
    range?: Object,
    skillBonus: number
};

@Injectable()
export class ModelSelectorService {
    private abilityList: string[] = ['agility', 'dexterity', 'endurance', 'knowledge', 'spirit', 'strength'];
    private abilityTiers: number[] = [10, 14, 20, 30];

    constructor() {}

    calculateStats(stats: ModelStats) {
        let ability: number = (stats.type === 'Hero') ? 8 : 6;
        let abilities: {agility?: number, dexterity?: number, endurance?: number, knowledge?: number, spirit?: number, strength?: number} = {};
        for (let abilityName of this.abilityList) {
            abilities[abilityName] = ability;
        }
        abilities = (<any>Object).assign(abilities, stats.abilities);

        let defense: number = (stats.shield === 'S') ? 5 : (stats.shield === 'L') ? 6 : 4;
        for (let i=0; this.abilityTiers.length > i; i++) {
            if (abilities.agility === this.abilityTiers[i]) {
                defense = defense + i + 1;
            }
        }

        let ratingBonus: number = 0;
        for (let i=0; this.abilityTiers.length > i; i++) {
            if (abilities.dexterity === this.abilityTiers[i]) {
                ratingBonus = ratingBonus + i + 1;
            }
        }

        let lifePoints: number = (stats.type === 'Hero') ? 2 : 1;
        if (stats.talents) {
            for (let talent of stats.talents) {
                if (['Leader', 'Tough'].indexOf(talent) > -1) {
                    lifePoints++;
                }
            }
        }
        for (let i=0; this.abilityTiers.length > i; i++) {
            if (abilities.endurance === this.abilityTiers[i]) {
                lifePoints = lifePoints + i + 1;
            }
        }

        let skillBonus: number = 0;
        for (let i=0; this.abilityTiers.length > i; i++) {
            if (abilities.knowledge === this.abilityTiers[i]) {
                skillBonus = skillBonus + i + 1;
            }
        }

        let moraleBonus: number = 0;
        for (let i=0; this.abilityTiers.length > i; i++) {
            if (abilities.spirit === this.abilityTiers[i]) {
                moraleBonus = moraleBonus + i + 1;
            }
        }

        let damageBonus: number = 0;
        for (let i=0; this.abilityTiers.length > i; i++) {
            if (abilities.strength === this.abilityTiers[i]) {
                damageBonus = damageBonus + i + 1;
            }
        }

        //TODO: group duplicate talents
        
        let updatedStats: stats = {
            abilities,
            defense,
            lifePoints,
            moraleBonus,
            skillBonus
        };

        if (stats.melee) {
            let melee = stats.melee;
            for (let weapon of melee) {
                weapon.ratingBonus = ratingBonus;
                weapon.damageBonus = damageBonus + weapon.damageBonus;
            }
            updatedStats.melee = melee;
        }

        if (stats.range) {
            let range = stats.range;
            for (let weapon of range) {
                weapon.ratingBonus = ratingBonus;
                weapon.damageBonus = damageBonus + weapon.damageBonus;
            }
            updatedStats.range = range;
        }
        
        return updatedStats;
    }
}