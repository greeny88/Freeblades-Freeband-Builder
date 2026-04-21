import { Abilities, AdvancementTalents, MeleeWeapons, RangeWeapons, Skills } from "./builder/model-selector/advancements";
import { Models } from "./builder/model-selector/models";

export const Factions = ["Azura Windborne","Black Cutlass Bandits","Black Rose Bandits", "Black Thorn Bandits", "The Collective", "Darkgrove Demons", "Demons of Karelon", "Eclipse Sisterhood", "Falkaaran Adventurers", "Grular Invaders", "Haradelan Questers", "Kandoran Deathmasters", "Koronnan Moonsworn", "Kuzaarik Forgers", "Mershael Corsairs", "Ravenblade Mercenaries", "Shakrim Wavestalkers", "Traazorite Crusaders", "Trilian Seekers", "Urdaggar Tribes of Ruin", "Urdaggar Tribes of Valor", "Varkraalan Unchained"] as const;
const MeleeWeaponNames = MeleeWeapons.map(w => w.name);
const RangeWeaponNames = RangeWeapons.map(w => w.name);

export interface Weapon {
    altSelected?: boolean,
    name: typeof MeleeWeaponNames[number] | typeof RangeWeaponNames[number],
    rating: number
}

interface BaseWeapon {
    abilities?: ('acd' | 'an' | 'clo' | 'chg' | 'de' | 'dec' | 'dis' | 'dr' | 'dsh' | 'ent' | 'flm' | 'gre' | 'hv' | 'hqu' | 'hin' | 'ice' | 'imp' | 'idf' | 'lb' | 'let' | 'mag' | 'mi' | 'ovr' | 'pin' | 'pul' | 'qs' | 'qu' | 'ra' | 're' | 'scl' | 'sb' | 'shk' | 'slr' | 'so' | 'so2' | 'su' | 'stky' | 'srg' | 'swp' | 'sw' | 'thr' | 'te' | 'wrl' | 'wth' | 'unw' | 'ven' | 'aoe 2in')[],
    abilityList?: string,
    altSelected?: boolean,
    damage: number,
    damageBonus?: number,
    name: string,
    rating: number,
    ratingBonus?: number
}

export interface MeleeWeapon extends BaseWeapon {
    name: typeof MeleeWeaponNames[number]
}

export interface RangeWeapon extends BaseWeapon {
    distance: number,
    name: typeof RangeWeaponNames[number]
}

interface RawStats {
    abilities?: {
        agility?: number,
        dexterity?: number,
        endurance?: number,
        knowledge?: number,
        spirit?: number,
        strength?: number
    },
    armor: number,
    casting?: {
        altSelected?: boolean,
        name: string,
        power: number,
        rating: number,
        ratingBonus?: number,
        type: "energy" | "spirit" | "sorcery"
    },
    discipline: number,
    focus?: {
        name: string,
        rating: number,
        ratingBonus?: number
    },
    melee?: Weapon[],
    options?: {
        name: string,
        rating?: number,
        selected?: boolean
    }[],
    performance?: {
        name: string,
        rating: number,
        ratingBonus?: number
    },
    range?: Weapon[],
    shield?: "AN" | "AS" | "B" | "L" | "P" | "S",
    skills?: {
        name: string,
        rating: number
    }[],
    speed: number,
    talents?: string[],
    type: "Follower" | "Hero",
    veteran?: {
        cost: number,
        name: string,
        rating?: number,
        selected?: boolean
    }[];
}

interface Stats extends RawStats {
    abilities: {
        agility: number,
        dexterity: number,
        endurance: number,
        knowledge: number,
        spirit: number,
        strength: number
    },
    advancements?: {
        cost: number,
        name: string | undefined
    }[],
    defense: number,
    injuries?: string[],
    items?: {
        advancement?: string,
        cost: number,
        name: string
    }[],
    leaderOptions?: {
        name: string,
        selected?: boolean
    }[],
    lifePoints: number,
    melee?: MeleeWeapon[],
    modelValue: number,
    moraleBonus: number,
    range?: RangeWeapon[],
    skillBonus: number,
    speed: number
}

export interface Model {
    characterName?: string,
    component_id?: string,
    displayName: string,
    factions: (typeof Factions[number])[],
    gender: "M" | "F",
    name: string,
    primaryFaction: (typeof Factions[number] | "Wandering Allies" | "Familiar")[],
    race: "Azura" | "Beast" | "Chaler" | "Demon" | "Faeler" | "Kandoran" | "Koronnan" | "Kuzaarik" | "Shakrim" | "Symker" | "Trilian"
    stats: RawStats,
    trustedFactions?: (typeof Factions[number])[],
    type: "Caster" | "Leader" | "Standard",
    value: number
}

