import { Injectable } from '@angular/core';

import { Abilities, Skills, Talents } from './advancements';
import { ModelStats } from '../../model';

interface stats {
    abilities: Object,
    casting?: Object,
    defense: number,
    discipline: number,
    itemList: string,
    lifePoints: number,
    melee?: Object,
    moraleBonus: number,
    range?: Object,
    skillBonus: number,
    skillList: string,
    speed: number,
    talentList: string
};

@Injectable()
export class ModelSelectorService {
    private abilityList: string[] = ['agility', 'dexterity', 'endurance', 'knowledge', 'spirit', 'strength'];
    private abilityTiers: number[] = [10, 14, 20, 30];

    constructor() {}

    private addAdvancement(stats: ModelStats, abilities, advancementName: string) {
        if (Skills.includes(advancementName)) {
            if ('skills' in stats) {
                let skillFound: boolean = false;
                for (let skill of stats.skills) {
                    if (skill.name === advancementName) {
                        skill.rating += 2;
                        skillFound = true;
                    }
                }
                if (!skillFound) {
                    stats.skills.push({'name':advancementName, 'rating':6});
                }
            } else {
                stats.skills = [{'name':advancementName,'rating':6}];
            }
        } else if (Abilities.includes(advancementName)) {
            const abilityReference = {'AGL':'agility','DEX':'dexterity','END':'endurance','KNW':'knowledge','SPR':'spirit','STR':'strength'};
            abilities[abilityReference[advancementName]] += 2;
        } else if (Talents.includes(advancementName)) {
            stats.talents.push(advancementName);
        } else {
            if (advancementName === 'MAR') {
                stats.melee.map(melee => {
                    melee.rating += 2;
                    return melee;
                });
            }
            if (advancementName === 'RAR') {
                stats.range.map(range => {
                    range.rating += 2;
                    return range;
                });
            }
            if (advancementName === 'CAR') {
                stats.casting.rating += 2;
            }
            if (advancementName === 'DISC') {
                stats.discipline += 2;
            }
            if (advancementName === 'SPD') {
                stats.speed += 1;
            }
        }
    }

    calculateStats(originalStats: ModelStats) {
        let stats: ModelStats = JSON.parse(JSON.stringify(originalStats));
        let ability: number = (stats.type === 'Hero') ? 8 : 6;
        let abilities: {agility?: number, dexterity?: number, endurance?: number, knowledge?: number, spirit?: number, strength?: number} = {};
        for (let abilityName of this.abilityList) {
            abilities[abilityName] = ability;
        }
        abilities = (<any>Object).assign(abilities, stats.abilities);

        if (!('advancements' in stats)) {
            stats.advancements = [];
        }
        // console.log(stats.advancements);
        for (let adv of stats.advancements) {
            this.addAdvancement(stats, abilities, adv.name);
        }
        
        if (!('items' in stats)) {
            stats.items = [];
        }
        // console.log(stats.items);
        for (let item of stats.items) {
            if (!item || !('advancement' in item)) {
                break;
            }
            this.addAdvancement(stats, abilities, item.advancement);
        }

        if (!('injuries' in stats)) {
            stats.injuries = [];
        }
        // console.log(stats.injuries);
        for (let inj of stats.injuries) {
            if (Abilities.includes(inj)) {
                const abilityReference = {'AGL':'agility','DEX':'dexterity','END':'endurance','KNW':'knowledge','SPR':'spirit','STR':'strength'};
                abilities[abilityReference[inj]] -= 2;
            } else if (['Hate[faction]','Reluctant'].includes(inj)) {
                stats.talents.push(inj);
            } else {
                if (inj === 'DISC') {
                    stats.discipline -= 2;
                }
                if (inj === 'SPD') {
                    stats.speed -= 1;
                }
            }
        }

        let defense: number = (stats.shield === 'S' || stats.shield === 'AN' || stats.shield === 'B' || stats.shield === 'AS') ? 5 : (stats.shield === 'L') ? 6 : 4;
        if (abilities.agility === 4) {
            defense = -1;
        } else {
            for (let i=0; this.abilityTiers.length > i; i++) {
                if (abilities.agility >= this.abilityTiers[i]) {
                    defense = defense + i + 1;
                }
            }
        }

        let ratingBonus: number = 0;
        if (abilities.dexterity === 4) {
            ratingBonus = -1;
        } else {
            for (let i=0; this.abilityTiers.length > i; i++) {
                if (abilities.dexterity >= this.abilityTiers[i]) {
                    ratingBonus = ratingBonus + i + 1;
                }
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
        if (abilities.endurance === 4) {
            lifePoints--;
        } else {
            for (let i=0; this.abilityTiers.length > i; i++) {
                if (abilities.endurance >= this.abilityTiers[i]) {
                    lifePoints = lifePoints + i + 1;
                }
            }
        }

        let skillBonus: number = 0;
        if (abilities.knowledge === 4) {
            skillBonus = -1;
        } else {
            for (let i=0; this.abilityTiers.length > i; i++) {
                if (abilities.knowledge >= this.abilityTiers[i]) {
                    skillBonus = skillBonus + i + 1;
                }
            }
        }

        let moraleBonus: number = 0;
        if (abilities.spirit === 4) {
            moraleBonus = -1;
        } else {
            for (let i=0; this.abilityTiers.length > i; i++) {
                if (abilities.spirit >= this.abilityTiers[i]) {
                    moraleBonus = moraleBonus + i + 1;
                }
            }
        }

        let damageBonus: number = 0;
        if (abilities.strength === 4) {
            damageBonus = -1;
        } else {
            for (let i=0; this.abilityTiers.length > i; i++) {
                if (abilities.strength >= this.abilityTiers[i]) {
                    damageBonus = damageBonus + i + 1;
                }
            }
        }

        let skillList: string;
        if (stats.skills) {
            skillList = stats.skills.map(skill => `${skill.name} - d${skill.rating}`).join(', ');
        }

        let talentList: string = '';
        if (stats.talents) {
            const talents = stats.talents.map((m) => {
                const count = stats.talents.reduce((sum, r) => (r === m) ? sum + 1 : sum, 0);
                return (count > 1) ? `${m}[${count}]` : m;
            });
            talentList = Array.from(new Set(talents)).join(', ');
        }

        let itemList: string;
        if (stats.items) {
            itemList = stats.items.map(item => `${item.name}`).join(', ');
        }
        
        let updatedStats: stats = {
            abilities,
            defense,
            'discipline': stats.discipline,
            itemList,
            lifePoints,
            moraleBonus,
            skillBonus,
            skillList,
            'speed': stats.speed,
            talentList
        };

        if (stats.melee) {
            let melee = stats.melee;
            for (let weapon of melee) {
                weapon.ratingBonus = ratingBonus;
                weapon.damageBonus = (weapon.damageBonus) ? damageBonus + weapon.damageBonus : damageBonus;
                if (weapon.abilities) {
                    weapon.abilityList = weapon.abilities.join(', ');
                }
            }
            updatedStats.melee = melee;
        }

        if (stats.range) {
            let range = stats.range;
            for (let weapon of range) {
                weapon.ratingBonus = ratingBonus;
                weapon.damageBonus = (weapon.damageBonus) ? damageBonus + weapon.damageBonus : damageBonus;
                if (weapon.abilities) {
                    weapon.abilityList = weapon.abilities.join(', ');
                }
            }
            updatedStats.range = range;
        }

        if (stats.casting) {
            let casting = stats.casting;
            casting.ratingBonus = skillBonus;
            updatedStats.casting = casting;
        }
        
        return updatedStats;
    }
}