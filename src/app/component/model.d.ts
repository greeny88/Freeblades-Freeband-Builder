export interface ModelStats {
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
        power: number,
        rating: number
    },
    defense: number,
    discipline: number,
    lifePoints: number,
    melee?: {
        abilities?: string[],
        abilityList?: string,
        damage: number,
        damageBonus?: number,
        name: string,
        rating: number,
        ratingBonus?: number
    }[],
    moraleBonus?: number,
    range?: {
        abilities?: string[],
        abilityList?: string,
        damage: number,
        damageBonus?: number,
        distance: number,
        name: string,
        rating: number,
        ratingBonus?: number
    }[],
    shield?: string,
    skillBonus?: number,
    skills?: {
        name: string,
        rating: number
    }[],
    skillList?: string,
    speed: number,
    talents?: string[],
    talentList?: string,
    type: "Hero" | "Follower"
}

export interface Model {
    characterName: string,
    component_id?: string,
    displayName: string,
    factions: string[],
    gender: "M" | "F",
    name: string,
    stats: ModelStats,
    type: "Leader" | "Caster" | "Standard",
    value: number
}