export class cModel {
    characterName?: string;
    displayName: string;
    factions: (typeof Factions[number])[];
    gender: "M" | "F";
    name: string;
    primaryFaction: (typeof Factions[number] | "Wandering Allies" | "Familiar")[];
    race: "Azura" | "Beast" | "Chaler" | "Demon" | "Faeler" | "Kandoran" | "Koronnan" | "Kuzaarik" | "Shakrim" | "Symker" | "Trilian";
    rawStats: RawStats;
    stats?: Stats;
    trustedFactions?: (typeof Factions[number])[];
    type: "Caster" | "Leader" | "Standard";
    value: number;

    constructor(name: string, type: "Caster" | "Leader" | "Standard", faction: typeof Factions[number], modelList: Model[] = Models) {
        const model: Model | undefined = modelList.find(model => model.name === name && model.type === type && model.factions.includes(faction))
        if (model) {
            this.displayName = model.displayName;
            this.factions = model.factions;
            this.gender = model.gender;
            this.name = model.name;
            this.primaryFaction = model.primaryFaction;
            this.race = model.race;
            this.rawStats = model.stats;
            this.stats = this.calculateStats(model.stats, model.value);
            this.trustedFactions = model.trustedFactions;
            this.type = model.type;
            this.value = model.value;
        } else {
            throw new Error(`Model not found for name: ${name}, type: ${type}, faction: ${faction}`);
        }
    }

    calculateStats(originalStats: cModel["rawStats"] | cModel["stats"], originalValue: number): cModel["stats"] {
        const abilityList: string[] = ['agility', 'dexterity', 'endurance', 'knowledge', 'spirit', 'strength'];
        const abilityTiers: number[] = [10, 14, 20, 30];

        let stats: cModel["stats"] = JSON.parse(JSON.stringify(originalStats));
        if (!stats) {
            // throw error
            return;
        }
        let ability: number = (stats.type === 'Hero') ? 8 : 6;
        let modelValue: number = originalValue;

        let abilities: {agility: number, dexterity: number, endurance: number, knowledge: number, spirit: number, strength: number} | any = {};
        for (let abilityName of abilityList) {
            abilities[abilityName] = ability;
        }
        stats.abilities = (<any>Object).assign(abilities, stats.abilities);

        if (stats.melee) {
            for (let melee of stats.melee) {
                melee = Object.assign(melee, MeleeWeapons.find(m => m.name === melee.name));
            }
        }

        if (stats.range) {
            for (let range of stats.range) {
                range = Object.assign(range, RangeWeapons.find(r => r.name === range.name));
            }
        }

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
                if ('advancement' in item) {
                    this.addAdvancement(stats, abilities, item.advancement);
                }
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
                    if (!('talents' in stats)) {
                        stats.talents = [];
                    }
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
        defense = stats.defense ? stats.defense + defense : defense; 
        if (abilities.agility === 4) {
            defense--;
        } else {
            for (let abilityTier of abilityTiers) {
                if (abilities.agility >= abilityTier) {
                    defense++;
                }
            }
        }
        stats.defense = defense;

        let ratingBonus: number = 0;
        if (abilities.dexterity === 4) {
            ratingBonus--;
        } else {
            for (let abilityTier of abilityTiers) {
                if (abilities.dexterity >= abilityTier) {
                    ratingBonus++;
                }
            }
        }

        let lifePoints: number = (stats.type === 'Hero') ? 2 : 1;
        if (stats.talents) {
            for (let talent of stats.talents) {
                if (['Leader', 'Tough', 'Rise of a Hero'].indexOf(talent) > -1) {
                    lifePoints++;
                }
            }
        }
        if (abilities.endurance === 4) {
            lifePoints--;
        } else {
            for (let abilityTier of abilityTiers) {
                if (abilities.endurance >= abilityTier) {
                    lifePoints++;
                }
            }
        }
        stats.lifePoints = lifePoints;

        let skillBonus: number = 0;
        if (abilities.knowledge === 4) {
            skillBonus--;
        } else {
            for (let abilityTier of abilityTiers) {
                if (abilities.knowledge >= abilityTier) {
                    skillBonus++;
                }
            }
        }
        stats.skillBonus = skillBonus;

        let moraleBonus: number = 0;
        if (abilities.spirit === 4) {
            moraleBonus--;
        } else {
            for (let abilityTier of abilityTiers) {
                if (abilities.spirit >= abilityTier) {
                    moraleBonus++;
                }
            }
        }
        stats.moraleBonus = moraleBonus;

        let damageBonus: number = 0;
        if (abilities.strength === 4) {
            damageBonus--;
        } else {
            for (let abilityTier of abilityTiers) {
                if (abilities.strength >= abilityTier) {
                    damageBonus++;
                }
            }
        }

        if (stats.melee) {
            let melee = stats.melee;
            for (let weapon of melee) {
                if (!('damage' in weapon)) {
                    continue;
                }
                if (weapon.altSelected) {
                    weapon.rating += 2;
                }
                weapon.ratingBonus = ratingBonus;
                if ( !(['Bite','Warhorse'].includes(weapon.name) && stats.talents?.includes('Cavalry')) ) {
                    weapon.damageBonus = (weapon.damageBonus) ? damageBonus + weapon.damageBonus : damageBonus;
                }
                if (weapon.abilities) {
                    weapon.abilityList = weapon.abilities.join(', ');
                }
            }
            stats.melee = melee;
        }

        if (stats.range) {
            let range = stats.range;
            for (let weapon  of range) {
                if (!('damage' in weapon)) {
                    continue;
                }
                if (weapon.altSelected) {
                    weapon.rating += 2;
                }
                weapon.ratingBonus = ratingBonus;
                weapon.damageBonus = (weapon.damageBonus) ? damageBonus + weapon.damageBonus : damageBonus;
                if (weapon.abilities) {
                    weapon.abilityList = weapon.abilities.join(', ');
                }
            }
            stats.range = range;
        }

        if (stats.casting) {
            let casting = stats.casting;
            if (casting.altSelected) {
                casting.rating += 2;
            }
            casting.ratingBonus = skillBonus;
            stats.casting = casting;
        }
        
        return stats;
    }

