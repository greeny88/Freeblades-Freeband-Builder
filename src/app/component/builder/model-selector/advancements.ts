const Abilities: string[] = ['AGL','DEX','END','KNW','SPR','STR'];
const Equipment: {name:string, cost:number}[] = [{
    'name': 'Book of Lore',
    'cost': 1
},{
    'name': 'Fine Crafted Weapon',
    'cost': 3
},{
    'name': 'Forest Cloak',
    'cost': 3
},{
    'name': 'Ghili Suit',
    'cost': 3
},{
    'name': 'Improved Armor',
    'cost': 3
},{
    'name': 'Lantern',
    'cost': 1
},{
    'name': 'Lockpick Kit',
    'cost': 3
},{
    'name': 'Rope',
    'cost': 1
},{
    'name': 'Snowshoes',
    'cost': 1
},{
    'name': 'Starsilk',
    'cost': 1
},{
    'name': 'Torches',
    'cost': 3
},{
    'name': 'Treasure Map',
    'cost': 1
},{
    'name': 'War Markings',
    'cost': 2
}];
// TODO: add artifacts to list, check for new items
const MagicItems: {name: string, advancement: string, cost: number}[] = [{
    'name':'Nimblesocks',
    'advancement':'AGL',
    'cost':3
},{
    'name':'Talisman of Fortitude',
    'advancement':'END',
    'cost':3
},{
    'name':'Belt of Niktos',
    'advancement':'STR',
    'cost':3
},{
    'name':'Lithefinger Ring',
    'advancement':'DEX',
    'cost':3
},{
    'name':'Amulet of Shaldathar',
    'advancement':'SPR',
    'cost':3
},{
    'name':'Circlet of Understanding',
    'advancement':'KNW',
    'cost':3
},{
    'name':'Divining Rod',
    'advancement':'Find',
    'cost':3
},{
    'name':'Boots of Leaping',
    'advancement':'Jump',
    'cost':3
},{
    'name':'Cloak of Night',
    'advancement':'Ambush',
    'cost':3
},{
    'name':'Vekul Boots',
    'advancement':'Mountaineer', // add Frostfoot
    'cost':3
},{
    'name':'Belt of Mallok',
    'advancement':'Battler',
    'cost':3
},{
    'name':'Mask of the Wolf',
    'advancement':'Fearsome',
    'cost':3
},{
    'name':'Targeteer\'s Monacle',
    'advancement':'RAR',
    'cost':3
},{
    'name':'Cheljaron\'s Gem',
    'advancement':'DEF',
    'cost':3
},{
    'name':'Gallan\'s Boots',
    'advancement':'Arboreal',
    'cost':3
},{
    'name':'Ring of Protection',
    'advancement':'AV',
    'cost':3
},{
    'name':'Bracers of Korg',
    'advancement':'MD', // melee damage
    'cost':3
},{
    'name':'Gauntlets of Rage',
    'advancement':'Frenzy',
    'cost':3
},{
    'name':'Horn of Pelrat',
    'advancement':'Taunt',
    'cost':3
},{
    'name':'Darlika\'s Boots',
    'advancement':'Infiltrate',
    'cost':3
},{
    'name':'Boots of Quickness',
    'advancement':'SPD',
    'cost':3
},{
    'name':'Lion Helm',
    'advancement':'Lion\'s Roar',
    'cost':3
},{
    'name':'Necklace of Courage',
    'advancement':'Steadfast',
    'cost':3
},{
    'name':'Warrior\'s Bracers',
    'advancement':'MAR',
    'cost':3
},{
    'name':'Jaws of Karul',
    'advancement':'Extra attack', // additional melee weapon
    'cost':3
},{
    'name':'Arimol\'s Cloak',
    'advancement':'Chameleon',
    'cost':3
},{
    'name':'Mystic\'s Ring',
    'advancement':'Power,2', // +2 power
    'cost':3
},{
    'name':'Coin of Nespetos',
    'advancement':'Merchant',
    'cost':3
},{
    'name':'Yurrik\'s Belt',
    'advancement':'Die Hard',
    'cost':3
},{
    'name':'Ring of Evarin',
    'advancement':'Counterspell', // d8 counterspell
    'cost':3
},{
    'name':'Gallan\'s Gloves',
    'advancement':'Contain',
    'cost':3
},{
    'name':'Boots of Sabhir',
    'advancement':'Amphibious',
    'cost':3
},{
    'name':'Eyes of Ariemi',
    'advancement':'Accurate Shot',
    'cost':3
},{
    'name':'Loin\'s Mane',
    'advancement':'Assault',
    'cost':3
},{
    'name':'Horn of the Wolflord',
    'advancement':'Battlecry',
    'cost':3
},{
    'name':'Circlet of Fury',
    'advancement':'Furious',
    'cost':3
},{
    'name':'Togon\'s Mirror',
    'advancement':'Deflect',
    'cost':3
},{
    'name':'Mara\'s Mask',
    'advancement':'Disuise',
    'cost':3
},{
    'name':'Belt of Fazik-kel',
    'advancement':'Dodge',
    'cost':3
},{
    'name':'Heartmender',
    'advancement':'Casualty reroll',
    'cost':3
},{
    'name':'Belt of Contempt',
    'advancement':'Hate[MAR]',
    'cost':3
},{
    'name':'Soldier\'s Boots',
    'advancement':'March',
    'cost':3
},{
    'name':'Zakzin\'s Bones',
    'advancement':'Intensify Spell',
    'cost':3
},{
    'name':'Bracers of Darien',
    'advancement':'Missle Parry',
    'cost':3
},{
    'name':'Goblet of Glory',
    'advancement':'Bloodstruck',
    'cost':3
},{
    'name':'Ring of Fire',
    'advancement':'Flaming Weapon',
    'cost':3
},{
    'name':'Mirazham\'s Cloak',
    'advancement':'Opportune Strike',
    'cost':3
},{
    'name':'Raven\'s Wings',
    'advancement':'Raven Stance',
    'cost':3
},{
    'name':'Darkwand',
    'advancement':'Gloom 6in',
    'cost':3
},{
    'name':'Amulet of Guard',
    'advancement':'Protector',
    'cost':3
},{
    'name':'Lens of Sep',
    'advancement':'Sharpshooter',
    'cost':3
},{
    'name':'Tinor\'s Torque',
    'advancement':'1dl counterspell',
    'cost':3
},{
    'name':'Ghost Veil',
    'advancement':'Spirit',
    'cost':3
},{
    'name':'Hunter\'s Lasso',
    'advancement':'Subdue',
    'cost':3
},{
    'name':'Necklace of Fate',
    'advancement':'Lucky',
    'cost':3
},{
    'name':'Scales of Nespetos',
    'advancement':'Cheaper Gear',
    'cost':3
},{
    'name':'Eliopor\'s Ring',
    'advancement':'1dl spell damage',
    'cost':3
},{
    'name':'Bracelet of Ilvayn',
    'advancement':'Accurate Strike',
    'cost':3
},{
    'name':'Goggles of Mer',
    'advancement':'Witchsight',
    'cost':3
},{
    'name':'Mirror Gem',
    'advancement':'Spell Riposte',
    'cost':3
}];
const Skills: string[] = [
    'Camouflage',
    'Climb',
    'Devices',
    'Find',
    'Hunt',
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
    'Confine',
    'Counterattack',
    'Deceptive Strike',
    'Deflect',
    'Deft',
    'Die Hard',
    'Disguise',
    'Dodge',
    'Elusive',
    'Enhanced Disguise',
    'Far Shot',
    'Feint',
    'Flurry',
    'Fortress',
    'Freerunner',
    'Frostfoot',
    'Furious',
    'Harasser',
    'Hardened',
    'Heroic Attack',
    'Hit and Run',
    'Impact',
    'Impetuous',
    'Infiltrate',
    'Intensify Spell',
    'Leaper',
    'March',
    'Marksman',
    'Medicine',
    'Merchant',
    'Missle Parry',
    'Mountaineer',
    'Nimble',
    'Opportune Strike',
    'Parry',
    'Pouncer',
    'Power Attack',
    'Precise Shot',
    'Protector',
    'Punish',
    'Rapid Fire',
    'Rapid Reload',
    'Raven Stance',
    'Recover',
    'Reluctant',
    'Retrograde',
    'Re-engage',
    'Running Shot',
    'Scout',
    'Scrounge',
    'Sharpshooter',
    'Shield Bash',
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
    'Steadfast',
    'Subdue',
    'Taunt',
    'Teammate[Type]',
    'Tough'
];

export  {Abilities, Equipment, MagicItems, Skills, Talents};