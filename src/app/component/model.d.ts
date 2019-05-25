export interface Advancement {
    name: string,
    cost: number
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
    lifePoints: number,
    melee?: MeleeWeapon[],
    moraleBonus?: number,
    range?: RangeWeapon[],
    shield?: "AN" | "L" | "S",
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
    race: "Beast" | "Chaler" | "Demon" | "Faeler" | "Kuzaarik" | "Shakrim" | "Symker" | "Trillian"
    stats: ModelStats,
    type: "Caster" | "Leader" | "Standard",
    value: number
}