    addAdvancement(stats: cModel["stats"], abilities: string[], advancementName: string | undefined, details?: any) {
        const primarySkills: string[] = ['Climb','Find','Jump','Swim'];
        if (!advancementName || !stats) {
            return;
        }
        if (Skills.includes(advancementName)) {
            const base_rating = (details && details.rating) ? details.rating : (stats.type === 'Hero' && primarySkills.includes(advancementName)) ? 8 : 6;
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
            } else {
                abilities[abilityReference[advancementName]] += 2;
            }
        } else if (AdvancementTalents.includes(advancementName)) {
            if (!('talents' in stats)) {
                stats.talents = [];
            }
            stats.talents?.push(advancementName);
        } else {
            // TODO: handle adding new weapon
            if (advancementName.startsWith('RW')) {
                const [ rating, tempname ] = advancementName.split(':')[1].split('|');
                const name: any = tempname;
                let tempWeapon: Weapon = {
                    name,
                    rating: parseInt(rating)
                };
                const weapon = Object.assign(tempWeapon, RangeWeapons.find(r => r.name === name));

                if (stats.range) {
                    stats.range.push(weapon);
                } else {
                    stats.range = [weapon];
                } 
                return;
            }
            if (advancementName === 'MAR') {
                stats.melee?.map(melee => {
                    melee.rating += 2;
                    return melee;
                });
                return;
            }
            if (advancementName === 'MD') {
                stats.melee?.map(melee => {
                    if ('damage' in  melee) {
                        melee.damageBonus = 1 + (melee.damageBonus ?? 0);
                    }
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
            if (advancementName === 'DEF') {
                stats.defense = (stats.defense) ? stats.defense + 1 : 1;
                return;
            }
            if (advancementName.startsWith('AV')) {
                stats.armor += parseInt(advancementName.charAt(2));
                return;
            }
            if (advancementName.startsWith('CP')) {
                if (stats.casting) {
                    stats.casting.power += parseInt(advancementName.charAt(2));
                }
                return;
            }
            if (advancementName === 'Rise of a Hero') {
                for (let abilityName in abilities) {
                    abilities[abilityName] = abilities[abilityName] + 2;
                }
                stats.discipline += 2;
            }
            if (!('talents' in stats)) {
                stats.talents = [];
            }
            stats.talents?.push(advancementName);
        }
    }

    getSkillList(stats: cModel["stats"]): string {
        let skillList: string = '';
        if (stats?.skills) {
            skillList = stats.skills.map(skill => `${skill.name} - d${skill.rating}`).join(', ');
        }
        return skillList;
    }

    getTalentList(stats: cModel["stats"]): string {
        let talentList: string = '';
        if (stats?.talents) {
            const talents = stats.talents.map((m) => {
                const count = stats.talents?.reduce((sum, r) => (r === m) ? sum + 1 : sum, 0) ?? 0;
                return (count > 1) ? `${m}[${count}]` : m;
            });
            talentList = Array.from(new Set(talents)).join(', ');
        }
        return talentList;
    }

    getItemList(stats: cModel["stats"]): string {
        let itemList: string = '';
        if (stats?.items) {
            itemList = stats.items.map(item => `${item.name}`).join(', ');
        }
        return itemList;
    }
}