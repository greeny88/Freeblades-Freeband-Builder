export interface Advancement {
    cost: number,
    name: string
}

export interface Items {
    advancement?: string,
    cost: number,
    name: string
}

export interface MeleeWeapon {
    abilities?: string[],
    abilityList?: string,
    damage: number,
    damageBonus?: number,
    name: string,
    rating: number,
    ratingBonus?: number
}

export interface RangeWeapon {
    abilities?: string[],
    abilityList?: string,
    damage: number,
    damageBonus?: number,
    distance: number,
    name: string,
    rating: number,
    ratingBonus?: number
}

export interface Skill {
    name: string,
    rating: number
}

export interface ModelStats {
    abilities?: {
        agility?: number,
        dexterity?: number,
        endurance?: number,
        knowledge?: number,
        spirit?: number,
        strength?: number
    },
    advancements?: Advancement[],
    armor: number,
    casting?: {
        power: number,
        rating: number,
        ratingBonus?: number
    },
    defense: number,
    discipline: number,
    injuries?: string[],
    items?: Items[],
    itemList: string,
    lifePoints: number,
    melee?: MeleeWeapon[],
    modelValue?: number,
    moraleBonus?: number,
    range?: RangeWeapon[],
    shield?: "AN" | "AS" | "B" | "L" | "P" | "S",
    skillBonus?: number,
    skills?: Skill[],
    skillList?: string,
    speed: number,
    talents?: string[],
    talentList?: string,
    type: "Follower" | "Hero",
    veteranAdvancements?: Advancement[]
}

export interface Model {
    characterName: string,
    component_id?: string,
    displayName: string,
    factions: string[],
    gender: "M" | "F",
    name: string,
    race: "Beast" | "Chaler" | "Demon" | "Faeler" | "Kandoran" | "Koronnan" | "Kuzaarik" | "Shakrim" | "Symker" | "Trillian"
    stats: ModelStats,
    type: "Caster" | "Leader" | "Standard",
    value: number
}