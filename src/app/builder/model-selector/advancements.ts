import { Items, MeleeWeapon, RangeWeapon } from "src/app/model";

const Abilities: string[] = ['AGL','DEX','END','KNW','SPR','STR'];
const Equipment: Items[] = [{
    name: 'Alchemical Arrow',
    cost: 1
},{
    name: 'Blue Fire',
    cost: 4
},{
    name: 'Book of Lore',
    cost: 1
},{
    name: 'Fine Crafted Weapon',
    cost: 3
},{
    name: 'Forest Cloak',
    cost: 3
},{
    name: 'Ghili Suit',
    cost: 3
},{
    name: 'Improved Armor',
    cost: 3
},{
    name: 'Lantern',
    cost: 1
},{
    name: 'Liquid Ice',
    cost: 2
},{
    name: 'Lockpick Kit',
    cost: 3
},{
    name: 'Rope',
    cost: 1
},{
    name: 'Smoke Stick',
    cost: 3
},{
    name: 'Snowshoes',
    cost: 1
},{
    name: 'Stun Bomb',
    cost: 4
},{
    name: 'Starsilk',
    cost: 1
},{
    name: 'Torches',
    cost: 3
},{
    name: 'Treasure Map',
    cost: 1
},{
    name: 'War Markings',
    cost: 2
}];
const MagicItems: Items[] = [{
    name:'Nimblesocks',
    advancement:'AGL',
    cost:3
},{
    name:'Talisman of Fortitude',
    advancement:'END',
    cost:3
},{
    name:'Belt of Niktos',
    advancement:'STR',
    cost:3
},{
    name:'Lithefinger Ring',
    advancement:'DEX',
    cost:3
},{
    name:'Amulet of Shaldathar',
    advancement:'SPR',
    cost:3
},{
    name:'Circlet of Understanding',
    advancement:'KNW',
    cost:3
},{
    name:'Divining Rod',
    advancement:'Find',
    cost:3
},{
    name:'Boots of Leaping',
    advancement:'Jump',
    cost:3
},{
    name:'Cloak of Night',
    advancement:'Ambush',
    cost:3
},{
    name:'Vekul Boots',
    advancement:'Mountaineer', // add Frostfoot
    cost:3
},{
    name:'Belt of Mallok',
    advancement:'Battler',
    cost:3
},{
    name:'Mask of the Wolf',
    advancement:'Fearsome',
    cost:3
},{
    name:'Targeteer\'s Monacle',
    advancement:'RAR',
    cost:3
},{
    name:'Cheljaron\'s Gem',
    advancement:'DEF',
    cost:3
},{
    name:'Gallan\'s Boots',
    advancement:'Arboreal',
    cost:3
},{
    name:'Ring of Protection',
    advancement:'AV',
    cost:3
},{
    name:'Bracers of Korg',
    advancement:'MD', // melee damage
    cost:3
},{
    name:'Gauntlets of Rage',
    advancement:'Frenzy',
    cost:3
},{
    name:'Horn of Pelrat',
    advancement:'Taunt',
    cost:3
},{
    name:'Darlika\'s Boots',
    advancement:'Infiltrate',
    cost:3
},{
    name:'Boots of Quickness',
    advancement:'SPD',
    cost:3
},{
    name:'Lion Helm',
    advancement:'Lion\'s Roar',
    cost:3
},{
    name:'Necklace of Courage',
    advancement:'Steadfast',
    cost:3
},{
    name:'Warrior\'s Bracers',
    advancement:'MAR',
    cost:3
},{
    name:'Jaws of Karul',
    advancement:'Extra attack', // additional melee weapon
    cost:3
},{
    name:'Arimol\'s Cloak',
    advancement:'Chameleon',
    cost:3
},{
    name:'Mystic\'s Ring',
    advancement:'Power,2', // +2 power
    cost:3
},{
    name:'Coin of Nespetos',
    advancement:'Merchant',
    cost:3
},{
    name:'Yurrik\'s Belt',
    advancement:'Die Hard',
    cost:3
},{
    name:'Ring of Evarin',
    advancement:'Counterspell', // d8 counterspell
    cost:3
},{
    name:'Gallan\'s Gloves',
    advancement:'Contain',
    cost:3
},{
    name:'Boots of Sabhir',
    advancement:'Amphibious',
    cost:3
},{
    name:'Eyes of Ariemi',
    advancement:'Accurate Shot',
    cost:3
},{
    name:'Loin\'s Mane',
    advancement:'Assault',
    cost:3
},{
    name:'Horn of the Wolflord',
    advancement:'Battlecry',
    cost:3
},{
    name:'Circlet of Fury',
    advancement:'Furious',
    cost:3
},{
    name:'Togon\'s Mirror',
    advancement:'Deflect',
    cost:3
},{
    name:'Mara\'s Mask',
    advancement:'Disuise',
    cost:3
},{
    name:'Belt of Fazik-kel',
    advancement:'Dodge',
    cost:3
},{
    name:'Heartmender',
    advancement:'Casualty reroll',
    cost:3
},{
    name:'Belt of Contempt',
    advancement:'Hate[MAR]',
    cost:3
},{
    name:'Soldier\'s Boots',
    advancement:'March',
    cost:3
},{
    name:'Zakzin\'s Bones',
    advancement:'Intensify Spell',
    cost:3
},{
    name:'Bracers of Darien',
    advancement:'Missle Parry',
    cost:3
},{
    name:'Goblet of Glory',
    advancement:'Bloodstruck',
    cost:3
},{
    name:'Ring of Fire',
    advancement:'Flaming Weapon',
    cost:3
},{
    name:'Mirazham\'s Cloak',
    advancement:'Opportune Strike',
    cost:3
},{
    name:'Raven\'s Wings',
    advancement:'Raven Stance',
    cost:3
},{
    name:'Darkwand',
    advancement:'Gloom 6in',
    cost:3
},{
    name:'Amulet of Guard',
    advancement:'Protector',
    cost:3
},{
    name:'Lens of Sep',
    advancement:'Sharpshooter',
    cost:3
},{
    name:'Tinor\'s Torque',
    advancement:'1dl counterspell',
    cost:3
},{
    name:'Ghost Veil',
    advancement:'Spirit',
    cost:3
},{
    name:'Hunter\'s Lasso',
    advancement:'Subdue',
    cost:3
},{
    name:'Necklace of Fate',
    advancement:'Lucky',
    cost:3
},{
    name:'Scales of Nespetos',
    advancement:'Cheaper Gear',
    cost:3
},{
    name:'Eliopor\'s Ring',
    advancement:'1dl spell damage',
    cost:3
},{
    name:'Bracelet of Ilvayn',
    advancement:'Accurate Strike',
    cost:3
},{
    name:'Goggles of Mer',
    advancement:'Witchsight',
    cost:3
},{
    name:'Mirror Gem',
    advancement:'Spell Riposte',
    cost:3
},{
    name:'Avalanche',
    advancement:'Artifact [Warhammer d11]',
    cost:9
},{
    name:'Crescent Moon',
    advancement:'Artifact [Saber d9]',
    cost:7
},{
    name:'Durzakul',
    advancement:'Artifact [Spikedrakh d9]',
    cost:9
},{
    name:'Liana\'s Bow',
    advancement:'Artifact [Longbow d9]',
    cost:6
},{
    name:'Mystic Map',
    advancement:'Artifact',
    cost:6
},{
    name:'Aelen\'s Ring',
    advancement:'Artifact',
    cost:8
},{
    name:'Zaidan\'s Banner',
    advancement:'Artifact',
    cost:9
},{
    name:'Variax Crystal',
    advancement:'Artifact',
    cost:9
},{
    name:'Shield of Ailea',
    advancement:'Artifact',
    cost:7
},{
    name:'Dark Shroud',
    advancement:'Artifact',
    cost:25
},{
    name:'Night\'s Edge',
    advancement:'Artifact',
    cost:30
}];
const Skills: string[] = [
    'Alchemy',
    'Camouflage',
    'Climb',
    'Devices',
    'Find',
    'Gambling',
    'Hone',
    'Hunt',
    'Intimidate',
    'Jump',
    'Stealth',
    'Swim',
    'Thievery'
];
const Talents: string[] = [
    'Accurate Shot',
    'Accurate Strike',
    'Active Defense',
    'Agile Charge',
    'Alpine',
    'Ambush',
    'Amphiibious',
    'Arboreal',
    'Armored Deflection',
    'Assult',
    'Awareness',
    'Backstep',
    'Battler',
    'Bladedancer',
    'Bladeflash',
    'Block',
    'Bloodstruck',
    'Bold',
    'Bribery',
    'Bull Rush',
    'Champion[Friend]',
    'Confine',
    'Conquer',
    'Contain',
    'Counterattack',
    'Crafty Dodge',
    'Cunning',
    'Deceptive Strike',
    'Deflect',
    'Deft',
    'Deft Rider',
    'Demonlore',
    'Die Hard',
    'Disguise',
    'Dodge',
    'Elusive',
    'Enhanced Ambush',
    'Enhanced Disguise',
    'Far Shot',
    'Feint',
    'Flurry',
    'Fortress',
    'Freerunner',
    'Frostfoot',
    'Furious',
    'Glacis',
    'Harasser',
    'Hardened',
    'Heroic Attack',
    'Hit and Run',
    'Impact',
    'Impetuous',
    'Infiltrate',
    'Intensify Spell',
    'Killing Strike',
    'Leaper',
    'March',
    'Marksman',
    'Medicine',
    'Meditation',
    'Merchant',
    'Missle Parry',
    'Mountaineer',
    'Nimble',
    'Opportune Strike',
    'Parry',
    'Peddler',
    'Plunging Fire',
    'Pouncer',
    'Power Attack',
    'Precise Shot',
    'Precise Throw',
    'Protector',
    'Prowl',
    'Punish',
    'Quarry',
    'Rapid Fire',
    'Rapid Reload',
    'Raven Stance',
    'Recover',
    'Recruiter',
    'Reluctant',
    'Retrograde',
    'Re-engage',
    'Running Shot',
    'Scout',
    'Scrounge',
    'Shadow',
    'Sharpshooter',
    'Shield Bash',
    'Shield Hook',
    'Shieldmate',
    'Sergeant[Follower type]',
    'Sidestep',
    'Sniper',
    'Spellbender',
    'Spellblocker',
    'Spellbracer',
    'Spelldancer',
    'Spellguider',
    'Spellhammer',
    'Spell Riposte',
    'Spotter',
    'Stable Shot[d8]',
    'Steadfast',
    'Strong-arm',
    'Sure Strike',
    'Subdue',
    'Tachan',
    'Taunt',
    'Teammate[Type]',
    'Tough',
    'Warden'
];

