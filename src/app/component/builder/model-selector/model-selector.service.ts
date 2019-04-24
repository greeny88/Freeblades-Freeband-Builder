import { Injectable } from '@angular/core';

import { Abilities, Skills, Talents } from './advancements';
import { ModelStats } from '../../model';

interface stats {
    abilities: Object,
    defense: number,
    discipline: number,
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

    calculateStats(stats: ModelStats) {
        let ability: number = (stats.type === 'Hero') ? 8 : 6;
        let abilities: {agility?: number, dexterity?: number, endurance?: number, knowledge?: number, spirit?: number, strength?: number} = {};
        for (let abilityName of this.abilityList) {
            abilities[abilityName] = ability;
        }
        abilities = (<any>Object).assign(abilities, stats.abilities);

        if (!('advancements' in stats)) {
            stats.advancements = [];
        }
        for (let adv of stats.advancements) {
            if (Skills.includes(adv)) {
                if ('skills' in stats) {
                    let skillFound: boolean = false;
                    for (let skill of stats.skills) {
                        if (skill.name === adv) {
                            skill.rating += 2;
                            skillFound = true;
                        }
                    }
                    if (!skillFound) {
                        stats.skills.push({"name":adv,"rating":6});
                    }
                } else {
                    stats.skills = [{"name":adv,"rating":6}];
                }
            } else if (Abilities.includes(adv)) {
                const abilityReference = {'AGL':'agility','DEX':'dexterity','END':'endurance','KNW':'knowledge','SPR':'spirit','STR':'strength'};
                abilities[abilityReference[adv]] += 2;
            } else if (Talents.includes(adv)) {
                stats.talents.push(adv);
            } else {
                if (adv === 'MAR') {
                    stats.melee.map(melee => {
                        melee.rating += 2;
                        return melee;
                    });
                }
                if (adv === 'RAR') {
                    stats.range.map(range => {
                        range.rating += 2;
                        return range;
                    });
                }
                if (adv === 'CAR') {
                    stats.casting.rating += 2;
                }
                if (adv === 'DISC') {
                    stats.discipline += 2;
                }
                if (adv === 'SPD') {
                    stats.speed += 1;
                }
            }
        }

        let defense: number = (stats.shield === 'S' || stats.shield === 'AN') ? 5 : (stats.shield === 'L') ? 6 : 4;
        if (abilities.agility === 4) {
            defense = -1;
        } else {
            for (let i=0; this.abilityTiers.length > i; i++) {
                if (abilities.agility === this.abilityTiers[i]) {
                    defense = defense + i + 1;
                }
            }
        }

        let ratingBonus: number = 0;
        if (abilities.dexterity === 4) {
            ratingBonus = -1;
        } else {
            for (let i=0; this.abilityTiers.length > i; i++) {
                if (abilities.dexterity === this.abilityTiers[i]) {
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
                if (abilities.endurance === this.abilityTiers[i]) {
                    lifePoints = lifePoints + i + 1;
                }
            }
        }

        let skillBonus: number = 0;
        if (abilities.knowledge === 4) {
            skillBonus = -1;
        } else {
            for (let i=0; this.abilityTiers.length > i; i++) {
                if (abilities.knowledge === this.abilityTiers[i]) {
                    skillBonus = skillBonus + i + 1;
                }
            }
        }

        let moraleBonus: number = 0;
        if (abilities.spirit === 4) {
            moraleBonus = -1;
        } else {
            for (let i=0; this.abilityTiers.length > i; i++) {
                if (abilities.spirit === this.abilityTiers[i]) {
                    moraleBonus = moraleBonus + i + 1;
                }
            }
        }

        let damageBonus: number = 0;
        if (abilities.strength === 4) {
            damageBonus = -1;
        } else {
            for (let i=0; this.abilityTiers.length > i; i++) {
                if (abilities.strength === this.abilityTiers[i]) {
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
        
        let updatedStats: stats = {
            abilities,
            defense,
            'discipline': stats.discipline,
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
        
        return updatedStats;
    }
}