export interface Advancement {
    cost: number,
    name: string | undefined
}

export interface Items {
    advancement?: string,
    cost: number,
    name: string
}

export const MeleeWeaponNames: "Banehammer" | "Barbed Javelin" | "Barbed Whip" | "Battleaxe" | "Bite" | "Boarding Pike" | "Broadsword" | "Claw" | "Claw 2x" | "Cleaver" | "Club" | "Cutlass" | "Dagger" | "Dire Claws 2x" | "Falchion" | "Fang Blade" | "Fist" | "Fist 2x" | "Flail" | "Gadget" | "Great Club" | "Greatsword" | "Handclaws" | "Handclaws 2x" | "Hartblade" | "Heavy Falchion" | "Herenkal" | "Herenkal 2x" | "Hunting Spear" | "Ice Axe" | "Impaler" | "Javelin" | "Kasari" | "Knife" | "Kolekar" | "Kranara" | "Lance" | "Long Knife" | "Long Knife 2x" | "Longspear" | "Longsword (1h)" | "Longsword (2h)" | "Mace" | "Moonsglave" | "Moonsickle" | "Morning Star" | "Morph" | "Najana" | "Net" | "Parry Dagger" | "Petadrakh" | "Pike" | "Pit Glave" | "Razorfang" | "Ripper" | "Rusty Blade" | "Saber" | "Sakhazet" | "Sanghara" | "Sanghara 2x" | "Scythe" | "Shadowspear" | "Short Spear" | "Short Sword" | "Skull Staff" | "Spikedrakh" | "Staff" | "Tail" | "Taumari" | "Tavsetar" | "Thorn" | "Thresher" | "Toloron" | "Trident" | "War Axe" | "War Axe 2x" | "War Mattock" | "Warhammer" | "Warhorse" | "Whip" | "Wolfsword" | "Zeradrakh"

export const RangeWeaponNames: "Atlatl" | "Barbed Javelin" | "Blowgun" | "Bolas" | "Bolter" | "Bow" | "Composite Bow" | "Crossbow" | "Double Crossbow" | "Gadoru" | "Grappler" | "Hatchet" | "Herenkal" | "Javelin" | "Lasso" | "Longbow" | "Morph" | "Poison Pellet" | "Poison Spit" | "Recurved Short Bow" | "Roondar" | "Sling" | "Spider Net" | "Talon" | "Tennko" | "Thorny Vines" | "Vranshar" | "War Axe" | "Water Blast"

export interface Weapon {
    altSelected?: boolean,
    name: typeof MeleeWeaponNames | typeof RangeWeaponNames,
    rating: number
}

interface BasicWeapon {
    abilities?: ('acd' | 'an' | 'chg' | 'de' | 'dec' | 'dis' | 'dsh' | 'ent' | 'flm' | 'gre' | 'hv' | 'hqu' | 'hin' | 'ice' | 'imp' | 'idf' | 'lb' | 'let' | 'mag' | 'mi' | 'ovr' | 'pin' | 'pul' | 'qs' | 'qu' | 'ra' | 're' | 'scl' | 'sb' | 'shk' | 'slr' | 'so' | 'so2' | 'su' | 'stky' | 'srg' | 'swp' | 'sw' | 'thr' | 'te' | 'unw' | 'ven' | 'aoe 2in')[],
    abilityList?: string,
    altSelected?: boolean,
    damage: number,
    damageBonus?: number,
    name: string,
    rating: number,
    ratingBonus?: number
}

export interface MeleeWeapon extends BasicWeapon {
    name: typeof MeleeWeaponNames
}

export interface RangeWeapon extends BasicWeapon {
    distance: number,
    name: typeof RangeWeaponNames
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
        altSelected?: boolean,
        power: number,
        rating: number,
        ratingBonus?: number
    },
    discipline: number,
    injuries?: string[],
    items?: Items[],
    itemList?: string,
    leaderOptions?: {
        name: string,
        selected?: boolean
    }[],
    lifePoints?: number,
    melee?: (Weapon | MeleeWeapon)[],
    modelValue?: number,
    moraleBonus?: number,
    options?: {
        name: string,
        rating?: number,
        selected?: boolean
    }[],
    range?: (Weapon | RangeWeapon)[],
    shield?: "AN" | "AS" | "B" | "L" | "P" | "S",
    skillBonus?: number,
    skills?: Skill[],
    skillList?: string,
    speed: number,
    talents?: string[],
    talentList?: string,
    type: "Follower" | "Hero",
    veteran?: {
        cost: number,
        name: string,
        rating?: number,
        selected?: boolean
    }[]
}

export const Factions: ["Black Rose Bandits", "Black Thorn Bandits", "The Collective", "Darkgrove Demons", "Demons of Karelon", "Eclipse Sisterhood", "Falkaaran Adventurers", "Grular Invaders", "Haradelan Questers", "Kandoran Deathmasters", "Koronnan Moonsworn", "Kuzaarik Forgers", "Mershael Corsairs", "Ravenblade Mercenaries", "Shakrim Wavestalkers", "Traazorite Crusaders", "Trilian Seekers", "Urdaggar Tribes of Ruin", "Urdaggar Tribes of Valor"];

export interface Model {
    characterName?: string,
    component_id?: string,
    displayName: string,
    factions: (typeof Factions[number])[],
    gender: "M" | "F",
    name: string,
    primaryFaction?: typeof Factions[number] | "Wandering Allies",
    race: "Beast" | "Chaler" | "Demon" | "Faeler" | "Kandoran" | "Koronnan" | "Kuzaarik" | "Shakrim" | "Symker" | "Trillian"
    stats: ModelStats,
    type: "Caster" | "Leader" | "Standard",
    value: number
}