const MeleeWeapons: Omit<MeleeWeapon, 'rating'>[] = [{
    name: 'Banehammer',
    damage: 10,
    abilities: ['swp']
},{
    name: 'Barbed Javelin',
    damage: 6,
    damageBonus: 1
},{
    name: 'Barbed Whip',
    damage: 4,
    damageBonus: 1,
    abilities: ['ent','qs']
},{
    name: 'Battleaxe',
    damage: 10
},{
    name: 'Boarding Pike',
    damage: 8,
    abilities: ['pin']
},{
    name: 'Broadsword',
    damage: 8
},{
    name: 'Cleaver',
    damage: 6
},{
    name: 'Club',
    damage: 6
},{
    name: 'Cutlass',
    damage: 6,
    damageBonus: 1
},{
    name: 'Dagger',
    damage: 4
},{
    name: 'Dire Claw',
    damage: 6
},{
    name: 'Falchion',
    damage: 8
},{
    name: 'Fang Blade',
    damage: 6,
    abilities: ['ven']
},{
    name: 'Flail',
    damage: 10,
    abilities: ['sb']
},{
    name: 'Great Club',
    damage: 10
},{
    name: 'Greatsword',
    damage: 10
},{
    name: 'Halaztaf',
    damage: 6,
    damageBonus: 1
},{
    name: 'Handclaws',
    damage: 4
},{
    name: 'Herenkal',
    damage: 6,
    damageBonus: 1
},{
    name: 'Hartblade',
    damage: 10,
    abilities: ['let']
},{
    name: 'Hunting Spear',
    damage: 8,
    abilities: ['pin']
},{
    name: 'Ice Axe',
    damage: 6
},{
    name: 'Impaler',
    damage: 8,
    damageBonus: 1
},{
    name: 'Javelin',
    damage: 6
},{
    name: 'Kaiba',
    damage: 8,
    abilities: ['wrl']
},{
    name: 'Kasari',
    damage: 8,
    abilities: ['hin','qs']
},{
    name: 'Knife',
    damage: 4
},{
    name: 'Kolekar',
    damage: 10
},{
    name: 'Kranara',
    damage: 10,
    abilities: ['hv','mi','swp']
},{
    name: 'Lance',
    damage: 10,
    abilities: ['shk']
},{
    name: 'Long Knife',
    damage: 6
},{
    name: 'Longspear',
    damage: 8,
    abilities: ['so']
},{
    name: 'Longsword (1h)',
    damage: 8
},{
    name: 'Longsword (2h)',
    damage: 8,
    damageBonus: 1
},{
    name: 'Longsword (magic)',
    damage: 10,
    abilities: ['mag','flm']
},{
    name: 'Mace',
    damage: 8
},{
    name: 'Morning Star',
    damage: 8,
    abilities: ['sb']
},{
    name: 'Najana',
    damage: 6,
    damageBonus: 1,
    abilities: ['let','so']
},{
    name: 'Moonsglave',
    damage: 8,
    abilities: ['te']
},{
    name: 'Moonsickle',
    damage: 6,
    damageBonus: 1
},{
    name: 'Net',
    damage: 0,
    abilities: ['pin','qs']
},{
    name: 'Parry Dagger',
    damage: 4,
    abilities: ['sw']
},{
    name: 'Petadrakh',
    damage: 8,
    damageBonus: 1,
    abilities: ['qs']
},{
    name: 'Pike',
    damage: 8,
    abilities: ['so2','imp','unw']
},{
    name: 'Pit Glave',
    damage: 8,
    damageBonus: 1,
    abilities: ['hin']
},{
    name: 'Razorfang',
    damage: 10,
    abilities: ['swp']
},{
    name: 'Saber',
    damage: 8
},{
    name: 'Sakhazet',
    damage: 8,
    damageBonus: 1,
    abilities: ['let']
},{
    name: 'Sanghara',
    damage: 6
},{
    name: 'Scythe',
    damage: 10,
    abilities: ['swp']
},{
    name: 'Shadowspear',
    damage: 8,
    damageBonus: 1,
    abilities: ['su']
},{
    name: 'Short Sword',
    damage: 6
},{
    name: 'Short Spear',
    damage: 6
},{
    name: 'Spikedrakh',
    damage: 8,
    abilities: ['de']
},{
    name: 'Staff',
    damage: 6,
    abilities: ['te']
},{
    name: 'Taumari',
    damage: 10,
    abilities: ['qs']
},{
    name: 'Tavsetar',
    damage: 10,
    abilities: ['lb']
},{
    name: 'Thresher',
    damage: 6,
    damageBonus: 1,
    abilities: ['sb']
}, {
    name: 'Toloron',
    damage: 10,
    abilities: ['sw']
},{
    name: 'Trident',
    damage: 8,
    damageBonus: 1
},{
    name: 'War Axe',
    damage: 8
},{
    name: 'War Mattock',
    damage: 10
},{
    name: 'Warhammer',
    damage: 8
},{
    name: 'Whip',
    damage: 4,
    abilities: ['ent','qs']
},{
    name: 'Wolfsword',
    damage: 10,
    abilities: ['mi']
},{
    name: 'Zeradrakh',
    damage: 8,
    abilities: ['te']
}];

