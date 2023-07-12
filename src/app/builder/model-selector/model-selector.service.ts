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
    modelValue: number,
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
    private primarySkills: string[] = ['Climb','Find','Jump','Swim'];

    constructor() {}

    private addAdvancement(stats: ModelStats, abilities: string[], advancementName: string | undefined, details?: any) {
        if (!advancementName) {
            return;
        }
        if (Skills.includes(advancementName)) {
            const base_rating = (details && details.rating) ? details.rating : (stats.type === 'Hero' && this.primarySkills.includes(advancementName)) ? 8 : 6;
            if (stats.skills) {
                let skillFound: boolean = false;
                for (let skill of stats.skills) {
                    if (skill.name === advancementName) {
                        skill.rating += 2;
                        skillFound = true;
                    }
                }
                if (!skillFound) {
                    stats.skills.push({'name':advancementName, 'rating': base_rating});
                }
            } else {
                stats.skills = [{'name':advancementName,'rating': base_rating}];
            }
        } else if (Abilities.includes(advancementName)) {
            const abilityReference : any = {'AGL':'agility','DEX':'dexterity','END':'endurance','KNW':'knowledge','SPR':'spirit','STR':'strength'};
            if (details && details.rating) {
                abilities[abilityReference[advancementName]] = details.rating;
            }
            abilities[abilityReference[advancementName]] += 2;
        } else if (Talents.includes(advancementName)) {
            if (!('talents' in stats)) {
                stats.talents = [];
            }
            stats.talents?.push(advancementName);
        } else {
            if (advancementName === 'MAR') {
                stats.melee?.map(melee => {
                    melee.rating += 2;
                    return melee;
                });
                return;
            }
            if (advancementName === 'RAR') {
                stats.range?.map(range => {
                    range.rating += 2;
                    return range;
                });
                return;
            }
            if (advancementName === 'CAR') {
                if (stats.casting) {
                    stats.casting.rating += 2;
                }
                return;
            }
            if (advancementName === 'DISC') {
                stats.discipline += 2;
                return;
            }
            if (advancementName === 'SPD') {
                stats.speed += 1;
                return;
            }
            if (!('talents' in stats)) {
                stats.talents = [];
            }
            stats.talents?.push(advancementName);
        }
    }

    calculateStats(originalStats: ModelStats, originalValue: number) {
        let stats: ModelStats = JSON.parse(JSON.stringify(originalStats));
        let ability: number = (stats.type === 'Hero') ? 8 : 6;
        let modelValue: number = originalValue;
        let abilities: {agility: number, dexterity: number, endurance: number, knowledge: number, spirit: number, strength: number} | any = {};
        for (let abilityName of this.abilityList) {
            abilities[abilityName] = ability;
        }
        abilities = (<any>Object).assign(abilities, stats.abilities);

        if (stats.options) {
            for (let opt of stats.options) {
                if (opt.selected) {
                    this.addAdvancement(stats, abilities, opt.name, opt);
                }
            }
        }

        if (stats.veteran) {
            for (let vet of stats.veteran) {
                if (vet.selected) {
                    this.addAdvancement(stats, abilities, vet.name, vet);
                    // modelValue += vet.cost;
                }
            }
        }

        if (!('advancements' in stats)) {
            stats.advancements = [];
        }
        if (stats.advancements) {
            for (let adv of stats.advancements) {
                this.addAdvancement(stats, abilities, adv.name);
                modelValue += adv.cost;
            }
        }
        
        if (!('items' in stats)) {
            stats.items = [];
        }
        if (stats.items) {
            for (let item of stats.items) {
                if (!item) {
                    break;
                }
                if (!('advancement' in item)) {
                    this.addAdvancement(stats, abilities, item.advancement);
                }
                modelValue += item.cost;
            }
        }

        if (!('injuries' in stats)) {
            stats.injuries = [];
        }
        if (stats.injuries) {
            for (let inj of stats.injuries) {
                if (Abilities.includes(inj)) {
                    const abilityReference : any = {'AGL':'agility','DEX':'dexterity','END':'endurance','KNW':'knowledge','SPR':'spirit','STR':'strength'};
                    abilities[abilityReference[inj]] -= 2;
                } else if (['Hate[faction]','Reluctant'].includes(inj)) {
                    stats.talents?.push(inj);
                } else {
                    if (inj === 'DISC') {
                        stats.discipline -= 2;
                    }
                    if (inj === 'SPD') {
                        stats.speed -= 1;
                    }
                }
            }
        }

        let defense: number = (stats.shield === 'S' || stats.shield === 'AN' || stats.shield === 'B' || stats.shield === 'AS') ? 5 : (stats.shield === 'L') ? 6 : 4;
        if (abilities.agility === 4) {
            defense = -1;
        } else {
            for (let abilityTier of this.abilityTiers) {
                if (abilities.agility >= abilityTier) {
                    defense++;
                }
            }
        }

        let ratingBonus: number = 0;
        if (abilities.dexterity === 4) {
            ratingBonus = -1;
        } else {
            for (let abilityTier of this.abilityTiers) {
                if (abilities.dexterity >= abilityTier) {
                    ratingBonus++;
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
            for (let abilityTier of this.abilityTiers) {
                if (abilities.endurance >= abilityTier) {
                    lifePoints++;
                }
            }
        }

        let skillBonus: number = 0;
        if (abilities.knowledge === 4) {
            skillBonus = -1;
        } else {
            for (let abilityTier of this.abilityTiers) {
                if (abilities.knowledge >= abilityTier) {
                    skillBonus++;
                }
            }
        }

        let moraleBonus: number = 0;
        if (abilities.spirit === 4) {
            moraleBonus = -1;
        } else {
            for (let abilityTier of this.abilityTiers) {
                if (abilities.spirit >= abilityTier) {
                    moraleBonus++;
                }
            }
        }

        let damageBonus: number = 0;
        if (abilities.strength === 4) {
            damageBonus = -1;
        } else {
            for (let abilityTier of this.abilityTiers) {
                if (abilities.strength >= abilityTier) {
                    damageBonus++;
                }
            }
        }

        let skillList: string = '';
        if (stats.skills) {
            skillList = stats.skills.map(skill => `${skill.name} - d${skill.rating}`).join(', ');
        }

        let talentList: string = '';
        if (stats.talents) {
            const talents = stats.talents.map((m) => {
                const count = stats.talents?.reduce((sum, r) => (r === m) ? sum + 1 : sum, 0) ?? 0;
                return (count > 1) ? `${m}[${count}]` : m;
            });
            talentList = Array.from(new Set(talents)).join(', ');
        }

        let itemList: string = '';
        if (stats.items) {
            itemList = stats.items.map(item => `${item.name}`).join(', ');
        }
        
        let updatedStats: stats = {
            abilities,
            defense,
            'discipline': stats.discipline,
            itemList,
            lifePoints,
            modelValue,
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