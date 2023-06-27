export interface Advancement {
    cost: number,
    name: string | undefined
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
    name: "Banehammer" | "Barbed Javelin" | "Barbed Whip" | "Battleaxe" | "Bite" | "Boarding Pike" | "Broadsword" | "Claw" | "Claw 2x" | "Cleaver" | "Club" | "Cutlass" | "Dagger" | "Dire Claws" | "Dire Claws 2x" | "Falchion" | "Fist" | "Fist 2x" | "Flail" | "Gadget" | "Great Club" | "Greatsword" | "Handclaws" | "Handclaws 2x" | "Hartblade" | "Heavy Falchion" | "Herenkal" | "Herenkal 2x" | "Hunting Spear" | "Ice Axe" | "Impaler" | "Javelin" | "Kasari" | "Knife" | "Kolekar" | "Kranara" | "Lance" | "Long Knife" | "Long Knife 2x" | "Longspear" | "Longsword" | "Mace" | "Moonsglave" | "Moonsickle" | "Morning Star" | "Morph" | "Najana" | "Net" | "Parry Dagger" | "Petadrakh" | "Pike" | "Pit Glave" | "Razorfang" | "Ripper" | "Rusty Blade" | "Saber" | "Sakhazet" | "Sanghara" | "Sanghara 2x" | "Scythe" | "Shadowspear" | "Short Spear" | "Short Sword" | "Skull Staff" | "Spikedrakh" | "Staff" | "Tail" | "Taumari" | "Tavsetar" | "Thorn" | "Thresher" | "Toloron" | "Trident" | "War Axe" | "War Axe 2x" | "War Mattock" | "Warhammer" | "Warhorse" | "Whip" | "Wolfsword" | "Zeradrakh",
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
    defense?: number,
    discipline: number,
    injuries?: string[],
    items?: Items[],
    itemList?: string,
    lifePoints?: number,
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
    characterName?: string,
    component_id?: string,
    displayName: string,
    factions: ("Black Rose Bandits" | "Black Thorn Bandits" | "Darkgrove Demons" | "Demons of Karelon" | "Eclipse Sisterhood" | "Falkaaran Adventurers" | "Grular Invaders" | "Haradelan Questers" | "Kandoran Deathmasters" | "Koronnan Moonsworn" | "Kuzaarik Forgers" | "Mershael Corsairs" | "Ravenblade Mercenaries" | "Shakrim Wavestalkers" | "Traazorite Crusaders" | "Trilian Seekers" | "Urdaggar Tribes of Ruin" | "Urdaggar Tribes of Valor")[],
    gender: "M" | "F",
    name: string,
    primaryFaction?: string,
    race: "Beast" | "Chaler" | "Demon" | "Faeler" | "Kandoran" | "Koronnan" | "Kuzaarik" | "Shakrim" | "Symker" | "Trillian"
    stats: ModelStats,
    type: "Caster" | "Leader" | "Standard",
    value: number
}