const RangeWeapons: Omit<RangeWeapon, 'rating'>[] = [{
    name: 'Atlatl',
    damage: 6,
    distance: 6,
    abilities: ['thr']
},{
    name: 'Barbed Javelin',
    damage: 6,
    damageBonus: 1,
    distance: 4,
    abilities: ['thr']
},{
    name: 'Blowgun',
    damage: 4,
    distance: 6,
    abilities: ['ven']
},{
    name: 'Bolas',
    damage: 4,
    distance: 6,
    abilities: ['thr','ent']
},{
    name: 'Bow',
    damage: 6,
    distance: 8,
},{
    name: 'Composite Bow',
    damage: 8,
    distance: 10
},{
    name: 'Crossbow',
    damage: 8,
    distance: 10,
    abilities: ['re']
},{
    name: 'Double Crossbow',
    damage: 6,
    damageBonus: 1,
    distance: 8,
    abilities: ['dsh','re']
},{
    name: 'Gadoru',
    damage: 6,
    damageBonus: 1,
    distance: 3,
    abilities: ['dis','thr','sb']
},{
    name: 'Grappler',
    damage: 6,
    distance: 2,
    abilities: ['pul','scl','thr']
},{
    name: 'Hatchet',
    damage: 6,
    damageBonus: 1,
    distance: 2,
    abilities: ['thr']
},{
    name: 'Herenkal',
    damage: 6,
    damageBonus: 1,
    distance: 2,
    abilities: ['thr']
},{
    name: 'Iron Pinion',
    damage: 4,
    damageBonus: 1,
    distance: 2,
    abilities: ['hin','thr']
},{
    name: 'Javelin',
    damage: 6,
    distance: 4,
    abilities: ['thr']
},{
    name: 'Lasso',
    damage: 0,
    distance: 4,
    abilities: ['thr','pin','pul']
},{
    name: 'Longbow',
    damage: 8,
    distance: 12
},{
    name: 'Poison Pellet',
    damage: 0,
    distance: 2,
    abilities: ['thr','ven']
},{
    name: 'Recurved Short Bow',
    damage: 6,
    damageBonus: 1,
    distance: 8
},{
    name: 'Roondar',
    damage: 6,
    damageBonus: 1,
    distance: 8,
    abilities: ['sb']
},{
    name: 'Sling',
    damage: 8,
    distance: 6
},{
    name: 'Spider Net',
    damage: 4,
    distance: 4,
    abilities: ['thr','ent','stky']
},{
    name: 'Tennko',
    damage: 8,
    distance: 10,
    abilities: ['de']
},{
    name: 'Vranshar',
    damage: 8,
    distance: 8,
    abilities: ['aoe 2in', 'idf']
},{
    name: 'War Axe',
    damage: 8,
    distance: 2,
    abilities: ['thr']
},{
    name: 'Zishoti',
    damage: 6,
    distance: 6,
    abilities: ['clo']
}];

export  {Abilities, Equipment, MagicItems, MeleeWeapons, RangeWeapons, Skills, Talents};