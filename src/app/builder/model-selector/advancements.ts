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
},{
    name: 'Brutal Weapon',
    cost: 2
},{
    name: 'Burnished Armor',
    cost: 3
},{
    name: 'Caltrops',
    cost: 2
},{
    name: 'Disguise Kit',
    cost: 3
},{
    name: 'Heavy Plating',
    cost: 4
},{
    name: 'Heavy Weapon',
    cost: 3
},{
    name: 'Lodestone',
    cost: 1
},{
    name: 'Necromantic Locus',
    cost: 2
},{
    name: 'Perfect Balance',
    cost: 2
},{
    name: 'Spiked Armor',
    cost: 2
},{
    name: 'Vital Plating',
    cost: 2
},{
    name: 'Glowleaf',
    cost: 2
},{
    name: 'Hawkweed',
    cost: 1
},{
    name: 'Ironweed',
    cost: 3
},{
    name: 'Purpleberry',
    cost: 2
},{
    name: 'Riverroot',
    cost: 1
},{
    name: 'Wizard\'s Beard',
    cost: 1
},{
    name: 'Shield Stone',
    cost: 5
},{
    name: 'Barrier Stone',
    cost: 8
},{
    name: 'Meta Stone',
    cost: 9
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
    name:'Adelsa\'s Metronome',
    advancement:'Reduced Performance penalty',
    cost:2
},{
    name:'Boots of Leaping',
    advancement:'Jump',
    cost:1
},{
    name:'Cloak of Night',
    advancement:'Ambush',
    cost:2
},{
    name:'Vekul Boots',
    advancement:'Mountaineer', // add Frostfoot
    cost:1
},{
    name:'Belt of Mallok',
    advancement:'Battler',
    cost:1
},{
    name:'Mask of the Wolf',
    advancement:'Fearsome',
    cost:2
},{
    name:'Targeteer\'s Monacle',
    advancement:'RAR',
    cost:2
},{
    name:'Cheljaron\'s Gem',
    advancement:'DEF',
    cost:3
},{
    name:'Gallan\'s Boots',
    advancement:'Arboreal',
    cost:1
},{
    name:'Ring of Protection',
    advancement:'AV1',
    cost:3
},{
    name:'Bracers of Korg',
    advancement:'MD', // melee damage
    cost:3
},{
    name:'Gauntlets of Rage',
    advancement:'Frenzy',
    cost:5
},{
    name:'Horn of Pelrat',
    advancement:'Taunt',
    cost:1
},{
    name:'Darlika\'s Boots',
    advancement:'Infiltrate',
    cost:1
},{
    name:'Boots of Quickness',
    advancement:'SPD', // TODO: +2 SPD
    cost:2
},{
    name:'Lion Helm',
    advancement:'Lion\'s Roar',
    cost:1
},{
    name:'Necklace of Courage',
    advancement:'Steadfast',
    cost:2
},{
    name:'Warrior\'s Bracers',
    advancement:'MAR',
    cost:2
},{
    name:'Jaws of Karul',
    advancement:'MAR d6 | Damage d6',
    cost:5
},{
    name:'Arimol\'s Cloak',
    advancement:'Chameleon',
    cost:1
},{
    name:'Mystic\'s Ring',
    advancement:'CP2', // +2 power
    cost:2
},{
    name:'Coin of Nespetos',
    advancement:'Merchant',
    cost:1
},{
    name:'Yurrik\'s Belt',
    advancement:'Die Hard',
    cost:2
},{
    name:'Ring of Evarin',
    advancement:'Counterspell', // d8 counterspell
    cost:3
},{
    name:'Gallan\'s Gloves',
    advancement:'Contain',
    cost:1
},{
    name:'Boots of Sabhir',
    advancement:'Amphibious',
    cost:1
},{
    name:'Eyes of Ariemi',
    advancement:'Accurate Shot',
    cost:1
},{
    name:'Loin\'s Mane',
    advancement:'Assault',
    cost:2
},{
    name:'Horn of the Wolflord',
    advancement:'Battlecry',
    cost:4
},{
    name:'Circlet of Fury',
    advancement:'Furious',
    cost:1
},{
    name:'Togon\'s Mirror',
    advancement:'Deflect',
    cost:2
},{
    name:'Mara\'s Mask',
    advancement:'Disuise',
    cost:2
},{
    name:'Belt of Fazik-kel',
    advancement:'Dodge',
    cost:1
},{
    name:'Heartmender',
    advancement:'Medicine',
    cost:1
},{
    name:'Mirrored Bracers',
    advancement:'Bladeflash',
    cost:2
},{
    name:'Mallok\'s Gloves',
    advancement:'Feint',
    cost:1
},{
    name:'Zakzin\'s Bones',
    advancement:'Intensify Spell',
    cost:1
},{
    name:'Bracers of Darien',
    advancement:'Missle Parry',
    cost:3
},{
    name:'Eachinn\s Heml',
    advancement:'Bonecrusher',
    cost:4
},{
    name:'Ring of Fire',
    advancement:'Flaming Weapon',
    cost:5
},{
    name:'Mirazham\'s Cloak',
    advancement:'Opportune Strike',
    cost:1
},{
    name:'Raven\'s Wings',
    advancement:'Raven Stance',
    cost:1
},{
    name:'Darkwand',
    advancement:'Gloom 6in',
    cost:4
},{
    name:'Amulet of Guard',
    advancement:'Protector',
    cost:1
},{
    name:'Lens of Sep',
    advancement:'Sharpshooter',
    cost:1
},{
    name:'Tinor\'s Torque',
    advancement:'1dl counterspell',
    cost:2
},{
    name:'Winged Boots',
    advancement:'Fly[Low, SPD 5]',
    cost:5
},{
    name:'Hunter\'s Lasso',
    advancement:'Subdue',
    cost:1
},{
    name:'Necklace of Fate',
    advancement:'Lucky',
    cost:3
},{
    name:'Shackles of Gror',
    advancement:'Confine',
    cost:1
},{
    name:'Eliopor\'s Ring',
    advancement:'1dl spell damage',
    cost:5
},{
    name:'Bracelet of Ilvayn',
    advancement:'Accurate Strike',
    cost:1
},{
    name:'Goggles of Mer',
    advancement:'Witchsight',
    cost:1
},{
    name:'Mirror Gem',
    advancement:'Spell Riposte',
    cost:10000000000
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
    name: 'Agukrich',
    damage: 6,
    abilities: ['de']
},{
    name: 'Arantish',
    damage: 8,
    abilities: ['imp','pin']
},{
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
    name: 'Cudgel',
    damage: 6,
    damageBonus: 1
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
    name: 'Dreadspear',
    damage: 8,
    damageBonus: 1,
    abilities: ['pin']
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
    damageBonus: 1,
    abilities: ['imp']
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
    name: 'Ripper',
    damage: 8,
    abilities: ['let']
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
},{
    name: 'Toloron',
    damage: 10,
    abilities: ['sw']
},{
    name: 'Toothed Sword',
    damage: 10,
    abilities: ['let']
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
    name: 'Web',
    damage: 0,
    abilities: ['qs','pin','ovr']
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
    name: 'Agukrich',
    damage: 6,
    distance: 2,
    abilities: ['thr','de']
},{
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
    name: 'Bolter',
    damage: 6,
    damageBonus: 1,
    distance: 8,
    abilities: ['imp','slr']
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
    name: 'Skullbomb',
    damage: 0,
    distance: 4,
    abilities: ['thr','dr','aoe 2in']
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