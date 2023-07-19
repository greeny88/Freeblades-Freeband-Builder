import { Model } from "src/app/model";

// TODO: need to split out 2x attacks for alt leader update.
const Models: Model[] = [{
    "factions": ["Kuzaarik Forgers"],
    "name": "Forge Warden",
    "displayName": "Forge Warden",
    "stats": {
        "abilities": {
            "strength": 10
        },
        "discipline": 12,
        "type": "Hero",
        "talents": ["Leader","Fortress", "Die Hard", "Tough", "March", "Alpine"],
        "speed": 5,
        "melee": [{
            "rating": 12,
            "name": "Warhammer"
        }],
        "shield": "S",
        "armor": 6,
        "options": [{
            "name": "Devices",
            "rating": 8,
            "selected": true
        },{
            "name": "Maul[1,Warhammer]"
        }]
    },
    "type": "Leader",
    "value": 39,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Forge Warden",
    "displayName": "Forge Warden",
    "stats": {
        "abilities": {
            "strength": 10
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Fortress", "Die Hard", "Tough", "March", "Alpine","Ally[Independent]"],
        "skills": [{
            "name": "Devices",
            "rating": 8
        }],
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Warhammer"
        }],
        "shield": "S",
        "armor": 6,
        "options": [{
            "name": "Devices",
            "rating": 8,
            "selected": true
        },{
            "name": "Maul[1,Warhammer]"
        }]
    },
    "type": "Standard",
    "value": 32,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Kryomancer",
    "displayName": "Kryomancer",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Ice Magic", "Spellstrecher", "Die Hard", "Alpine"],
        "speed": 5,
        "melee": [{
            "name": "Ice Axe",
            "rating": 6
        }],
        "casting": {
            "rating": 10,
            "power": 15
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Kryomancer",
    "displayName": "Kryomancer",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Ice Magic", "Spellstrecher", "Die Hard", "Alpine","Ally[Independent]"],
        "speed": 5,
        "melee": [{
            "name": "Ice Axe",
            "rating": 6
        }],
        "casting": {
            "rating": 10,
            "power": 15
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Grenadier",
    "displayName": "Grenadier",
    "stats": {
        "abilities": {
            "knowledge": 10
        },
        "discipline": 8,
        "type": "Hero",
        "talents": ["Die Hard", "Alpine"],
        "skills": [{
            "name": "Devices",
            "rating": 8
        }],
        "speed": 5,
        "melee": [{
            "name": "Mace",
            "rating": 10
        }],
        "range": [{
            "name": "Vranshar",
            "rating": 10
        }],
        "armor": 5
    },
    "type": "Standard",
    "value": 30,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Huskarl",
    "displayName": "Huskarl",
    "stats": {
        "abilities": {
            "endurance": 10
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Die Hard", "Die Hard", "Alpine", "Punish", "March"],
        "speed": 5,
        "melee": [{
            "name": "War Mattock",
            "rating": 10
        }],
        "armor": 6
    },
    "type": "Standard",
    "value": 30,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Huskarl",
    "displayName": "Huskarl",
    "stats": {
        "abilities": {
            "endurance": 10
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Die Hard", "Die Hard", "Alpine", "Punish", "March","Ally[Independent]"],
        "speed": 5,
        "melee": [{
            "name": "War Mattock",
            "rating": 10
        }],
        "armor": 6
    },
    "type": "Standard",
    "value": 30,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Explorer",
    "displayName": "Explorer",
    "stats": {
        "discipline": 6,
        "talents": ["Die Hard", "Infiltrate", "Wayfinder"],
        "speed": 5,
        "melee": [{
            "name": "Ice Axe",
            "rating": 6
        }],
        "skills": [{
            "name": "Find",
            "rating": 8
        }],
        "armor": 2,
        "type": "Follower"
    },
    "type": "Standard",
    "value": 8,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Explorer",
    "displayName": "Explorer",
    "stats": {
        "discipline": 6,
        "talents": ["Die Hard", "Infiltrate", "Wayfinder","Ally[Independent]"],
        "speed": 5,
        "melee": [{
            "name": "Ice Axe",
            "rating": 6
        }],
        "skills": [{
            "name": "Find",
            "rating": 8
        }],
        "armor": 2,
        "type": "Follower"
    },
    "type": "Standard",
    "value": 8,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Quarreler",
    "displayName": "Quarreler",
    "stats": {
        "discipline": 6,
        "talents": ["Die Hard", "March", "Alpine"],
        "speed": 5,
        "melee": [{
            "name": "Dagger",
            "rating": 4
        }],
        "range": [{
            "name": "Double Crossbow",
            "rating": 6
        }],
        "armor": 5,
        "type": "Follower"
    },
    "type": "Standard",
    "value": 15,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Quarreler",
    "displayName": "Quarreler",
    "stats": {
        "discipline": 6,
        "talents": ["Die Hard", "March", "Alpine","Ally[Independent]"],
        "speed": 5,
        "melee": [{
            "name": "Dagger",
            "rating": 4
        }],
        "range": [{
            "name": "Double Crossbow",
            "rating": 6
        }],
        "armor": 5,
        "type": "Follower"
    },
    "type": "Standard",
    "value": 15,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Wayblocker",
    "displayName": "Wayblocker",
    "stats": {
        "discipline": 6,
        "talents": ["Die Hard", "March", "Alpine"],
        "speed": 5,
        "melee": [{
            "name": "Warhammer",
            "rating": 8
        }],
        "armor": 4,
        "shield": "S",
        "type": "Follower"
    },
    "type": "Standard",
    "value": 14,
    "gender": "F",
    "race": "Kuzaarik"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Wayblocker",
    "displayName": "Wayblocker",
    "stats": {
        "discipline": 6,
        "talents": ["Die Hard", "March", "Alpine","Ally[Independent]"],
        "speed": 5,
        "melee": [{
            "name": "Warhammer",
            "rating": 8
        }],
        "armor": 4,
        "shield": "S",
        "type": "Follower"
    },
    "type": "Standard",
    "value": 14,
    "gender": "F",
    "race": "Kuzaarik"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Hinterguard",
    "displayName": "Hinterguard",
    "stats": {
        "abilities": {
            "endurance": 10
        },
        "talents": ["Die Hard","Hardened","March","Alpine"],
        "melee": [{
            "rating": 10,
            "name": "Banehammer"
        }],
        "armor": 6,
        "discipline": 10,
        "speed": 5,
        "type": "Hero"
    },
    "type": "Standard",
    "value": 29,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Hinterguard",
    "displayName": "Hinterguard",
    "stats": {
        "abilities": {
            "endurance": 10
        },
        "talents": ["Die Hard","Hardened","March","Alpine","Ally[Independent]"],
        "melee": [{
            "rating": 10,
            "name": "Banehammer"
        }],
        "armor": 6,
        "discipline": 10,
        "speed": 5,
        "type": "Hero"
    },
    "type": "Standard",
    "value": 29,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Field Agent",
    "displayName": "Field Agent",
    "stats": {
        "abilities": {
            "agility": 10,
            "dexterity": 10
        },
        "talents": ["Die Hard","Ambush","Elusive","Opportune Strike","Dodge","Dodge","Expert[Dodge]","Wayfinder"],
        "speed": 5,
        "melee": [{
            "name": "Ice Axe",
            "rating": 10
        }],
        "armor": 3,
        "discipline": 10,
        "type": "Hero"
    },
    "type": "Standard",
    "value": 28,
    "gender": "F",
    "race": "Kuzaarik"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Field Agent",
    "displayName": "Field Agent",
    "stats": {
        "abilities": {
            "agility": 10,
            "dexterity": 10
        },
        "talents": ["Die Hard","Ambush","Elusive","Opportune Strike","Dodge","Dodge","Expert[Dodge]","Wayfinder","Ally[Independent]"],
        "speed": 5,
        "melee": [{
            "name": "Ice Axe",
            "rating": 10
        }],
        "armor": 3,
        "discipline": 10,
        "type": "Hero"
    },
    "type": "Standard",
    "value": 28,
    "gender": "F",
    "race": "Kuzaarik"
},{
    "factions": ["Black Rose Bandits"],
    "name": "Black Rose",
    "displayName": "Black Rose",
    "stats": {
        "abilities": {
            "agility": 10,
            "dexterity": 10
        },
        "discipline": 12,
        "type": "Hero",
        "talents": ["Leader", "Parry", "Parry", "Sidestep", "Elusive", "Counterattack"],
        "skills": [{
            "name": "Thievery",
            "rating": 8
        }],
        "speed": 6,
        "melee": [{
            "name": "Longsword (2h)",
            "rating": 12
        }],
        "armor": 4
    },
    "type": "Leader",
    "value": 39,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits"],
    "name": "Enchantress",
    "displayName": "Enchantress",
    "stats": {
        "abilities": {
            "agility": 12
        },
        "discipline": 8,
        "type": "Hero",
        "talents": ["Dodge", "Moons Magic"],
        "speed": 7,
        "melee": [{
            "name": "Dagger",
            "rating": 6
        }],
        "casting": {
            "power": 15,
            "rating": 10
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Black Rose Bandits"],
    "name": "Duelist",
    "displayName": "Duelist",
    "stats": {
        "abilities": {
            "agility": 10
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry", "Swordsman[Parry Dagger]", "Bladedancer", "Sidestep"],
        "speed": 7,
        "melee": [{
            "name": "Longsword (1h)",
            "rating": 10
        },{
            "name": "Parry Dagger",
            "rating": 10
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits"],
    "name": "Highwayman",
    "displayName": "Highwayman",
    "stats": {
        "abilities": {
            "agility": 10,
            "strength": 10
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry", "Power Attack", "Power Attack"],
        "speed": 6,
        "skills": [{
            "name": "Thievery",
            "rating": 8
        }],
        "melee": [{
            "name": "Staff",
            "rating": 10
        }],
        "armor": 4
    },
    "type": "Standard",
    "value":27,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits"],
    "name": "Poacher",
    "displayName": "Poacher",
    "stats": {
        "abilities": {
            "agility": 10
        },
        "discipline": 8,
        "type": "Hero",
        "talents": ["Arboreal", "Scout", "Marksman"],
        "speed": 7,
        "skills": [{
            "name": "Camouflage",
            "rating": 8
        },{
            "name": "Hunt",
            "rating": 10
        },{
            "name": "Stealth",
            "rating": 8
        }],
        "melee": [{
            "name": "Short Sword",
            "rating": 8
        }],
        "range": [{
            "name": "Longbow",
            "rating": 10
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 33,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "Shakrim Wavestalkers"],
    "name": "Headhunter",
    "displayName": "Headhunter",
    "stats": {
        "abilities": {
            "endurance": 10,
            "strength": 10
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Amphibious", "Furious", "Tough", "Bloodstruck"],
        "speed": 6,
        "melee": [{
            "name": "Falchion",
            "rating": 10
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 25,
    "gender": "M",
    "race": "Shakrim"
},{
    "factions": ["Kandoran Deathmasters"],
    "primaryFaction":"Black Rose Bandits",
    "name": "Headhunter",
    "displayName": "Headhunter",
    "stats": {
        "abilities": {
            "endurance": 10,
            "strength": 10
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Amphibious", "Furious", "Tough", "Bloodstruck","Ally[Independent]"],
        "speed": 6,
        "melee": [{
            "name": "Falchion",
            "rating": 10
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 25,
    "gender": "M",
    "race": "Shakrim"
},{
    "factions": ["Kandoran Deathmasters","Traazorite Crusaders"],
    "primaryFaction":"Shakrim Wavestalkers",
    "name": "Headhunter",
    "displayName": "Headhunter",
    "stats": {
        "abilities": {
            "endurance": 10,
            "strength": 10
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Amphibious", "Furious", "Tough", "Bloodstruck","Ally[Independent]"],
        "speed": 6,
        "melee": [{
            "name": "Falchion",
            "rating": 10
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 25,
    "gender": "M",
    "race": "Shakrim"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits"],
    "name": "Bodyguard",
    "displayName": "Bodyguard",
    "stats": {
        "abilities": {
            "agility": 10
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry", "Parry", "Deflect", "Active Defense", "Contain", "Protector"],
        "speed": 7,
        "melee": [{
            "name": "Greatsword",
            "rating": 10
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 30,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits"],
    "name": "Huskarl",
    "displayName": "Huskarl",
    "stats": {
        "abilities": {
            "endurance": 10
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Die Hard", "Die Hard", "Alpine", "Punish", "Teammate[Bounty Hunter]"],
        "speed": 5,
        "melee": [{
            "name": "War Mattock",
            "rating": 10
        }],
        "armor": 6
    },
    "type": "Standard",
    "value": 30,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits"],
    "name": "Bounty Hunter",
    "displayName": "Bounty Hunter",
    "stats": {
        "abilities": {
            "agility": 12
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Dodge", "Dodge", "Subdue", "Teammate[Huskarl]", "Wayfinder", "Scout"],
        "speed": 7,
        "skills": [{
            "name": "Hunt",
            "rating": 8
        },{
            "name": "Stealth",
            "rating": 8
        }],
        "melee": [{
            "name": "Spikedrakh",
            "rating": 10
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 33,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective"],
    "name": "Mercenary Crossbowman",
    "displayName": "Mercenary Crossbowman",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Precise Shot", "Precise Shot", "Rapid Reload", "Sergeant[Outlaw]"],
        "speed": 7,
        "skills": [{
            "name": "Climb",
            "rating": 10
        }],
        "melee": [{
            "name": "Broadsword",
            "rating": 10
        }],
        "range": [{
            "name": "Crossbow",
            "rating": 12
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 28,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Kandoran Deathmasters","Shakrim Wavestalkers"],
    "primaryFaction":"Black Rose Bandits",
    "name": "Mercenary Crossbowman",
    "displayName": "Mercenary Crossbowman",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Precise Shot", "Precise Shot", "Rapid Reload", "Sergeant[Outlaw]","Ally[Independent]"],
        "speed": 7,
        "skills": [{
            "name": "Climb",
            "rating": 10
        }],
        "melee": [{
            "name": "Broadsword",
            "rating": 10
        }],
        "range": [{
            "name": "Crossbow",
            "rating": 12
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 28,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective", "Ravenblade Mercenaries"],
    "name": "Outlaw",
    "displayName": "Outlaw",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "name": "Short Sword",
            "rating": 6
        }],
        "range": [{
            "name": "Crossbow",
            "rating": 6
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 11,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective", "Falkaaran Adventurers", "Haradelan Questers", "Ravenblade Mercenaries"],
    "name": "Faeler Swordsman",
    "displayName": "Faeler Swordsman",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "name": "Longsword (1h)",
            "rating": 6
        }],
        "armor": 3,
        "shield": "S",
        "veteran": [{
            "name": "DISC",
            "cost": 1
        },{
            "name": "Squire",
            "cost": 1
        }]
    },
    "type": "Standard",
    "value": 11,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Koronnan Moonsworn","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Haradelan Questers",
    "name": "Faeler Swordsman",
    "displayName": "Faeler Swordsman",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "name": "Longsword (1h)",
            "rating": 6
        }],
        "talents": ["Ally[Independent]"],
        "armor": 3,
        "shield": "S",
        "veteran": [{
            "name": "DISC",
            "cost": 1
        },{
            "name": "Squire",
            "cost": 1
        }]
    },
    "type": "Standard",
    "value": 11,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Faeler Swordsman",
    "displayName": "Faeler Swordsman",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "name": "Longsword (1h)",
            "rating": 6
        }],
        "talents": ["Ally[Independent]"],
        "armor": 3,
        "shield": "S",
        "veteran": [{
            "name": "DISC",
            "cost": 1
        },{
            "name": "Squire",
            "cost": 1
        }]
    },
    "type": "Standard",
    "value": 11,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits"],
    "name": "Rustler",
    "displayName": "Rustler",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "name": "Whip",
            "rating": 8
        },{
            "name": "Broadsword",
            "rating": 8
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 12,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits"],
    "name": "Thief",
    "displayName": "Thief",
    "stats": {
        "discipline": 4,
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "name": "Long Knife",
            "rating": 6
        }],
        "armor": 2,
        "talents": ["Elusive", "Infiltrate"],
        "skills": [{
            "name": "Thievery",
            "rating": 6
        },{
            "name": "Find",
            "rating": 8
        }]
    },
    "type": "Standard",
    "value": 9,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits"],
    "name": "Thug",
    "displayName": "Thug",
    "stats": {
        "discipline": 4,
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "name": "Great Club",
            "rating": 6
        }],
        "armor": 4,
        "talents": ["Die Hard"],
        "abilities": {
            "endurance": 8
        }
    },
    "type": "Standard",
    "value": 12,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Black Thorn Bandits"],
    "name": "Black Thorn",
    "displayName": "Black Thorn",
    "stats": {
        "discipline": 12,
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Longsword (1h)",
            "rating": 12
        },{
            "name": "Parry Dagger",
            "rating": 10
        }],
        "armor": 3,
        "talents": ["Leader", "Parry", "Bladedancer", "Sidestep", "Swordsman[Parry Dagger]"],
        "abilities": {
            "agility": 10
        }
    },
    "type": "Leader",
    "value": 39,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Black Thorn Bandits","Mershael Corsairs"],
    "name": "Illusionist",
    "displayName": "Illusionist",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Staff",
            "rating": 6
        }],
        "armor": 2,
        "talents": ["Intensify Spell", "Quick", "Illusion Magic"],
        "casting": {
            "power": 15,
            "rating": 10
        }
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Mershael Corsairs",
    "name": "Illusionist",
    "displayName": "Illusionist",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Staff",
            "rating": 6
        }],
        "armor": 2,
        "talents": ["Intensify Spell", "Quick", "Illusion Magic","Ally[Independent]"],
        "casting": {
            "power": 15,
            "rating": 10
        }
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Keshark",
    "displayName": "Keshark (Mounted)",
    "stats": {
        "discipline": 12,
        "type": "Hero",
        "talents": ["Leader","Parry","Leap Attack","Cavalry","Fast","Bladeflash"],
        "speed": 9,
        "melee": [{
            "rating": 12,
            "name": "Sakhazet"
        },{
            "rating": 8,
            "damage": 6,
            "name": "Bite"
        }],
        "shield": "S",
        "armor": 5
    },
    "type": "Leader",
    "value": 41,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Keshark",
    "displayName": "Keshark (Dismounted)",
    "stats": {
        "discipline": 12,
        "type": "Hero",
        "talents": ["Leader","Parry","Parry","Bladeflash"],
        "speed": 6,
        "melee": [{
            "rating": 12,
            "name": "Sakhazet"
        }],
        "shield": "S",
        "armor": 5
    },
    "type": "Leader",
    "value": 35,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Sunbringer",
    "displayName": "Sunbringer",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Sun Magic","Battle Hymn"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "casting": {
            "rating": 10,
            "power": 15
        },
        "armor": 4
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Bladebrother",
    "displayName": "Bladebrother",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry","Bladeflash"],
        "speed": 6,
        "melee": [{
            "rating": 12,
            "name": "Sakhazet"
        }],
        "shield": "L",
        "armor": 5,
        "veteran": [{
            "name": "Conquer",
            "cost": 1
        },{
            "name": "Taunt",
            "cost": 1
        }]
    },
    "type": "Standard",
    "value": 28,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Packmaster",
    "displayName": "Packmaster",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Die Hard","Infiltrate","Steadfast","Steadfast","Alpha[Warbeast]"],
        "abilities": {
            "endurance": 12,
            "strength": 10
        },
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Trident"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 33,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Velozar Knight",
    "displayName": "Velozar Knight (Mounted)",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry","Leap Attack","Cavalry", "Fast"],
        "speed": 9,
        "melee": [{
            "rating": 10,
            "name": "Lance"
        },{
            "rating": 10,
            "name": "Sakhazet"
        },{
            "rating": 8,
            "damage": 6,
            "name": "Bite"
        }],
        "armor": 5,
        "shield": "S"
    },
    "type": "Standard",
    "value": 34,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Velozar Knight",
    "displayName": "Velozar Knight (Dismounted)",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry","Parry"],
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "armor": 5,
        "shield": "S"
    },
    "type": "Standard",
    "value": 26,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Azarim Scout",
    "displayName": "Azarim Scout",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Ambush","Scout","Dodge","Pouncer","Elusive","Harasser"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name": "Stealth",
            "rating": 10
        }],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Javelin"
        }],
        "range": [{
            "rating": 10,
            "name": "Javelin"
        }],
        "armor": 5,
        "shield": "S"
    },
    "type": "Standard",
    "value": 30,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Shakrim Wavestalkers"],
    "primaryFaction":"Traazorite Crusaders",
    "name": "Azarim Scout",
    "displayName": "Azarim Scout",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Ambush","Scout","Dodge","Pouncer","Elusive","Harasser","Ally[Independent]"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name": "Stealth",
            "rating": 10
        }],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Javelin"
        }],
        "range": [{
            "rating": 10,
            "name": "Javelin"
        }],
        "armor": 5,
        "shield": "S"
    },
    "type": "Standard",
    "value": 30,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Ravager",
    "displayName": "Daklos Ravager",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Cavalry","Fly[Low,SPD 10]","Dodge","Scout","Bull Rush","Swoop[Net]","Hit and Run","Fast"],
        "abilities": {
            "agility": 12
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }],
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Barbed Javelin"
        },{
            "rating": 10,
            "name": "Net",
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 38,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Ravager",
    "displayName": "Ravager",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Dodge","Scout","Contain","Active Defense","Backstep","Subdue"],
        "abilities": {
            "agility": 12
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Barbed Javelin"
        },{
            "rating": 10,
            "name": "Net"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 33,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Legionnaire",
    "displayName": "Legionnaire",
    "stats": {
        "discipline": 8,
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 8,
            "name": "Sakhazet"
        }],
        "range": [{
            "rating": 8,
            "name": "Gadoru"
        }],
        "armor": 5,
        "shield": "L"
    },
    "type": "Standard",
    "value": 21,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Cohort Archer",
    "displayName": "Cohort Archer",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 4,
            "name": "Dagger"
        }],
        "range": [{
            "rating": 6,
            "name": "Bow"
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 9,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Vezarin",
    "displayName": "Vezarin",
    "stats": {
        "discipline": 4,
        "type": "Follower",
        "talents": ["Warbeast","Leap Attack","Infiltrate","Pack Attack","Fast"],
        "speed": 8,
        "melee": [{
            "rating": 6,
            "damage": 6,
            "name": "Bite"
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 12,
    "gender": "M",
    "race": "Beast"
},{
    "factions": ["Mershael Corsairs"],
    "name": "Shaikan",
    "displayName": "Shaikan",
    "stats": {
        "abilities": {
            "agility": 12
        },
        "discipline": 12,
        "type": "Hero",
        "talents": ["Leader","Parry","Parry","Quick","Agile Charge"],
        "speed": 7,
        "melee": [{
            "rating": 12,
            "name": "Taumari"
        }],
        "armor": 5
    },
    "type": "Leader",
    "value": 39,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Mershael Corsairs",
    "name": "Shaikan",
    "displayName": "Shaikan",
    "stats": {
        "abilities": {
            "agility": 12
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry","Parry","Quick","Agile Charge","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "armor": 5
    },
    "type": "Standard",
    "value": 32,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Mershael Corsairs"],
    "name": "Mender",
    "displayName": "Mender",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Ancestral Rites","Medicine","Quick"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "casting": {
            "power": 15,
            "rating": 10
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Mershael Corsairs",
    "name": "Mender",
    "displayName": "Mender",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Ancestral Rites","Medicine","Quick","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "casting": {
            "power": 15,
            "rating": 10
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Mershael Corsairs"],
    "name": "Kayhar",
    "displayName": "Kayhar",
    "stats": {
        "abilities": {
            "agility": 12
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Dodge","Quick","Confine","Amphibious"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Kasari"
        }],
        "armor": 3,
        "veteran": [{
            "name": "Sergeant[Seafarer,DeckGunner]",
            "cost": 2
        }]
    },
    "type": "Standard",
    "value": 28,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood","Koronnan Moonsworn"],
    "primaryFaction":"Mershael Corsairs",
    "name": "Kayhar",
    "displayName": "Kayhar",
    "stats": {
        "abilities": {
            "agility": 12
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Dodge","Quick","Confine","Amphibious","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Kasari"
        }],
        "armor": 3,
        "veteran": [{
            "name": "Sergeant[Seafarer,DeckGunner]",
            "cost": 2
        }]
    },
    "type": "Standard",
    "value": 28,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Mershael Corsairs","Ravenblade Mercenaries"],
    "name": "Takar Hunter",
    "displayName": "Takar Hunter",
    "stats": {
        "abilities": {
            "agility": 10
        },
        "discipline": 10,
        "type": "Hero",
        "skills": [{
            "name": "Hunt",
            "rating": 10
        }],
        "talents": ["Winged Companion","Hunting Raptor","Quick","Scout","Dodge","Pathfinder"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "range": [{
            "rating": 6,
            "damage": 4,
            "damageBonus": 1,
            "name": "Talon",
            "distance": 4
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 36,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Mershael Corsairs"],
    "name": "Seafarer",
    "displayName": "Seafarer",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "talents": ["Amphibious"],
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Long Knife"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 8,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood","Koronnan Moonsworn"],
    "primaryFaction":"Mershael Corsairs",
    "name": "Seafarer",
    "displayName": "Seafarer",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "talents": ["Amphibious","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Long Knife"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 8,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Mershael Corsairs"],
    "name": "Sentinel",
    "displayName": "Sentinel",
    "stats": {
        "discipline": 8,
        "type": "Follower",
        "talents": ["Quick"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Najana"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 12,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Mershael Corsairs",
    "name": "Sentinel",
    "displayName": "Sentinel",
    "stats": {
        "discipline": 8,
        "type": "Follower",
        "talents": ["Quick","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Najana"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 12,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Mershael Corsairs"],
    "name": "Takar Lookout",
    "displayName": "Takar Lookout",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }],
        "talents": ["Hunting Raptor","Quick","Scout","Pathfinder"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "range": [{
            "rating": 6,
            "damage": 4,
            "name": "Talon",
            "distance": 4
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 18,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Mershael Corsairs",
    "name": "Takar Lookout",
    "displayName": "Takar Lookout",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }],
        "talents": ["Hunting Raptor","Quick","Scout","Pathfinder","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "range": [{
            "rating": 6,
            "damage": 4,
            "name": "Talon",
            "distance": 4
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 18,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Shakrim Wavestalkers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Snake Mystic",
    "displayName": "Snake Mystic",
    "stats": {
        "discipline": 6,
        "type": "Hero",
        "talents": ["Serpent Magic","Slither","Serpent Dance","Ally[Trusted]"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Barbed Javelin"
        }],
        "casting": {
            "power": 15,
            "rating": 10
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["The Collective"],
    "name": "Wandering Wizard",
    "displayName": "Wandering Wizard",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Earth Magic","Fireworks"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "casting": {
            "power": 15,
            "rating": 10
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Wandering Wizard",
    "displayName": "Wandering Wizard",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Earth Magic","Fireworks","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "casting": {
            "power": 15,
            "rating": 10
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Takar Hunter",
    "displayName": "Takar Hunter",
    "stats": {
        "abilities": {
            "agility": 10
        },
        "discipline": 10,
        "type": "Hero",
        "skills": [{
            "name": "Hunt",
            "rating": 10
        }],
        "talents": ["Winged Companion","Hunting Raptor","Quick","Scout","Dodge","Pathfinder","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "range": [{
            "rating": 6,
            "damage": 4,
            "damageBonus": 1,
            "name": "Talon",
            "distance": 4
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 36,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Mershael Corsairs",
    "name": "Takar Hunter",
    "displayName": "Takar Hunter",
    "stats": {
        "abilities": {
            "agility": 10
        },
        "discipline": 10,
        "type": "Hero",
        "skills": [{
            "name": "Hunt",
            "rating": 10
        }],
        "talents": ["Winged Companion","Hunting Raptor","Quick","Scout","Dodge","Pathfinder","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "range": [{
            "rating": 6,
            "damage": 4,
            "damageBonus": 1,
            "name": "Talon",
            "distance": 4
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 36,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["The Collective"],
    "name": "Merchant",
    "displayName": "Merchant",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "skills": [{
            "name": "Find",
            "rating": 8
        }],
        "abilities": {
            "agility": 8,
            "knowledge": 8
        },
        "talents": ["Merchant","Merchant","Dodge","Elusive","Scrounge","Bribery"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Dagger"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 15,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Merchant",
    "displayName": "Merchant",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "skills": [{
            "name": "Find",
            "rating": 8
        }],
        "abilities": {
            "agility": 8,
            "knowledge": 8
        },
        "talents": ["Merchant","Merchant","Dodge","Elusive","Scrounge","Bribery","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Dagger"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 15,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Demons of Karelon"],
    "name": "Azalakar",
    "displayName": "Azalakar",
    "stats": {
        "discipline": 12,
        "type": "Hero",
        "abilities": {
            "endurance": 14,
            "strength": 12
        },
        "talents": ["Leader","Fearsome","Assault","Die Hard","Die Hard","Enraged","Bonecrusher","Bull Rush","Large Target","Demon","Microgate","Magic Resistance","Magic Resistance","Magic Resistance","Magic Resistance"],
        "speed": 6,
        "melee": [{
            "rating": 12,
            "name": "Kranara"
        }],
        "armor": 4
    },
    "type": "Leader",
    "value": 50,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Demons of Karelon","Grular Invaders"],
    "name": "Mokruhl",
    "displayName": "Mokruhl",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "abilities": {
            "spirit": 12,
            "strength": 10
        },
        "talents": ["Sorcery: Illusion/Shadow","Wraith","Wraith","Float","Demon"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Claw"
        }],
        "casting": {
            "power": 10,
            "rating": 8
        },
        "armor": 4
    },
    "type": "Caster",
    "value": 40,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Demons of Karelon","Grular Invaders"],
    "name": "Gadarl",
    "displayName": "Gadarl",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "abilities": {
            "agility": 10,
            "spirit": 10
        },
        "talents": ["Weapon Morph","Disguise","Demon","Dodge"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "damage": 0,
            "name": "Morph"
        }],
        "range": [{
            "rating": 8,
            "damage": 0,
            "name": "Morph",
            "distance": 1
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 27,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Demons of Karelon","Grular Invaders"],
    "name": "Skethar",
    "displayName": "Skethar",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "abilities": {
            "agility": 10,
            "spirit": 10
        },
        "talents": ["Chameleon","Demon","Parry","Parry"],
        "skills": [{
            "name": "Stealth",
            "rating": 8
        }],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Claw 2x"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 34,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Demons of Karelon","Grular Invaders"],
    "name": "Ventarx",
    "displayName": "Ventarx",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "abilities": {
            "agility": 10,
            "spirit": 10
        },
        "talents": ["Fly[Low, 10]","Hit and Run","Nimble","Nimble","Scout","Demon"],
        "speed": 5,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Claw 2x"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 36,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Darkgrove Demons","Demons of Karelon","Grular Invaders"],
    "name": "Saryad",
    "displayName": "Saryad",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "abilities": {
            "agility": 12,
            "spirit": 12
        },
        "talents": ["Dodge","Dodge","Voice on the Wind","Wild Magic[d12,Beguile]","Disguise","Sergeant[Dryad]","Arboreal","Demon"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Claw"
        }],
        "range": [{
            "rating": 10,
            "damage": 6,
            "name": "Thorny Vines",
            "abilities": ["ent","thr"],
            "distance": 3
        }],
        "armor": 3,
        "skills": [{
            "name": "Beguile",
            "rating": 12
        }]
    },
    "type": "Standard",
    "value": 41,
    "gender": "F",
    "race": "Demon"
},{
    "factions": ["Demons of Karelon"],
    "name": "Alpha Plakhra",
    "displayName": "Alpha Plakhra",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "abilities": {
            "agility": 14
        },
        "talents": ["Alpha[Plakhra]","Dodge","Fearsome","Warbeast","Bonecrusher","Pack Attack","Fast","Demon"],
        "speed": 9,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Bite"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 33,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Demons of Karelon"],
    "name": "Zakerlash",
    "displayName": "Zakerlash",
    "stats": {
        "discipline": 4,
        "type": "Hero",
        "talents": ["Fearsome","Bonecrusher","Tireless","Fearless","Mountaineer","Demon","Tough"],
        "speed": 5,
        "melee": [{
            "rating": 10,
            "damage": 10,
            "name": "Fist"
        }],
        "armor": 6
    },
    "type": "Standard",
    "value": 28,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Demons of Karelon"],
    "name": "Borgat",
    "displayName": "Borgat",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "talents": ["Demon","Infiltrate"],
        "speed": 7,
        "melee": [{
            "rating": 8,
            "damage": 6,
            "name": "Bite",
            "abilities": ["ven"]
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 9,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Demons of Karelon"],
    "name": "Skrot",
    "displayName": "Skrot",
    "stats": {
        "discipline": 4,
        "type": "Follower",
        "talents": ["Demon","Animal","Expendable"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "damage": 6,
            "name": "Bite"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 5,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Darkgrove Demons", "Demons of Karelon","Grular Invaders"],
    "name": "Dryad",
    "displayName": "Dryad",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "talents": ["Dodge","Voice on the Wind","Wild Magic[d10,Beguile]","Disguise","Arboreal","Demon"],
        "abilities": {
            "agility": 10,
            "spirit": 10
        },
        "speed": 7,
        "melee": [{
            "rating": 8,
            "damage": 8,
            "name": "Claw"
        }],
        "range": [{
            "rating": 8,
            "damage": 6,
            "name": "Thorny Vines",
            "distance": 3,
            "abilities": ["ent","thr"]
        }],
        "armor": 3,
        "skills": [{
            "name": "Beguile",
            "rating": 10
        }]
    },
    "type": "Standard",
    "value": 28,
    "gender": "F",
    "race": "Demon"
},{
    "factions": ["Demons of Karelon"],
    "name": "Plakhra",
    "displayName": "Plakhra",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "talents": ["Dodge","Fearsome","Warbeast","Bonecrusher","Pack Attack","Fast","Demon"],
        "abilities": {
            "agility": 12
        },
        "speed": 9,
        "melee": [{
            "rating": 8,
            "damage": 8,
            "name": "Bite"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 25,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Eclipse Sisterhood"],
    "name": "Nemesis",
    "displayName": "Nemesis",
    "stats": {
        "discipline": 12,
        "type": "Hero",
        "talents": ["Leader","Parry","Parry","Contain","Active Defense","Deceptive Strike"],
        "abilities": {
            "agility": 10,
            "dexterity": 10
        },
        "speed": 7,
        "melee": [{
            "rating": 12,
            "name": "Sakhazet"
        }],
        "armor": 3
    },
    "type": "Leader",
    "value": 39,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction":"Eclipse Sisterhood",
    "name": "Nemesis",
    "displayName": "Nemesis",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry","Parry","Contain","Active Defense","Deceptive Strike","Ally[Independent]"],
        "abilities": {
            "agility": 10,
            "dexterity": 10
        },
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 32,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "name": "Suneater",
    "displayName": "Suneater",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Void Magic","Spellblocker","Elusive"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "casting": {
            "power": 15,
            "rating": 10
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "name": "Shadow Dancer",
    "displayName": "Shadow Dancer",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Bladedancer","Parry","Parry","Deceptive Strike"],
        "abilities": {
            "agility": 10
        },
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 30,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction":"Eclipse Sisterhood",
    "name": "Shadow Dancer",
    "displayName": "Shadow Dancer",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Bladedancer","Parry","Parry","Deceptive Strike","Ally[Independent]"],
        "abilities": {
            "agility": 10
        },
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 30,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "name": "Secret Sister",
    "displayName": "Secret Sister",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Dodge","Ambush","Elusive","Enhanced Disguise","Opportune Strike","Freerunner"],
        "abilities": {
            "agility": 12
        },
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 29,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction":"Eclipse Sisterhood",
    "name": "Secret Sister",
    "displayName": "Secret Sister",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Dodge","Ambush","Elusive","Enhanced Disguise","Opportune Strike","Freerunner","Ally[Independent]"],
        "abilities": {
            "agility": 12
        },
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 29,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood","Ravenblade Mercenaries"],
    "name": "Nightwhisper",
    "displayName": "Nightwhisper",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Running Shot","Dodge","Scout","Darkvision","Elusive","Harasser","Freerunner","Leaper"],
        "abilities": {
            "agility": 12
        },
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "range": [{
            "rating": 10,
            "name": "Roondar"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 30,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction":"Eclipse Sisterhood",
    "name": "Nightwhisper",
    "displayName": "Nightwhisper",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Running Shot","Dodge","Scout","Darkvision","Elusive","Harasser","Freerunner","Leaper","Ally[Independent]"],
        "abilities": {
            "agility": 12
        },
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "range": [{
            "rating": 10,
            "name": "Roondar"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 30,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "name": "Izchaki Chaser",
    "displayName": "Izchaki Chaser",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Cavalry","Awareness","Dodge","Dodge","Sidestep","Pathfinder","Fast","Infiltrate"],
        "abilities": {
            "agility": 12
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }],
        "speed": 9,
        "melee": [{
            "rating": 10,
            "name": "Barbed Javelin"
        }],
        "range": [{
            "rating": 10,
            "name": "Barbed Javelin"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 35,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction":"Eclipse Sisterhood",
    "name": "Izchaki Chaser",
    "displayName": "Izchaki Chaser",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Cavalry","Awareness","Dodge","Dodge","Sidestep","Pathfinder","Fast","Infiltrate","Ally[Independent]"],
        "abilities": {
            "agility": 12
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }],
        "speed": 9,
        "melee": [{
            "rating": 10,
            "name": "Barbed Javelin"
        }],
        "range": [{
            "rating": 10,
            "name": "Barbed Javelin"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 35,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "name": "Manslayer",
    "displayName": "Manslayer",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Sergeant[Manhunter]","Dodge","Marksman","Sniper","Far Shot","Scout"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        },{
            "name": "Camouflage",
            "rating": 8
        }],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "damage": 6,
            "name": "Long Knife"
        }],
        "range": [{
            "rating": 10,
            "name": "Roondar"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 30,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction":"Eclipse Sisterhood",
    "name": "Manslayer",
    "displayName": "Manslayer",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Sergeant[Manhunter]","Dodge","Marksman","Sniper","Far Shot","Scout","Ally[Independent]"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        },{
            "name": "Camouflage",
            "rating": 8
        }],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "range": [{
            "rating": 10,
            "name": "Roondar"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 30,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "name": "Rebel Maiden",
    "displayName": "Rebel Maiden",
    "stats": {
        "discipline": 8,
        "type": "Follower",
        "talents": ["Backstep"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        },{
            "rating": 6,
            "name": "Whip"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 12,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction":"Eclipse Sisterhood",
    "name": "Rebel Maiden",
    "displayName": "Rebel Maiden",
    "stats": {
        "discipline": 8,
        "type": "Follower",
        "talents": ["Backstep","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        },{
            "rating": 6,
            "name": "Whip"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 12,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "name": "Throatseeker",
    "displayName": "Throatseeker",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "talents": ["Ambush","Freerunner"],
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Long Knife"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 9,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction":"Eclipse Sisterhood",
    "name": "Throatseeker",
    "displayName": "Throatseeker",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "talents": ["Ambush","Freerunner","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Long Knife"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 9,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "name": "Manhunter",
    "displayName": "Manhunter",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "talents": ["Infiltrate"],
        "skills": [{
            "name": "Camouflage",
            "rating": 6
        },{
            "name": "Hunt",
            "rating": 6
        }],
        "speed": 7,
        "melee": [{
            "rating": 4,
            "name": "Long Knife"
        }],
        "range": [{
            "rating": 6,
            "name": "Bow"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 11,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction":"Eclipse Sisterhood",
    "name": "Manhunter",
    "displayName": "Manhunter",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "talents": ["Infiltrate","Ally[Independent]"],
        "skills": [{
            "name": "Camouflage",
            "rating": 6
        },{
            "name": "Hunt",
            "rating": 6
        }],
        "speed": 7,
        "melee": [{
            "rating": 4,
            "name": "Long Knife"
        }],
        "range": [{
            "rating": 6,
            "name": "Bow"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 11,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "name": "Untamed",
    "displayName": "Untamed",
    "stats": {
        "discipline": 4,
        "type": "Follower",
        "talents": ["Flurry"],
        "skills": [{
            "name": "Camouflage",
            "rating": 6
        },{
            "name": "Hunt",
            "rating": 6
        }],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        },{
            "rating": 6,
            "name": "Long Knife"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 9,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction":"Eclipse Sisterhood",
    "name": "Untamed",
    "displayName": "Untamed",
    "stats": {
        "discipline": 4,
        "type": "Follower",
        "talents": ["Flurry","Ally[Independent]"],
        "skills": [{
            "name": "Camouflage",
            "rating": 6
        },{
            "name": "Hunt",
            "rating": 6
        }],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        },{
            "rating": 6,
            "name": "Long Knife"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 9,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Jendal Bladeseeker",
    "displayName": "Jendal Bladeseeker",
    "stats": {
        "discipline": 12,
        "type": "Hero",
        "talents": ["Leader","Active Defense","Parry","Parry","Swordcatcher","Counterattack","Missle Parry"],
        "abilities": {
            "agility": 10
        },
        "speed": 6,
        "melee": [{
            "rating": 12,
            "name": "Kolekar"
        }],
        "armor": 5
    },
    "type": "Leader",
    "value": 39,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Jendal Bladeseeker",
    "displayName": "Jendal Bladeseeker",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Active Defense","Parry","Parry","Swordcatcher","Counterattack","Missle Parry","Ally[Independent]"],
        "abilities": {
            "agility": 10
        },
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Kolekar"
        }],
        "armor": 5
    },
    "type": "Standard",
    "value": 32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "name": "Fire Wizard",
    "displayName": "Fire Wizard",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Fire Magic","Spellguider"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "casting": {
            "rating": 10,
            "power": 15
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Fire Wizard",
    "displayName": "Fire Wizard",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Fire Magic","Spellguider","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "casting": {
            "rating": 10,
            "power": 15
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Shadow Hunter",
    "displayName": "Shadow Hunter",
    "stats": {
        "discipline": 12,
        "type": "Hero",
        "talents": ["Leader","Varanic Rites: Hunter","Spelldancer"],
        "speed": 6,
        "melee": [{
            "rating": 8,
            "name": "Longsword (2h)"
        }],
        "casting": {
            "rating": 10,
            "power": 15
        },
        "armor": 4
    },
    "type": "Leader",
    "value": 39,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Kuzaarik Forgers","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Shadow Hunter",
    "displayName": "Shadow Hunter",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Varanic Rites: Hunter","Spelldancer","Ally[Independent]"],
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Longsword (2h)"
        }],
        "casting": {
            "rating": 10,
            "power": 15
        },
        "armor": 4
    },
    "type": "Standard",
    "value": 32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Shadow Hunter",
    "displayName": "Shadow Hunter",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Varanic Rites: Hunter","Spelldancer"],
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Longsword (1h)"
        }],
        "casting": {
            "rating": 10,
            "power": 15
        },
        "armor": 4
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Kuzaarik Forgers","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Shadow Hunter",
    "displayName": "Shadow Hunter",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Varanic Rites: Hunter","Spelldancer","Ally[Independent]"],
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Longsword (1h)"
        }],
        "casting": {
            "rating": 10,
            "power": 15
        },
        "armor": 4
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Jhenkar (Leader Companion)",
    "displayName": "Jhenkar (Leader Companion)",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Spirit","Dodge","Dodge","Protector","Bonded[Shadow Hunter]","Witchsight","Demon"],
        "speed": 7,
        "melee": [{
            "rating": 12,
            "damage": 8,
            "name": "Bite"
        }],
        "abilities": {
            "agility": 12
        },
        "armor": 2
    },
    "type": "Standard",
    "value": 34,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Jhenkar (Caster Companion)",
    "displayName": "Jhenkar (Caster Companion)",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Spirit","Dodge","Dodge","Protector","Bonded[Shadow Hunter]","Witchsight","Demon"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Bite"
        }],
        "abilities": {
            "agility": 12
        },
        "armor": 2
    },
    "type": "Standard",
    "value": 31,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Haradelan Questers","Kuzaarik Forgers","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Jhenkar (Caster Companion)",
    "displayName": "Jhenkar (Caster Companion)",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Spirit","Dodge","Dodge","Protector","Bonded[Shadow Hunter]","Witchsight","Demon","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Bite"
        }],
        "abilities": {
            "agility": 12
        },
        "armor": 2
    },
    "type": "Standard",
    "value": 31,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Karadal Bladesister",
    "displayName": "Karadal Bladesister",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry","Parry","Accurate Strike","Accurate Strike"],
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Longsword (2h)"
        }],
        "abilities": {
            "agility": 10
        },
        "armor": 5
    },
    "type": "Standard",
    "value": 28,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Ravenblade Mercenaries","Urdaggar Tribes of Valor"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Karadal Bladesister",
    "displayName": "Karadal Bladesister",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry","Parry","Accurate Strike","Accurate Strike","Ally[Independent]"],
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Longsword (2h)"
        }],
        "abilities": {
            "agility": 10
        },
        "armor": 5
    },
    "type": "Standard",
    "value": 28,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Knight Defender",
    "displayName": "Knight Defender",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry","Hardened","Fortress","Mountaineer"],
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Warhammer"
        }],
        "abilities": {
            "strength": 10
        },
        "armor": 6,
        "shield": "S",
        "veteran": [{
            "name": "Tough",
            "cost": 2
        }]
    },
    "type": "Standard",
    "value": 29,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Ravenblade Mercenaries","Urdaggar Tribes of Valor"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Knight Defender",
    "displayName": "Knight Defender",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry","Hardened","Fortress","Mountaineer","Ally[Independent]"],
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Warhammer"
        }],
        "abilities": {
            "strength": 10
        },
        "armor": 6,
        "shield": "S",
        "veteran": [{
            "name": "Tough",
            "cost": 2
        }]
    },
    "type": "Standard",
    "value": 29,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Forester",
    "displayName": "Forester",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Arboreal","Block","Rapid Reload","Scout","Sharpshooter"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "range": [{
            "rating": 10,
            "name": "Longbow"
        }],
        "abilities": {
            "agility": 10,
            "dexterity": 10
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 35,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Kuzaarik Forgers","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Forester",
    "displayName": "Forester",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Arboreal","Block","Rapid Reload","Scout","Sharpshooter","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "range": [{
            "rating": 10,
            "name": "Longbow"
        }],
        "abilities": {
            "agility": 10,
            "dexterity": 10
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 35,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Witchcat",
    "displayName": "Witchcat",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Arboreal","Infiltrate","Witchsight","Bonded[Forester]","Dodge","Animal","Fast"],
        "speed": 8,
        "melee": [{
            "rating": 8,
            "damage": 8,
            "name": "Claw 2x"
        }],
        "abilities": {
            "agility": 10
        },
        "armor": 2
    },
    "type": "Standard",
    "value": 26,
    "gender": "M",
    "race": "Beast"
},{
    "factions": ["Haradelan Questers","Kuzaarik Forgers","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Witchcat",
    "displayName": "Witchcat",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Arboreal","Infiltrate","Witchsight","Bonded[Forester]","Dodge","Animal","Fast","Ally[Independent]"],
        "speed": 8,
        "melee": [{
            "rating": 8,
            "damage": 8,
            "name": "Claw 2x"
        }],
        "abilities": {
            "agility": 10
        },
        "armor": 2
    },
    "type": "Standard",
    "value": 26,
    "gender": "M",
    "race": "Beast"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Knight Mariner",
    "displayName": "Knight Mariner",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry", "Dodge","Fient","Accurate Strike","Sergeant[Sailor, Marine]","Amphibious"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Cutlass"
        }],
        "abilities": {
            "agility": 12
        },
        "armor": 3
    },
    "type": "Standard",
    "value": 29,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Koronnan Moonsworn","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Knight Mariner",
    "displayName": "Knight Mariner",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry", "Dodge","Fient","Accurate Strike","Sergeant[Sailor, Marine]","Amphibious","Ally[Independent]"],
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Cutlass"
        }],
        "abilities": {
            "agility": 12
        },
        "armor": 3
    },
    "type": "Standard",
    "value": 29,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Pikeman",
    "displayName": "Pikeman",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Pike"
        }],
        "armor": 5,
        "shield": "S"
    },
    "type": "Standard",
    "value": 15,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Pikeman",
    "displayName": "Pikeman",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Pike"
        }],
        "armor": 5,
        "shield": "S",
        "talents":["Ally[Independent]"]
    },
    "type": "Standard",
    "value": 15,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "name": "Sailor",
    "displayName": "Sailor",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 6,
        "talents": ["Amphibious"],
        "melee": [{
            "rating": 6,
            "name": "Cutlass"
        }],
        "range": [{
            "rating": 6,
            "name": "Grappler"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 8,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Koronnan Moonsworn","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Sailor",
    "displayName": "Sailor",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 6,
        "talents": ["Amphibious","Ally[Independent]"],
        "melee": [{
            "rating": 6,
            "name": "Cutlass"
        }],
        "range": [{
            "rating": 6,
            "name": "Grappler"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 8,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Sheriff's Levy",
    "displayName": "Sheriff's Levy",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 7,
        "talents": ["Scout"],
        "melee": [{
            "rating": 6,
            "name": "Short Sword"
        }],
        "range": [{
            "rating": 8,
            "name": "Longbow"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 16,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Sheriff's Levy",
    "displayName": "Sheriff's Levy",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 7,
        "talents": ["Scout","Ally[Independent]"],
        "melee": [{
            "rating": 6,
            "name": "Short Sword"
        }],
        "range": [{
            "rating": 8,
            "name": "Longbow"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 16,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Grular Invaders"],
    "name": "Kor-Khan",
    "displayName": "Kor-Khan (Dismounted)",
    "stats": {
        "discipline": 12,
        "type": "Hero",
        "speed": 6,
        "talents": ["Leader","Parry","Taunt"],
        "melee": [{
            "rating": 12,
            "name": "Spikedrakh"
        },{
            "rating": 12,
            "name": "Morning Star"
        }],
        "armor": 5
    },
    "type": "Leader",
    "value": 39,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "name": "Kor-Khan",
    "displayName": "Kor-Khan (Mounted)",
    "stats": {
        "discipline": 12,
        "type": "Hero",
        "speed": 9,
        "talents": ["Leader","Parry","Taunt","Cavalry","Fast"],
        "melee": [{
            "rating": 12,
            "name": "Spikedrakh"
        },{
            "rating": 12,
            "name": "Morning Star"
        }],
        "armor": 5
    },
    "type": "Leader",
    "value": 43,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "name": "Warlock",
    "displayName": "Warlock (Dismounted)",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "speed": 7,
        "talents": ["Shadow Magic","Fear Craver"],
        "melee": [{
            "rating": 6,
            "name": "Shadowspear"
        }],
        "armor": 2,
        "abilities": {
            "strength": 4
        },
        "casting": {
            "power": 15,
            "rating": 10
        }
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "name": "Warlock",
    "displayName": "Warlock (Mounted)",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "speed": 10,
        "talents": ["Shadow Magic","Fear Craver","Cavalry","Fast"],
        "melee": [{
            "rating": 6,
            "name": "Shadowspear"
        }],
        "armor": 2,
        "abilities": {
            "strength": 4
        },
        "casting": {
            "power": 15,
            "rating": 10
        }
    },
    "type": "Caster",
    "value": 35,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Demons of Karelon"],
    "primaryFaction": "Grular Invaders",
    "name": "Warlock",
    "displayName": "Warlock (Dismounted)",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "speed": 7,
        "talents": ["Shadow Magic","Fear Craver","Ally[Independent]"],
        "melee": [{
            "rating": 6,
            "name": "Shadowspear"
        }],
        "armor": 2,
        "abilities": {
            "strength": 4
        },
        "casting": {
            "power": 15,
            "rating": 10
        }
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Demons of Karelon"],
    "primaryFaction": "Grular Invaders",
    "name": "Warlock",
    "displayName": "Warlock (Mounted)",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "speed": 10,
        "talents": ["Shadow Magic","Fear Craver","Cavalry","Fast","Ally[Independent]"],
        "melee": [{
            "rating": 6,
            "name": "Shadowspear"
        }],
        "armor": 2,
        "abilities": {
            "strength": 4
        },
        "casting": {
            "power": 15,
            "rating": 10
        }
    },
    "type": "Caster",
    "value": 35,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "name": "Marauder",
    "displayName": "Marauder (Mounted)",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "speed": 10,
        "talents": ["Cavalry","Light Cavalry","Scout","Harasser","Fast"],
        "melee": [{
            "rating": 8,
            "name": "Morning Star"
        }],
        "range": [{
            "rating": 10,
            "name": "Composite Bow"
        }],
        "armor": 4,
        "veteran": [{
            "name": "Deft Rider",
            "cost": 1
        }]
    },
    "type": "Standard",
    "value": 29,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "name": "Marauder",
    "displayName": "Marauder (Dismounted)",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "speed": 6,
        "talents": ["Scout","Harasser","Elusive","Dodge"],
        "abilities": {
            "agility": 10
        },
        "melee": [{
            "rating": 10,
            "name": "Morning Star"
        }],
        "range": [{
            "rating": 10,
            "name": "Composite Bow"
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 29,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Demons of Karelon","Kandoran Deathmasters"],
    "primaryFaction":"Grular Invaders",
    "name": "Marauder",
    "displayName": "Marauder (Mounted)",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "speed": 10,
        "talents": ["Cavalry","Light Cavalry","Scout","Harasser","Fast","Ally[Independent]"],
        "melee": [{
            "rating": 8,
            "name": "Morning Star"
        }],
        "range": [{
            "rating": 10,
            "name": "Composite Bow"
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 29,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Demons of Karelon","Kandoran Deathmasters"],
    "primaryFaction":"Grular Invaders",
    "name": "Marauder",
    "displayName": "Marauder (Dismounted)",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "speed": 6,
        "talents": ["Scout","Harasser","Elusive","Dodge","Ally[Independent]"],
        "abilities": {
            "agility": 10
        },
        "melee": [{
            "rating": 10,
            "name": "Morning Star"
        }],
        "range": [{
            "rating": 10,
            "name": "Composite Bow"
        }],
        "armor": 4
    },
    "type": "Standard",
    "value": 29,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "name": "Bludgeoneer",
    "displayName": "Bludgeoneer",
    "stats": {
        "discipline": 4,
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Flail"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 11,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "name": "Krang",
    "displayName": "Krang",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Spikedrakh"
        }],
        "armor": 3,
        "shield": "AN",
        "talents": ["Flurry","Wild Charge"]
    },
    "type": "Standard",
    "value": 13,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "name": "Lifetaker",
    "displayName": "Lifetaker",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 7,
        "talents": ["Ambush"],
        "melee": [{
            "rating": 6,
            "name": "Dagger"
        }],
        "range": [{
            "rating": 6,
            "name": "Bow"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 12,
    "gender": "F",
    "race": "Symker"
},{
    "factions": ["Haradelan Questers"],
    "name": "High Questor of Tahnar",
    "displayName": "High Questor of Tahnar",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 12,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 6,
        "discipline": 12,
        "talents": ["Leader","Steadfast","Parry","Parry","Shield Bash"],
        "abilities":{
            "dexterity":10
        },
        "veteran": [{
            "name": "AV7",
            "cost": 2
        }]
    },
    "type": "Leader",
    "value": 39,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction":"Haradelan Questers",
    "name": "High Questor of Tahnar",
    "displayName": "High Questor of Tahnar",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 6,
        "discipline": 10,
        "talents": ["Steadfast","Parry","Parry","Shield Bash","Ally[Independent]"],
        "abilities":{
            "dexterity":10
        },
        "veteran": [{
            "name": "AV7",
            "cost": 2
        }]
    },
    "type": "Standard",
    "value": 32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "High Questor of Vidunar",
    "displayName": "High Questor of Vidunar",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 12,
            "name": "Greatsword"
        }],
        "armor": 7,
        "discipline": 12,
        "talents": ["Leader","Steadfast","Parry","Lion's Roar","Bold"],
        "abilities": {
            "strength": 10
        }
    },
    "type": "Leader",
    "value": 39,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction":"Haradelan Questers",
    "name": "High Questor of Vidunar",
    "displayName": "High Questor of Vidunar",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Greatsword"
        }],
        "armor": 7,
        "discipline": 10,
        "talents": ["Steadfast","Parry","Lion's Roar","Bold","Ally[Independent]"],
        "abilities": {
            "strength": 10
        }
    },
    "type": "Standard",
    "value": 32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "High Questor of Barek",
    "displayName": "High Questor of Barek",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 12,
            "name": "Battleaxe"
        }],
        "armor": 6,
        "discipline": 12,
        "talents": ["Leader","Steadfast","Die Hard","Die Hard","Wild Charge","Bull Rush","Impact","Impetuous"],
        "abilities": {
            "endurance": 10
        }
    },
    "type": "Leader",
    "value": 41,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction":"Haradelan Questers",
    "name": "High Questor of Barek",
    "displayName": "High Questor of Barek",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Battleaxe"
        }],
        "armor": 6,
        "discipline": 10,
        "talents": ["Steadfast","Die Hard","Die Hard","Wild Charge","Bull Rush","Impact","Impetuous","Ally[Independent]"],
        "abilities": {
            "endurance": 10
        }
    },
    "type": "Standard",
    "value": 34,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "High Questor of Glareyn",
    "displayName": "High Questor of Glareyn",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 12,
            "name": "War Axe"
        },{
            "rating": 12,
            "name": "War Axe"
        }],
        "armor": 7,
        "discipline": 12,
        "talents": ["Leader","Steadfast","Block","Protector"],
        "abilities": {
            "endurance": 10
        }
    },
    "type": "Leader",
    "value": 41,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction":"Haradelan Questers",
    "name": "High Questor of Glareyn",
    "displayName": "High Questor of Glareyn",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "War Axe"
        },{
            "rating": 10,
            "name": "War Axe"
        }],
        "armor": 7,
        "discipline": 10,
        "talents": ["Steadfast","Block","Protector","Ally[Independent]"],
        "abilities": {
            "endurance": 10
        }
    },
    "type": "Standard",
    "value": 34,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "High Questor of Vasilar",
    "displayName": "High Questor of Vasilar (Mounted)",
    "stats": {
        "type": "Hero",
        "speed": 9,
        "melee": [{
            "rating": 12,
            "name": "Lance"
        },{
            "rating": 12,
            "name": "Longsword (1h)"
        },{
            "rating": 6,
            "damage": 6,
            "name": "Warhorse"
        }],
        "shield": "S",
        "armor": 7,
        "discipline": 12,
        "talents": ["Leader","Steadfast","Parry","Bladeflash","Cavalry","Warhorse","Fast"],
        "abilities": {
            "dexterity": 10,
            "spirit": 10
        }
    },
    "type": "Leader",
    "value": 52,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction":"Haradelan Questers",
    "name": "High Questor of Vasilar",
    "displayName": "High Questor of Vasilar (Mounted)",
    "stats": {
        "type": "Hero",
        "speed": 9,
        "melee": [{
            "rating": 10,
            "name": "Lance"
        },{
            "rating": 10,
            "name": "Longsword (1h)"
        },{
            "rating": 6,
            "damage": 6,
            "name": "Warhorse"
        }],
        "shield": "S",
        "armor": 7,
        "discipline": 10,
        "talents": ["Steadfast","Parry","Bladeflash","Cavalry","Warhorse","Fast","Ally[Independent]"],
        "abilities": {
            "dexterity": 10,
            "spirit": 10
        }
    },
    "type": "Standard",
    "value": 45,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Ravenblade Mercenaries"],
    "name": "Fist of Vidunar",
    "displayName": "Fist of Vidunar",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 8,
            "name": "War Mattock"
        }],
        "armor": 6,
        "discipline": 8,
        "talents": ["Varanic Rites", "Chosen Warrior","Armored Casting[-2]"],
        "abilities": {
            "dexterity": 6
        },
        "casting": {
            "power": 15,
            "rating": 10
        }
    },
    "value": 33,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction":"Haradelan Questers",
    "name": "Fist of Vidunar",
    "displayName": "Fist of Vidunar",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 8,
            "name": "War Mattock"
        }],
        "armor": 6,
        "discipline": 8,
        "talents": ["Varanic Rites", "Chosen Warrior","Armored Casting[-2]","Ally[Independent]"],
        "abilities": {
            "dexterity": 6
        },
        "casting": {
            "power": 15,
            "rating": 10
        }
    },
    "value": 33,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Questing Knight of Tahnar",
    "displayName": "Questing Knight of Tahnar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 7,
        "discipline": 10,
        "talents": ["Parry","Parry","Shield Bash"],
        "abilities": {
            "dexterity": 10
        }
    },
    "value": 32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Haradelan Questers",
    "name": "Questing Knight of Tahnar",
    "displayName": "Questing Knight of Tahnar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 7,
        "discipline": 10,
        "talents": ["Parry","Parry","Shield Bash","Ally[Independent]"],
        "abilities": {
            "dexterity": 10
        }
    },
    "value": 32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Questing Knight of Vidunar",
    "displayName": "Questing Knight of Vidunar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Greatsword"
        }],
        "armor": 7,
        "discipline": 10,
        "talents": ["Parry","Steadfast","Bold"],
        "abilities": {
            "strength": 10
        }
    },
    "value": 30,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Haradelan Questers",
    "name": "Questing Knight of Vidunar",
    "displayName": "Questing Knight of Vidunar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Greatsword"
        }],
        "armor": 7,
        "discipline": 10,
        "talents": ["Parry","Steadfast","Bold","Ally[Independent]"],
        "abilities": {
            "strength": 10
        }
    },
    "value": 30,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Questing Knight of Barek",
    "displayName": "Questing Knight of Barek",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Battleaxe"
        }],
        "armor": 6,
        "discipline": 10,
        "talents": ["Die Hard","Die Hard","Wild Charge","Bull Rush","Impact","Impetuous"],
        "abilities": {
            "endurance": 10
        }
    },
    "value": 32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Haradelan Questers",
    "name": "Questing Knight of Barek",
    "displayName": "Questing Knight of Barek",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Battleaxe"
        }],
        "armor": 7,
        "discipline": 10,
        "talents": ["Die Hard","Die Hard","Wild Charge","Bull Rush","Impact","Impetuous","Ally[Independent]"],
        "abilities": {
            "endurance": 10
        }
    },
    "value": 32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Questing Knight of Glareyn",
    "displayName": "Questing Knight of Glareyn",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "War Axe"
        },{
            "rating": 10,
            "name": "War Axe"
        }],
        "armor": 7,
        "discipline": 10,
        "talents": ["Block","Protector"],
        "abilities": {
            "endurance": 10
        }
    },
    "value": 32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Haradelan Questers",
    "name": "Questing Knight of Glareyn",
    "displayName": "Questing Knight of Glareyn",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "War Axe"
        },{
            "rating": 10,
            "name": "War Axe"
        }],
        "armor": 7,
        "discipline": 10,
        "talents": ["Block","Protector","Ally[Independent]"],
        "abilities": {
            "endurance": 10
        }
    },
    "value": 32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Questing Knight of Sylvia",
    "displayName": "Questing Knight of Sylvia",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 5,
        "discipline": 10,
        "talents": ["Lucky","Dodge","Dodge","Raven Stance"],
        "abilities": {
            "agility": 12
        },
        "skills": [{
            "name": "Find",
            "rating": 10
        }]
    },
    "value": 30,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Haradelan Questers",
    "name": "Questing Knight of Sylvia",
    "displayName": "Questing Knight of Sylvia",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 5,
        "discipline": 10,
        "talents": ["Lucky","Dodge","Dodge","Raven Stance","Ally[Independent]"],
        "abilities": {
            "agility": 12
        },
        "skills": [{
            "name": "Find",
            "rating": 10
        }]
    },
    "value": 30,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Questing Knight of Vasilar",
    "displayName": "Questing Knight of Vasilar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 9,
        "melee": [{
            "rating": 10,
            "name": "Lance"
        },{
            "rating": 10,
            "name": "Longsword (1h)"
        },{
            "rating": 6,
            "damage": 6,
            "name": "Warhorse"
        }],
        "shield": "S",
        "armor": 7,
        "discipline": 10,
        "talents": ["Steadfast","Parry","Bladeflash","Cavalry","Warhorse","Fast"],
        "abilities": {
            "dexterity": 10
        }
    },
    "value": 43,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Haradelan Questers",
    "name": "Questing Knight of Vasilar",
    "displayName": "Questing Knight of Vasilar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 9,
        "melee": [{
            "rating": 10,
            "name": "Lance"
        },{
            "rating": 10,
            "name": "Longsword (1h)"
        },{
            "rating": 6,
            "damage": 6,
            "name": "Warhorse"
        }],
        "shield": "S",
        "armor": 7,
        "discipline": 10,
        "talents": ["Steadfast","Parry","Bladeflash","Cavalry","Warhorse","Fast","Ally[Independent]"],
        "abilities": {
            "dexterity": 10
        }
    },
    "value": 43,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Apprentice Knight of Tahnar",
    "displayName": "Apprentice Knight of Tahnar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 6,
        "discipline": 8,
        "talents": ["Parry","Shield Bash"],
        "options": [{
            "name": "Sergeant[Muster]",
            "selected": true
        },{
            "name": "DEX",
            "rating": 10
        }]
    },
    "value": 26,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Haradelan Questers",
    "name": "Apprentice Knight of Tahnar",
    "displayName": "Apprentice Knight of Tahnar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 6,
        "discipline": 8,
        "talents": ["Parry","Shield Bash","Ally[Independent]"],
        "options": [{
            "name": "Sergeant[Muster]",
            "selected": true
        },{
            "name": "DEX",
            "rating": 10
        }]
    },
    "value": 26,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Apprentice Knight of Vidunar",
    "displayName": "Apprentice Knight of Vidunar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Greatsword"
        }],
        "armor": 6,
        "discipline": 8,
        "talents": ["Parry"],
        "abilities": {
            "strength": 10
        },
        "options": [{
            "name": "Sergeant[Muster]",
            "selected": true
        },{
            "name": "Steadfast"
        }]
    },
    "value": 26,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Haradelan Questers",
    "name": "Apprentice Knight of Vidunar",
    "displayName": "Apprentice Knight of Vidunar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Greatsword"
        }],
        "armor": 6,
        "discipline": 8,
        "talents": ["Parry","Ally[Independent]"],
        "abilities": {
            "strength": 10
        },
        "options": [{
            "name": "Sergeant[Muster]",
            "selected": true
        },{
            "name": "Steadfast"
        }]
    },
    "value": 26,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Apprentice Knight of Barek",
    "displayName": "Apprentice Knight of Barek",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Battleaxe"
        }],
        "armor": 6,
        "discipline": 8,
        "talents": ["Die Hard","Bull Rush","Impact","Impetuous"],
        "options": [{
            "name": "Sergeant[Muster]",
            "selected": true
        },{
            "name": "Die Hard"
        }]
    },
    "value": 26,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Haradelan Questers",
    "name": "Apprentice Knight of Barek",
    "displayName": "Apprentice Knight of Barek",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Battleaxe"
        }],
        "armor": 6,
        "discipline": 8,
        "talents": ["Die Hard","Bull Rush","Impact","Impetuous","Ally[Independent]"],
        "options": [{
            "name": "Sergeant[Muster]",
            "selected": true
        },{
            "name": "Die Hard"
        }]
    },
    "value": 26,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["The Collective","Haradelan Questers","Ravenblade Mercenaries"],
    "name": "Militia Spearman",
    "displayName": "Militia Spearman",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Longspear"
        }],
        "shield": "S",
        "armor": 4,
        "discipline": 6
    },
    "value": 12,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction":"Haradelan Questers",
    "name": "Militia Spearman",
    "displayName": "Militia Spearman",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Longspear"
        }],
        "shield": "S",
        "armor": 4,
        "discipline": 6,
        "talents":["Ally[Independent]"]
    },
    "value": 12,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Muster Archer",
    "displayName": "Muster Archer",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 4,
            "name": "Dagger"
        }],
        "range": [{
            "rating": 6,
            "name": "Bow"
        }],
        "armor": 2,
        "discipline": 4
    },
    "value": 6,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction":"Haradelan Questers",
    "name": "Muster Archer",
    "displayName": "Muster Archer",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 4,
            "name": "Dagger"
        }],
        "range": [{
            "rating": 6,
            "name": "Bow"
        }],
        "armor": 2,
        "discipline": 4,
        "talents":["Ally[Independent]"]
    },
    "value": 6,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Muster Thresher",
    "displayName": "Muster Thresher",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Thresher"
        }],
        "armor": 2,
        "discipline": 4
    },
    "value": 8,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction":"Haradelan Questers",
    "name": "Muster Thresher",
    "displayName": "Muster Thresher",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Thresher"
        }],
        "armor": 2,
        "discipline": 4,
        "talents":["Ally[Independent]"]
    },
    "value": 8,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Trilian Seekers"],
    "name": "Starseeker",
    "displayName": "Starseeker",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 12,
            "name": "Toloron"
        }],
        "armor": 5,
        "discipline": 12,
        "talents": ["Leader","Arboreal","Parry","Parry","Bold","Elusive","Deflect"],
        "abilities": {
            "agility": 10
        }
    },
    "value": 39,
    "gender": "M",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Bladerider First",
    "displayName": "Bladerider First (Mounted)",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "rating": 12,
            "name": "Toloron"
        }],
        "range": [{
            "rating": 10,
            "name": "Longbow"
        }],
        "armor": 4,
        "discipline": 12,
        "talents": ["Cavalry","Leader","Parry","Bladedancer","Scout","Fast"]
    },
    "value": 44,
    "gender": "F",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Bladerider First",
    "displayName": "Bladerider First (Dismounted)",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 12,
            "name": "Toloron"
        }],
        "range": [{
            "rating": 10,
            "name": "Longbow"
        }],
        "armor": 4,
        "discipline": 12,
        "talents": ["Leader","Parry","Bladedancer","Scout"],
        "abilities": {
            "agility": 10
        }
    },
    "value": 41,
    "gender": "F",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Treespeaker",
    "displayName": "Treespeaker",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Treespeaking","Tree Bond","Arboreal"],
        "casting": {
            "power": 15,
            "rating": 10
        }
    },
    "value": 32,
    "gender": "F",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Stargazer",
    "displayName": "Stargazer",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Celestial Magic","Spellbracer","Arboreal"],
        "casting": {
            "power": 15,
            "rating": 10
        }
    },
    "value": 32,
    "gender": "M",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Bladerider",
    "displayName": "Bladerider (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "rating": 10,
            "name": "Toloron"
        }],
        "range": [{
            "rating": 10,
            "name": "Longbow"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Cavalry","Parry","Bladedancer","Scout","Fast"]
    },
    "value": 37,
    "gender": "F",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Bladerider",
    "displayName": "Bladerider (Dismounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Toloron"
        }],
        "range": [{
            "rating": 10,
            "name": "Longbow"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Parry","Bladedancer","Scout"],
        "abilities": {
            "agility": 10
        }
    },
    "value": 34,
    "gender": "F",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Enforcer",
    "displayName": "Enforcer",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Toloron"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Contain","Arboreal","Parry","Parry"],
        "abilities": {
            "agility": 10
        },
        "options": [{
            "name": "Hunt",
            "selected": true,
            "rating": 8
        },{
            "name": "Ambush"
        }]
    },
    "value": 30,
    "gender": "M",
    "race": "Trillian"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Trilian Seekers",
    "name": "Enforcer",
    "displayName": "Enforcer",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Toloron"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Contain","Arboreal","Parry","Parry","Ally[Independent]"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }]
    },
    "value": 30,
    "gender": "M",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Searcher",
    "displayName": "Searcher",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 8,
            "name": "Herenkal"
        }],
        "range": [{
            "rating": 12,
            "name": "Longbow"
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Arboreal","Scout","Marksman"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name": "Find",
            "rating": 10
        },{
            "name": "Hunt",
            "rating": 10
        }]
    },
    "value": 34,
    "gender": "F",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Mist Dancer",
    "displayName": "Mist Dancer",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Herenkal"
        },{
            "rating": 10,
            "name": "Herenkal"
        }],
        "range": [{
            "rating": 8,
            "name": "Herenkal"
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Covert Charge","Arboreal","Tough","Parry","Dodge","Bladedancer"],
        "abilities": {
            "agility": 10
        }
    },
    "value": 37,
    "gender": "M",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Veteran Defender",
    "displayName": "Veteran Defender",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Herenkal"
        }],
        "range": [{
            "rating": 10,
            "name": "Javelin"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Treefall","Sergeant[Defender]","Dodge","Dodge"],
        "abilities": {
            "agility": 12
        }
    },
    "value": 30,
    "gender": "M",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers","Ravenblade Mercenaries"],
    "name": "Wanderer",
    "displayName": "Wanderer",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Longspear"
        }],
        "range": [{
            "rating": 6,
            "name": "Longbow"
        }],
        "armor": 4,
        "discipline": 6,
        "talents": ["Arboreal"],
        "veteran": [{
            "name": "MAR",
            "cost": 1
        },{
            "name": "Scrounge",
            "cost": 1
        }]
    },
    "value":15,
    "gender": "M",
    "race": "Trillian"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Trilian Seekers",
    "name": "Wanderer",
    "displayName": "Wanderer",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Longspear"
        }],
        "range": [{
            "rating": 6,
            "name": "Longbow"
        }],
        "armor": 4,
        "discipline": 6,
        "talents": ["Arboreal","Ally[Independent]"],
        "veteran": [{
            "name": "MAR",
            "cost": 1
        },{
            "name": "Scrounge",
            "cost": 1
        }]
    },
    "value":15,
    "gender": "M",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Defender",
    "displayName": "Defender",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Herenkal"
        }],
        "range": [{
            "rating": 8,
            "name": "Javelin"
        }],
        "armor": 3,
        "discipline": 6,
        "talents": ["Treefall"]
    },
    "value":13,
    "gender": "F",
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Tree Runner",
    "displayName": "Tree Runner",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Herenkal"
        }],
        "range": [{
            "rating": 6,
            "name": "Longbow"
        }],
        "armor": 3,
        "discipline": 6,
        "talents": ["Arboreal","Scout"],
        "veteran": [{
            "name": "RAR",
            "cost": 1
        },{
            "name": "Scrounge",
            "cost": 1
        }]
    },
    "value":17,
    "gender": "M",
    "race": "Trillian"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Wolfkarl",
    "displayName": "Wolfkarl",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 12,
            "name": "Wolfsword"
        }],
        "armor": 5,
        "discipline": 12,
        "talents": ["Leader","Parry","Fearsome","Battlecry"],
        "abilities": {
            "strength": 10
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }]
    },
    "value":39,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Urdaggar Tribes of Valor",
    "name": "Wolfkarl",
    "displayName": "Wolfkarl",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Wolfsword"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Fearsome","Battlecry","Ally[Independent]"],
        "abilities": {
            "strength": 10
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }]
    },
    "value":32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Valkyrie",
    "displayName": "Valkyrie",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 12,
            "name": "Longspear"
        }],
        "shield":"S",
        "armor": 3,
        "discipline": 12,
        "talents": ["Leader","Scout","Spotter","Parry","Deft","Backstep"],
        "abilities": {
            "agility": 10,
            "spirit": 10
        }
    },
    "value":39,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Urdaggar Tribes of Valor",
    "name": "Valkyrie",
    "displayName": "Valkyrie",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Longspear"
        }],
        "shield":"S",
        "armor": 3,
        "discipline": 10,
        "talents": ["Scout","Spotter","Parry","Deft","Backstep","Ally[Independent]"],
        "abilities": {
            "agility": 10,
            "spirit": 10
        }
    },
    "value":32,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Bear Mystic",
    "displayName": "Bear Mystic",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Handclaws"
        },{
            "rating": 6,
            "name": "Handclaws"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Bear Magic","Mystic Dance"],
        "casting": {
            "power":15,
            "rating":10
        }
    },
    "value":31,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Urdaggar Tribes of Valor",
    "name": "Bear Mystic",
    "displayName": "Bear Mystic",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Handclaws"
        },{
            "rating": 6,
            "name": "Handclaws"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Bear Magic","Mystic Dance","Ally[Independent]"],
        "casting": {
            "power":15,
            "rating":10
        }
    },
    "value":31,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Boar Warrior",
    "displayName": "Boar Warrior",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Battleaxe"
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Bold","Bull Rush","Hardened","Die Hard","Die Hard","Wild Charge"],
        "abilities": {
            "endurance": 10
        }
    },
    "value":28,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Urdaggar Tribes of Valor",
    "name": "Boar Warrior",
    "displayName": "Boar Warrior",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Battleaxe"
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Bold","Bull Rush","Hardened","Die Hard","Die Hard","Wild Charge","Ally[Independent]"],
        "abilities": {
            "endurance": 10
        }
    },
    "value":28,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Berserker",
    "displayName": "Berserker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Dire Claw"
        },{
            "rating": 10,
            "name": "Dire Claw"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Fearsome","Frenzy","Tough"],
        "abilities": {
            "strength": 10
        },
        "veteran": [{
            "name": "Flurry",
            "cost": 1
        },{
            "name": "Steadfast",
            "cost": 2
        }]
    },
    "value":32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Urdaggar Tribes of Valor",
    "name": "Berserker",
    "displayName": "Berserker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Dire Claw"
        },{
            "rating": 10,
            "name": "Dire Claw"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Fearsome","Frenzy","Tough","Ally[Independent]"],
        "abilities": {
            "strength": 10
        },
        "veteran": [{
            "name": "Flurry",
            "cost": 1
        },{
            "name": "Steadfast",
            "cost": 2
        }]
    },
    "value":32,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Night Hunter",
    "displayName": "Night Hunter",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Short Sword"
        }],
        "range":[{
            "rating":12,
            "name": "Bow"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Accurate Shot","Accurate Shot","Dodge","Scout","Sniper"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name":"Hunt",
            "rating":8
        },{
            "name":"Stealth",
            "rating":8
        }]
    },
    "value":28,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Kuzaarik Forgers"],
    "primaryFaction":"Urdaggar Tribes of Valor",
    "name": "Night Hunter",
    "displayName": "Night Hunter",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Short Sword"
        }],
        "range":[{
            "rating":12,
            "name": "Bow"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Accurate Shot","Accurate Shot","Dodge","Scout","Sniper","Ally[Independent]"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name":"Hunt",
            "rating":8
        },{
            "name":"Stealth",
            "rating":8
        }]
    },
    "value":28,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Lioness",
    "displayName": "Lioness",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Greatsword"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Infiltrate","Pouncer","Arboreal","Assault","Tough"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name":"Hunt",
            "rating":8
        },{
            "name":"Stealth",
            "rating":10
        }]
    },
    "value":32,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Urdaggar Tribes of Valor",
    "name": "Lioness",
    "displayName": "Lioness",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Greatsword"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Infiltrate","Pouncer","Arboreal","Assault","Tough","Ally[Independent]"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name":"Hunt",
            "rating":8
        },{
            "name":"Stealth",
            "rating":10
        }]
    },
    "value":32,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Slinger",
    "displayName": "Slinger",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 4,
            "name": "Knife"
        }],
        "range":[{
            "rating":6,
            "name":"Sling"
        }],
        "armor": 2,
        "discipline": 6,
        "skills": [{
            "name":"Find",
            "rating":8
        }]
    },
    "value":8,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Urdaggar Tribes of Valor",
    "name": "Slinger",
    "displayName": "Slinger",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 4,
            "name": "Knife"
        }],
        "range":[{
            "rating":6,
            "name":"Sling"
        }],
        "armor": 2,
        "discipline": 6,
        "talents":["Ally[Independent]"],
        "skills": [{
            "name":"Find",
            "rating":8
        }]
    },
    "value":8,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Unproven",
    "displayName": "Unproven",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Longspear"
        }],
        "shield": "S",
        "armor": 3,
        "discipline": 6
    },
    "value":12,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Urdaggar Tribes of Valor",
    "name": "Unproven",
    "displayName": "Unproven",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Longspear"
        }],
        "shield": "S",
        "armor": 3,
        "discipline": 6,
        "talents":["Ally[Independent]"]
    },
    "value":12,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Hunter",
    "displayName": "Hunter",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Short Sword"
        }],
        "range":[{
            "rating":8,
            "name":"Bow"
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Scout"],
        "skills": [{
            "name":"Hunt",
            "rating":6
        }]
    },
    "value": 13,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Urdaggar Tribes of Valor",
    "name": "Hunter",
    "displayName": "Hunter",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Short Sword"
        }],
        "range":[{
            "rating":8,
            "name":"Bow"
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Scout","Ally[Independent]"],
        "skills": [{
            "name":"Hunt",
            "rating":6
        }]
    },
    "value": 13,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Mizrakai",
    "displayName": "Mizrakai",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Longspear"
        }],
        "shield": "S",
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Accurate Strike","Backstep","Impact","Ally[Independent]"],
        "abilities": {
            "dexterity": 10
        }
    },
    "value":30,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Koronnan Moonsworn",
    "name": "Mizrakai",
    "displayName": "Mizrakai",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Longspear"
        }],
        "shield": "S",
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Accurate Strike","Backstep","Impact","Ally[Independent]"],
        "abilities": {
            "dexterity": 10
        }
    },
    "value":30,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Koronnan Moonsworn","Ravenblade Mercenaries"],
    "name": "Mizrakai",
    "displayName": "Mizrakai",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Longspear"
        }],
        "shield": "S",
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Accurate Strike","Backstep","Impact"],
        "abilities": {
            "dexterity": 10
        }
    },
    "value":30,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Stag Warrior",
    "displayName": "Stag Warrior",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Hartblade"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Parry","Assault","Restore","Heroic Attack","Ally[Trusted]"],
        "abilities": {
            "endurance": 10,
            "spirit": 10
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }]
    },
    "gender": "F",
    "value": 31,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits"],
    "primaryFaction":"Wandering Allies",
    "name": "Stag Warrior",
    "displayName": "Stag Warrior",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Hartblade"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Parry","Assault","Restore","Heroic Attack","Ally[Independent]"],
        "abilities": {
            "endurance": 10,
            "spirit": 10
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }]
    },
    "gender": "F",
    "value": 31,
    "race": "Faeler"
},{
    "factions": ["Ravenblade Mercenaries"],
    "name": "Stag Warrior",
    "displayName": "Stag Warrior",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Hartblade"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Parry","Assault","Restore","Heroic Attack"],
        "abilities": {
            "endurance": 10,
            "spirit": 10
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }]
    },
    "gender": "F",
    "value": 31,
    "race": "Faeler"
},{
    "factions": ["Ravenblade Mercenaries"],
    "name": "Truthseeker",
    "displayName": "Truthseeker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Sanghara"
        },{
            "rating": 10,
            "name": "Sanghara"
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Bladedancer","Accurate Strike","Swordsman[Sanghara]","Dodge"],
        "abilities": {
            "agility": 14,
            "knowledge": 10
        },
        "skills": [{
            "name": "Find",
            "rating": 10
        }]
    },
    "gender": "F",
    "value": 35,
    "race": "Symker"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Wandering Allies",
    "name": "Truthseeker",
    "displayName": "Truthseeker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Sanghara"
        },{
            "rating": 10,
            "name": "Sanghara"
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Bladedancer","Accurate Strike","Swordsman[Sanghara]","Dodge","Ally[Trusted]"],
        "abilities": {
            "agility": 14,
            "knowledge": 10
        },
        "skills": [{
            "name": "Find",
            "rating": 10
        }]
    },
    "gender": "F",
    "value": 35,
    "race": "Symker"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Mershael Corsairs","Shakrim Wavestalkers","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Truthseeker",
    "displayName": "Truthseeker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Sanghara"
        },{
            "rating": 10,
            "name": "Sanghara"
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Bladedancer","Accurate Strike","Swordsman[Sanghara]","Dodge","Ally[Independent]"],
        "abilities": {
            "agility": 14,
            "knowledge": 10
        },
        "skills": [{
            "name": "Find",
            "rating": 10
        }]
    },
    "gender": "F",
    "value": 35,
    "race": "Symker"
},{
    "factions": ["The Collective"],
    "name": "Wandering Bard",
    "displayName": "Wandering Bard",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Dagger"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Perform[Bardsong,3]","Dodge","Elusive","Outperform","Protected"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name": "Perform",
            "rating": 10
        }]
    },
    "gender": "F",
    "value": 25,
    "race": "Faeler"
},{
    "factions": ["The Collective"],
    "name": "Wandering Bard",
    "displayName": "Wandering Bard",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Dagger"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Perform[Bardsong,3]","Dodge","Elusive","Outperform","Protected"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name": "Perform",
            "rating": 10
        }]
    },
    "gender": "F",
    "value": 25,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Wandering Bard",
    "displayName": "Wandering Bard",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Dagger"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Perform[Bardsong,3]","Dodge","Elusive","Outperform","Protected","Ally[Trusted]"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name": "Perform",
            "rating": 10
        }]
    },
    "gender": "F",
    "value": 25,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Wandering Bard",
    "displayName": "Wandering Bard",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Dagger"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Perform[Bardsong,3]","Dodge","Elusive","Outperform","Protected","Ally[Trusted]"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name": "Perform",
            "rating": 10
        }]
    },
    "gender": "F",
    "value": 25,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Shakrim Wavestalkers","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Nightwhisper",
    "displayName": "Nightwhisper",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Running Shot","Dodge","Scout","Darkvision","Elusive","Harasser","Freerunner","Leaper","Ally[Independent]"],
        "abilities": {
            "agility": 12
        },
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "range": [{
            "rating": 10,
            "name": "Roondar"
        }],
        "armor": 3
    },
    "type": "Standard",
    "value": 30,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Zetakor",
    "displayName": "Zetakor",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "shield": "L",
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Bladeflash","Conquer","Taunt","Ally[Independent]"]
    },
    "gender": "M",
    "value": 30,
    "race": "Chaler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits"],
    "name": "Bard of the Arlian",
    "displayName": "Bard of the Arlian",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Dagger"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Perform[Bardsong,6]","Dodge","Elusive","Outperform","Protected"],
        "abilities": {
            "agility": 12
        },
        "skills": [{
            "name": "Perform",
            "rating": 10
        }]
    },
    "gender": "F",
    "value": 33,
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Operative",
    "displayName": "Operative",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "damage": 6,
            "damageBonus": 1,
            "name": "Gadget"
        }],
        "range": [{
            "rating": 8,
            "name": "Grappler"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Die Hard","Die Hard","Weaponeer","Wayfinder"],
        "abilities": {
            "dexterity": 10,
            "endurance": 10
        },
        "skills": [{
            "name": "Devices",
            "rating": 8
        },{
            "name": "Stealth",
            "rating": 10
        }]
    },
    "gender": "M",
    "value": 33,
    "race": "Kuzaarik"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Operative",
    "displayName": "Operative",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "damage": 6,
            "damageBonus": 1,
            "name": "Gadget"
        }],
        "range": [{
            "rating": 8,
            "name": "Grappler"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Die Hard","Die Hard","Weaponeer","Wayfinder","Ally[Independent]"],
        "abilities": {
            "dexterity": 10,
            "endurance": 10
        },
        "skills": [{
            "name": "Devices",
            "rating": 8
        },{
            "name": "Stealth",
            "rating": 10
        }]
    },
    "gender": "M",
    "value": 33,
    "race": "Kuzaarik"
},{
    "factions": ["Trilian Seekers"],
    "name": "Guardian",
    "displayName": "Guardian",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 4,
            "name": "Knife"
        }],
        "range": [{
            "rating": 8,
            "name": "Longbow"
        }],
        "armor": 4,
        "discipline": 6,
        "talents": ["Guardian Shot","Limited"]
    },
    "gender": "M",
    "value": 13,
    "race": "Trillian"
},{
    "factions": ["Grular Invaders"],
    "name": "Impaler",
    "displayName": "Impaler (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "rating": 10,
            "name": "Impaler"
        }],
        "shield": "S",
        "armor": 4,
        "discipline": 10,
        "talents": ["Cavalry","Assault","Hit and Run","Nimble","Fast"],
        "abilities": {
            "agility": 10
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Symker"
},{
    "factions": ["Kandoran Deathmasters"],
    "primaryFaction":"Grular Invaders",
    "name": "Impaler",
    "displayName": "Impaler (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "rating": 10,
            "name": "Impaler"
        }],
        "shield": "S",
        "armor": 4,
        "discipline": 10,
        "talents": ["Cavalry","Assault","Hit and Run","Nimble","Fast","Ally[Independent]"],
        "abilities": {
            "agility": 10
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "name": "Impaler",
    "displayName": "Impaler (Dismounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Impaler"
        }],
        "shield": "S",
        "armor": 4,
        "discipline": 10,
        "talents": ["Assault","Backstep","Dodge"],
        "abilities": {
            "agility": 10
        }
    },
    "gender": "M",
    "value": 27,
    "race": "Symker"
},{
    "factions": ["Kandoran Deathmasters"],
    "primaryFaction":"Grular Invaders",
    "name": "Impaler",
    "displayName": "Impaler (Dismounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Impaler"
        }],
        "shield": "S",
        "armor": 4,
        "discipline": 10,
        "talents": ["Assault","Backstep","Dodge","Ally[Independent]"],
        "abilities": {
            "agility": 10
        }
    },
    "gender": "M",
    "value": 27,
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "name": "Raider",
    "displayName": "Raider (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 10,
        "melee": [{
            "rating": 6,
            "name": "Javelin"
        }],
        "range": [{
            "rating": 6,
            "name": "Javelin"
        }],
        "shield": "S",
        "armor": 3,
        "discipline": 6,
        "talents": ["Cavalry","Harasser","Light Cavalry","Elusive","Fast"]
    },
    "gender": "M",
    "value": 18,
    "race": "Symker"
},{
    "factions": ["Kandoran Deathmasters"],
    "primaryFaction":"Grular Invaders",
    "name": "Raider",
    "displayName": "Raider (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 10,
        "melee": [{
            "rating": 6,
            "name": "Javelin"
        }],
        "range": [{
            "rating": 6,
            "name": "Javelin"
        }],
        "shield": "S",
        "armor": 3,
        "discipline": 6,
        "talents": ["Cavalry","Harasser","Light Cavalry","Elusive","Fast","Ally[Independent]"]
    },
    "gender": "M",
    "value": 18,
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "name": "Raider",
    "displayName": "Raider (Dismounted)",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Javelin"
        }],
        "range": [{
            "rating": 6,
            "name": "Javelin"
        }],
        "shield": "S",
        "armor": 3,
        "discipline": 6,
        "talents": ["Harasser","Elusive"]
    },
    "gender": "M",
    "value": 14,
    "race": "Symker"
},{
    "factions": ["Kandoran Deathmasters"],
    "primaryFaction":"Grular Invaders",
    "name": "Raider",
    "displayName": "Raider (Dismounted)",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Javelin"
        }],
        "range": [{
            "rating": 6,
            "name": "Javelin"
        }],
        "shield": "S",
        "armor": 3,
        "discipline": 6,
        "talents": ["Harasser","Elusive","Ally[Independent]"]
    },
    "gender": "M",
    "value": 14,
    "race": "Symker"
},{
    "factions": ["Mershael Corsairs"],
    "name": "Reaver's Kindred",
    "displayName": "Reaver's Kindred",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "range": [{
            "rating": 10,
            "name": "Tennko"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Quick"],
        "abilities": {
            "agility": 10
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Chaler"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Mershael Corsairs",
    "name": "Reaver's Kindred",
    "displayName": "Reaver's Kindred",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "range": [{
            "rating": 10,
            "name": "Tennko"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Quick","Ally[Independent]"],
        "abilities": {
            "agility": 10
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Chaler"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Stoneclaw Savage",
    "displayName": "Stoneclaw Savage (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 8,
        "melee": [{
            "rating": 10,
            "name": "Zeradrakh"
        },{
            "rating": 8,
            "damage": 6,
            "name": "Bite"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Die Hard", "Die Hard","Fearsome","Bull Rush","Cavalry","Fast","Alpine"],
        "abilities": {
            "endurance": 12,
            "strength": 12
        }
    },
    "gender": "M",
    "value": 43,
    "race": "Kuzaarik"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Stoneclaw Savage",
    "displayName": "Stoneclaw Savage (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 8,
        "melee": [{
            "rating": 10,
            "name": "Zeradrakh"
        },{
            "rating": 8,
            "damage": 6,
            "name": "Bite"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Die Hard", "Die Hard","Fearsome","Bull Rush","Cavalry","Fast","Alpine","Ally[Independent]"],
        "abilities": {
            "endurance": 12,
            "strength": 12
        }
    },
    "gender": "M",
    "value": 43,
    "race": "Kuzaarik"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Stoneclaw Savage",
    "displayName": "Stoneclaw Savage (Dismounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Zeradrakh"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Die Hard", "Die Hard","Alpine"],
        "abilities": {
            "endurance": 10,
            "strength": 10
        }
    },
    "gender": "M",
    "value": 27,
    "race": "Kuzaarik"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Stoneclaw Savage",
    "displayName": "Stoneclaw Savage (Dismounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Zeradrakh"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Die Hard", "Die Hard","Alpine","Ally[Independent]"],
        "abilities": {
            "endurance": 10,
            "strength": 10
        }
    },
    "gender": "M",
    "value": 27,
    "race": "Kuzaarik"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Viper Veteran",
    "displayName": "Viper Veteran",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "range": [{
            "rating": 8,
            "name": "Blowgun"
        }],
        "shield": "L",
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry", "Bladeflash","Conquer","Taunt","Arboreal"]
    },
    "gender": "M",
    "value": 34,
    "race": "Chaler"
},{
    "factions": ["Shakrim Wavestalkers"],
    "primaryFaction":"Traazorite Crusaders",
    "name": "Viper Veteran",
    "displayName": "Viper Veteran",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "range": [{
            "rating": 8,
            "name": "Blowgun"
        }],
        "shield": "L",
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry", "Bladeflash","Conquer","Taunt","Arboreal","Ally[Independent]"]
    },
    "gender": "M",
    "value": 34,
    "race": "Chaler"
},{
    "factions": ["Demons of Karelon"],
    "name": "Karbazaal",
    "displayName": "Karbazaal",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Claw 2x"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Fearsome","Tough","Tough","Fearless","Demon"],
        "abilities":{
            "strength": 10
        }
    },
    "gender": "M",
    "value": 37,
    "race": "Demon"
},{
    "factions": ["Grular Invaders"],
    "primaryFaction":"Demons of Karelon",
    "name": "Karbazaal",
    "displayName": "Karbazaal",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Claw 2x"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Fearsome","Tough","Tough","Fearless","Demon","Ally[Independent]"],
        "abilities":{
            "strength": 10
        }
    },
    "gender": "M",
    "value": 37,
    "race": "Demon"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Oppressor",
    "displayName": "Oppressor",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 12,
            "name": "Spikedrakh"
        }],
        "range": [{
            "rating":8,
            "name":"Lasso"
        }],
        "armor": 6,
        "discipline": 12,
        "talents": ["Leader","Strong-arm","Die Hard","Tough","Steadfast"],
        "abilities":{
            "endurance": 10
        }
    },
    "gender": "M",
    "value": 39,
    "race": "Kandoran"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction": "Kandoran Deathmasters",
    "name": "Oppressor",
    "displayName": "Oppressor",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Spikedrakh"
        }],
        "range": [{
            "rating":8,
            "name":"Lasso"
        }],
        "armor": 6,
        "discipline": 10,
        "talents": ["Strong-arm","Die Hard","Tough","Steadfast","Ally[Independent]"],
        "abilities":{
            "endurance": 10
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Kandoran"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Jackal-Priest",
    "displayName": "Jackal-Priest",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Necromancy","Deathshaper","Deathbinder"],
        "casting":{
            "rating":10,
            "power":15
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Kandoran"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Krayech's Reaper",
    "displayName": "Krayech's Reaper",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Scythe"
        }],
        "armor": 6,
        "discipline": 10,
        "talents": ["Undead","Hardened","Tough","Protector","Slow"]
    },
    "gender": "M",
    "value": 30,
    "race": "Kandoran"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Awakened",
    "displayName": "Awakened",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 8,
            "damage": 8,
            "name": "Claw 2x",
            "abilities": ["dec"]
        }],
        "armor": 5,
        "discipline": 8,
        "talents": ["Undead","Hardened","Tough","Slow","Fearsome"]
    },
    "gender": "M",
    "value": 29,
    "race": "Kandoran"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Levy Spearman",
    "displayName": "Levy Spearman",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 5,
        "melee": [{
            "rating": 6,
            "name": "Longspear"
        }],
        "range":[{
            "rating":6,
            "name":"Bow"
        }],
        "shield": "P",
        "armor": 4,
        "discipline": 4
    },
    "gender": "M",
    "value": 13,
    "race": "Kandoran"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Wretch",
    "displayName": "Wretch",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "damage": 6,
            "name": "Claw"
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Infiltrate","Scavenger"]
    },
    "gender": "M",
    "value": 8,
    "race": "Kandoran"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction":"Kandoran Deathmasters",
    "name": "Wretch",
    "displayName": "Wretch",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "damage": 6,
            "name": "Claw"
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Infiltrate","Scavenger","Ally[Independent]"]
    },
    "gender": "M",
    "value": 8,
    "race": "Kandoran"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Shambler",
    "displayName": "Shambler",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 5,
        "melee": [{
            "rating": 4,
            "damage": 4,
            "name": "Claw"
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Undead","Slow","Mindless","Expendable","Pack Attack","Feral"],
        "veteran": [{
            "name": "Claw gains dec",
            "cost": 1
        }]
    },
    "gender": "M",
    "value": 6,
    "race": "Kandoran"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Bonethrall",
    "displayName": "Bonethrall",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 5,
        "melee": [{
            "rating": 4,
            "damage": 6,
            "name": "Rusty Blade"
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Undead","Die Hard","Slow"],
        "abilities":{
            "endurance":8
        }
    },
    "gender": "M",
    "value": 10,
    "race": "Kandoran"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Bonethrall Guard",
    "displayName": "Bonethrall Guard",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 5,
        "melee": [{
            "rating": 8,
            "damage": 6,
            "name": "Rusty Blade"
        }],
        "shield": "S",
        "armor": 2,
        "discipline": 4,
        "talents": ["Undead","Die Hard","Slow"],
        "abilities":{
            "endurance":8
        }
    },
    "gender": "M",
    "value": 14,
    "race": "Kandoran"
},{
    "factions": ["Shakrim Wavestalkers"],
    "name": "Steel Fang",
    "displayName": "Steel Fang",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 12,
            "name": "Razorfang"
        }],
        "armor": 5,
        "discipline": 12,
        "talents": ["Leader","Parry","Dodge","Sidestep","Awareness","Backstep","Slither"],
        "abilities":{
            "agility":10
        }
    },
    "gender": "F",
    "value": 39,
    "race": "Shakrim"
},{
    "factions": ["Shakrim Wavestalkers"],
    "name": "Nerodix",
    "displayName": "Nerodix",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Water Magic","Amphibious","Immune[Poison]","Water Bond"],
        "casting":{
            "power":15,
            "rating":10
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Shakrim"
},{
    "factions": ["Shakrim Wavestalkers"],
    "name": "Shellback",
    "displayName": "Shellback",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "damageBonus":1,
            "name": "Heavy Falchion"
        }],
        "armor": 6,
        "discipline": 10,
        "talents": ["Parry","Tough","Hardened","Tenacious","Amphibious"],
        "abilities":{
            "strength":10
        }
    },
    "gender": "M",
    "value": 30,
    "race": "Shakrim"
},{
    "factions": ["Shakrim Wavestalkers"],
    "name": "Viperon",
    "displayName": "Viperon",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 8,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Bite",
            "abilities":["ven"]
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Dodge","Slither","Hit and Run","Fast","Animal"],
        "abilities":{
            "agility":12
        }
    },
    "gender": "M",
    "value": 28,
    "race": "Shakrim"
},{
    "factions": ["Shakrim Wavestalkers"],
    "name": "Tilik",
    "displayName": "Tilik",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 8,
        "melee": [{
            "rating": 6,
            "damage": 6,
            "name": "Bite"
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Animal","Elusive","Fast","Amphibious"]
    },
    "gender": "M",
    "value": 9,
    "race": "Shakrim"
},{
    "factions": ["Shakrim Wavestalkers"],
    "name": "Spitter",
    "displayName": "Spitter",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "damage": 6,
            "name": "Bite",
            "abilities":["ven"]
        }],
        "range":[{
            "rating":8,
            "damage":4,
            "name":"Poison Spit",
            "distance":4,
            "abilities":["ven"]
        }],
        "armor": 3,
        "discipline": 6,
        "talents": ["Amphibious"]
    },
    "gender": "M",
    "value": 13,
    "race": "Shakrim"
},{
    "factions": ["Eclipse Sisterhood"],
    "name": "Battle Sister",
    "displayName": "Battle Sister",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "shield":"L",
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry"],
        "abilities":{
            "strength":10
        },
        "veteran": [{
            "name": "Fortress",
            "cost": 1
        },{
            "name": "Raven Stance",
            "cost": 1
        }]
    },
    "gender": "F",
    "value": 28,
    "race": "Chaler"
},{
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Wildwing",
    "displayName": "Wildwing",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Dagger"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Dodge","Cunning","Outperform","Protected","Perform[Wing Dances,5]","Ally[Trusted]"],
        "abilities":{
            "agility":12
        },
        "skills": [{
            "name":"Perform",
            "rating":10
        }]
    },
    "gender": "F",
    "value": 31,
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Wildwing",
    "displayName": "Wildwing",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Dagger"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Dodge","Cunning","Outperform","Protected","Perform[Wing Dances,5]","Ally[Trusted]"],
        "abilities":{
            "agility":12
        },
        "skills": [{
            "name":"Perform",
            "rating":10
        }]
    },
    "gender": "F",
    "value": 31,
    "race": "Faeler"
},{
    "factions": ["Demons of Karelon"],
    "name": "Zarfonax",
    "displayName": "Zarfonax",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 0,
        "melee": [{
            "rating": 8,
            "damage": 8,
            "name": "Claw"
        }],
        "range":[{
            "rating": 10,
            "damage": 8,
            "name": "Water Blast",
            "distance":10,
            "abilities":["mag","aoe 2in"]
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Dodge","Marksman","Phase Shift","Phase Shift","Phase Shift","Phase Shift","Phase Shift","Phase Shift","Amphibious","Demon"],
        "abilities":{
            "agility":12,
            "spirit":10
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Demon"
},{
    "factions": ["Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction":"Demons of Karelon",
    "name": "Zarfonax",
    "displayName": "Zarfonax",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 0,
        "melee": [{
            "rating": 8,
            "damage": 8,
            "name": "Claw"
        }],
        "range":[{
            "rating": 10,
            "damage": 8,
            "name": "Water Blast",
            "distance":10,
            "abilities":["mag","aoe 2in"]
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Dodge","Marksman","Phase Shift","Phase Shift","Phase Shift","Phase Shift","Phase Shift","Phase Shift","Amphibious","Demon","Ally[Independent]"],
        "abilities":{
            "agility":12,
            "spirit":10
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Demon"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Varazyr",
    "displayName": "Varazyr",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "damage": 6,
            "name": "Skull Staff",
            "abilities":["te","mag"]
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Necromancy","Skull Staff"],
        "casting": {
            "power": 15,
            "rating": 10
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Kandoran"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction":"Kandoran Deathmasters",
    "name": "Varazyr",
    "displayName": "Varazyr",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "damage": 6,
            "name": "Skull Staff",
            "abilities":["te","mag"]
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Necromancy","Skull Staff","Ally[Independent]"],
        "casting": {
            "power": 15,
            "rating": 10
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Kandoran"
},{
    "factions": ["Ravenblade Mercenaries"],
    "name": "Stalker",
    "displayName": "Stalker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "range":[{
            "rating":12,
            "name":"Longbow"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Dodge","Scout","Sharpshooter","Shoot Them!","Subdue","Quarry","Arboreal"],
        "abilities":{
            "agility":10
        }
    },
    "gender": "M",
    "value": 34,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Stalker",
    "displayName": "Stalker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "range":[{
            "rating":12,
            "name":"Longbow"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Dodge","Scout","Sharpshooter","Shoot Them!","Subdue","Quarry","Arboreal","Ally[Independent]"],
        "abilities":{
            "agility":10
        }
    },
    "gender": "M",
    "value": 34,
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "primaryFaction":"Wandering Allies",
    "name": "Stalker",
    "displayName": "Stalker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "range":[{
            "rating":12,
            "name":"Longbow"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Dodge","Scout","Sharpshooter","Shoot Them!","Subdue","Quarry","Arboreal","Ally[Trusted]"],
        "abilities":{
            "agility":10
        }
    },
    "gender": "M",
    "value": 34,
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "primaryFaction":"Ravenblade Mercenaries",
    "name": "Stalker",
    "displayName": "Stalker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "range":[{
            "rating":12,
            "name":"Longbow"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Dodge","Scout","Sharpshooter","Shoot Them!","Subdue","Quarry","Arboreal","Ally[Trusted]"],
        "abilities":{
            "agility":10
        }
    },
    "gender": "M",
    "value": 34,
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "primaryFaction":"Ravenblade Mercenaries",
    "name": "Stalker",
    "displayName": "Stalker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "range":[{
            "rating":12,
            "name":"Longbow"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Dodge","Scout","Sharpshooter","Shoot Them!","Subdue","Quarry","Arboreal","Ally[Independent]"],
        "abilities":{
            "agility":10
        }
    },
    "gender": "M",
    "value": 34,
    "race": "Faeler"
},{
    "factions": ["Shakrim Wavestalkers"],
    "name": "Ghora",
    "displayName": "Ghora",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 8,
            "name": "Cutlass"
        }],
        "armor": 4,
        "discipline": 6,
        "talents": ["Amphibious"]
    },
    "gender": "M",
    "value": 10,
    "race": "Shakrim"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Kandoran Deathmasters","Traazorite Crusaders"],
    "primaryFaction":"Shakrim Wavestalkers",
    "name": "Ghora",
    "displayName": "Ghora",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 8,
            "name": "Cutlass"
        }],
        "armor": 4,
        "discipline": 6,
        "talents": ["Amphibious","Ally[Independent]"]
    },
    "gender": "M",
    "value": 10,
    "race": "Shakrim"
},{
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Ravenblade Mercenaries"],
    "name": "Ravenblade Lieutenant",
    "displayName": "Ravenblade Lieutenant",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 12,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 5,
        "discipline": 12,
        "talents": ["Leader","Parry","Parry","Bold","Deflect","Deft","Shield Bash"],
        "abilities": {
            "dexterity": 10
        }
    },
    "gender": "F",
    "value": 39,
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Perakkir",
    "displayName": "Perakkir (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "range": [{
            "rating": 10,
            "name": "Composite Bow"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Scout","Harasser","Fly[Low,SPD 10]","Light Cavalry","Calvary"],
        "abilities": {
            "agility": 10,
            "dexterity": 10
        }
    },
    "gender": "M",
    "value": 38,
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Perakkir",
    "displayName": "Perakkir (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "range": [{
            "rating": 10,
            "name": "Composite Bow"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Scout","Harasser","Fly[Low,SPD 10]","Light Cavalry","Calvary","Ally[Independent]"],
        "abilities": {
            "agility": 10,
            "dexterity": 10
        }
    },
    "gender": "M",
    "value": 38,
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "name": "Perakkir Scout",
    "displayName": "Perakkir Scout",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "range": [{
            "rating": 10,
            "name": "Composite Bow"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Parry","Elusive","Scout","Harasser","Wayfinder"],
        "abilities": {
            "dexterity": 10
        }
    },
    "gender": "M",
    "value": 33,
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction":"Falkaaran Adventurers",
    "name": "Perakkir Scout",
    "displayName": "Perakkir Scout",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "range": [{
            "rating": 10,
            "name": "Composite Bow"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Parry","Elusive","Scout","Harasser","Wayfinder","Ally[Independent]"],
        "abilities": {
            "dexterity": 10
        }
    },
    "gender": "M",
    "value": 33,
    "race": "Faeler"
},{
    "factions": ["The Collective","Ravenblade Mercenaries"],
    "name": "Ravenblade Soldier",
    "displayName": "Ravenblade Soldier",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 5,
        "discipline": 12,
        "talents": ["Parry","Parry","Deflect","Shield Bash"],
        "veteran": [{
            "name": "Sergeant[Faeler Swordsman]",
            "cost": 2
        }]
    },
    "gender": "M",
    "value": 28,
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Haradelan Questers"],
    "primaryFaction":"Ravenblade Mercenaries",
    "name": "Ravenblade Soldier",
    "displayName": "Ravenblade Soldier",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 5,
        "discipline": 12,
        "talents": ["Parry","Parry","Deflect","Shield Bash","Ally[Trusted]"],
        "veteran": [{
            "name": "Sergeant[Faeler Swordsman]",
            "cost": 2
        }]
    },
    "gender": "M",
    "value": 28,
    "race": "Faeler"
},{
    "factions": ["Trilian Seekers"],
    "name": "Talsytar",
    "displayName": "Talsytar (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "rating": 10,
            "name": "Toloron"
        },{
            "rating":8,
            "damage":6,
            "name":"Warhorse"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Cavalry","Fly[Low,SPD 10]","Parry","Parry","Assault","Missle Parry","Warhorse"],
        "abilities": {
            "agility":10,
            "dexterity":10
        }
    },
    "gender": "M",
    "value": 46,
    "race": "Trillian"
},{
    "factions": ["Trilian Seekers"],
    "name": "Talsytar",
    "displayName": "Talsytar (Dismounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "rating": 10,
            "name": "Toloron"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Parry","Parry","Assault","Missle Parry"],
        "abilities": {
            "agility":10,
            "dexterity":10
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Trillian"
},{
    "factions": ["Urdaggar Tribes of Ruin", "Urdaggar Tribes of Valor"],
    "name": "Kaorl",
    "displayName": "Kaorl",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "War Axe"
        }],
        "shield": "S",
        "armor": 2,
        "discipline": 6,
        "talents": ["Kinship"],
        "veteran": [{
            "name": "RW:6|War Axe",
            "cost": 3
        }]
    },
    "gender": "M",
    "value": 9,
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction":"Urdaggar Tribes of Valor",
    "name": "Kaorl",
    "displayName": "Kaorl",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "War Axe"
        }],
        "shield": "S",
        "armor": 2,
        "discipline": 6,
        "talents": ["Kinship","Ally[Independent]"],
        "veteran": [{
            "name": "RW:6|War Axe",
            "cost": 3
        }]
    },
    "gender": "M",
    "value": 9,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective"],
    "name": "Freebooter",
    "displayName": "Freebooter",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Boarding Pike"
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Deflect","Dodge","Dodge","Agile Charge","Tough","Amphibious"],
        "abilities": {
            "agility":12,
            "dexterity":10
        }
    },
    "gender": "M",
    "value": 29,
    "race": "Faeler"
},{
    "factions": ["Kandoran Deathmasters","Shakrim Wavestalkers"],
    "primaryFaction":"Black Rose Bandits",
    "name": "Freebooter",
    "displayName": "Freebooter",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Boarding Pike"
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Deflect","Dodge","Dodge","Agile Charge","Tough","Amphibious","Ally[Independent]"],
        "abilities": {
            "agility":12,
            "dexterity":10
        }
    },
    "gender": "M",
    "value": 29,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective"],
    "name": "Roughrider",
    "displayName": "Roughrider",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "rating": 8,
            "name": "Saber"
        }],
        "range": [{
            "rating":12,
            "name":"Bolas"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Deft Rider","Dodge","Harasser","Scout","Cavalry","Light Cavalry","Fast"],
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }],
        "abilities": {
            "agility":10
        }
    },
    "gender": "M",
    "value": 33,
    "race": "Faeler"
},{
    "factions": ["Darkgrove Demons", "Demons of Karelon"],
    "name": "Karyad",
    "displayName": "Karyad",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Claw"
        }],
        "armor": 3,
        "discipline": 12,
        "talents": ["Leader", "Vinespawn", "Regenerate", "Dodge", "Arboreal", "Demon", "Darkgrove Sorcery"],
        "casting": {
            "power": 15,
            "rating": 10
        },
        "abilities": {
            "agility":10
        }
    },
    "gender": "F",
    "value": 50,
    "race": "Demon"
},{
    "factions": ["Darkgrove Demons"],
    "name": "Ironbark",
    "displayName": "Ironbark",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Claw"
        }],
        "range": [{
            "rating":10,
            "damage":6,
            "distance":3,
            "name":"Thorny Vines",
            "abilities":["ent","thr"]
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Feint","Opportune Strike","Arboreal","Demon"],
        "abilities": {
            "agility":12,
            "strength":10
        }
    },
    "gender": "M",
    "value": 34,
    "race": "Demon"
},{
    "factions": ["Darkgrove Demons"],
    "name": "Razorthorne",
    "displayName": "Razorthorne",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Barbed Whip"
        }],
        "range": [{
            "rating":10,
            "damage":6,
            "distance":3,
            "name":"Thorny Vines",
            "abilities":["ent","thr"]
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Lash Attack","Arboreal","Demon"],
        "abilities": {
            "agility":12
        }
    },
    "gender": "F",
    "value": 31,
    "race": "Demon"
},{
    "factions": ["Darkgrove Demons"],
    "name": "Groveguard",
    "displayName": "Groveguard",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "damage": 8,
            "name": "Claw"
        }],
        "range": [{
            "rating":8,
            "damage":6,
            "distance":3,
            "name":"Thorny Vines",
            "abilities":["ent","thr"]
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Dodge","Scout","Pouncer","Sidestep","Arboreal","Demon"],
        "skills": [{
            "name":"Stealth",
            "rating":8
        }],
        "abilities": {
            "agility":12
        }
    },
    "gender": "F",
    "value": 30,
    "race": "Demon"
},{
    "factions": ["Darkgrove Demons"],
    "name": "Wildwood Encroacher",
    "displayName": "Wildwood Encroacher",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "damage": 8,
            "name": "Claw"
        }],
        "range": [{
            "rating":8,
            "damage":6,
            "distance":3,
            "name":"Thorny Vines",
            "abilities":["ent","thr"]
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Dodge","Infiltrate","Arboreal","Demon"],
        "abilities": {
            "agility":8
        }
    },
    "gender": "M",
    "value": 15,
    "race": "Demon"
},{
    "factions": ["Darkgrove Demons", "Demons of Karelon"],
    "name": "Vineling",
    "displayName": "Vineling",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 5,
        "melee": [{
            "rating": 4,
            "damage": 4,
            "name": "Thorn"
        }],
        "range": [{
            "rating":6,
            "damage":6,
            "distance":3,
            "name":"Thorny Vines",
            "abilities":["ent","thr"]
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Elusive","Harasser","Warbeast","Arboreal","Demon"]
    },
    "gender": "F",
    "value": 8,
    "race": "Demon"
},{
    "factions": ["Grular Invaders"],
    "name": "Pain Bringer",
    "displayName": "Pain Bringer",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Barbed Whip"
        }],
        "shield":"AN",
        "armor": 4,
        "discipline": 10,
        "talents": ["Sergeant[Bludgeoneers,Krang]", "Accurate Strike", "Tough", "Tough", "Strong-arm","Active Defense","Lash Attack"]
    },
    "gender": "M",
    "value": 30,
    "race": "Symker"
},{
    "factions": ["Haradelan Questers"],
    "name": "Kantor",
    "displayName": "Kantor",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Mace"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Varanic Rites: Kantor","Battle Hymn"],
        "casting": {
            "rating": 10,
            "power": 15
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction":"Haradelan Questers",
    "name": "Kantor",
    "displayName": "Kantor",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Mace"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Varanic Rites: Kantor","Battle Hymn","Ally[Independent]"],
        "casting": {
            "rating": 10,
            "power": 15
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Sword of Vidunar",
    "displayName": "Sword of Vidunar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Greatsword"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Parry","Champion[Kantor]","Active Defense","Confine","Contain","Protector"],
        "abilities": {
            "dexterity": 10
        }
    },
    "gender": "F",
    "value": 33,
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction":"Haradelan Questers",
    "name": "Sword of Vidunar",
    "displayName": "Sword of Vidunar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Greatsword"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Parry","Champion[Kantor]","Active Defense","Confine","Contain","Protector","Ally[Independent]"],
        "abilities": {
            "dexterity": 10
        }
    },
    "gender": "F",
    "value": 33,
    "race": "Faeler"
},{
    "factions": ["Koronnan Moonsworn"],
    "name": "Moons Priestess",
    "displayName": "Moons Priestess",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Moonsglave"
        }],
        "armor": 2,
        "discipline": 12,
        "talents": ["Leader","Moons Magic: Priestess", "Dodge","Hate[Traazorites]","Spelldancer","Spell Projector[Moons Priest]"],
        "casting": {
            "power":15,
            "rating":10
        },
        "abilities":{
            "agility":10
        }
    },
    "gender": "F",
    "value": 41,
    "race": "Koronnan"
},{
    "factions": ["Koronnan Moonsworn"],
    "name": "Moons Priestess",
    "displayName": "Moons Priestess",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Moonsglave"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Moons Magic: Priestess", "Dodge","Hate[Traazorites]","Spelldancer","Spell Projector[Moons Priest]"],
        "casting": {
            "power":15,
            "rating":10
        },
        "abilities":{
            "agility":10
        }
    },
    "gender": "F",
    "value": 35,
    "race": "Koronnan"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Koronnan Moonsworn",
    "name": "Moons Priestess",
    "displayName": "Moons Priestess",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Moonsglave"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Moons Magic: Priestess", "Dodge","Hate[Traazorites]","Spelldancer","Spell Projector[Moons Priest]","Ally[Independent]"],
        "casting": {
            "power":15,
            "rating":10
        },
        "abilities":{
            "agility":10
        }
    },
    "gender": "F",
    "value": 35,
    "race": "Koronnan"
},{
    "factions": ["Koronnan Moonsworn"],
    "name": "Moons Priest",
    "displayName": "Moons Priest",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Moonsglave"
        }],
        "armor": 2,
        "discipline": 12,
        "talents": ["Leader","Moons Magic: Priest", "Dodge","Hate[Traazorites]","Spelldancer","Spell Projector[Moons Priestess]"],
        "casting": {
            "power":15,
            "rating":10
        },
        "abilities":{
            "agility":10
        }
    },
    "gender": "M",
    "value": 41,
    "race": "Koronnan"
},{
    "factions": ["Koronnan Moonsworn"],
    "name": "Moons Priest",
    "displayName": "Moons Priest",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Moonsglave"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Moons Magic: Priest", "Dodge","Hate[Traazorites]","Spelldancer","Spell Projector[Moons Priestess]"],
        "casting": {
            "power":15,
            "rating":10
        },
        "abilities":{
            "agility":10
        }
    },
    "gender": "M",
    "value": 35,
    "race": "Koronnan"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Koronnan Moonsworn",
    "name": "Moons Priest",
    "displayName": "Moons Priest",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Moonsglave"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Moons Magic: Priest", "Dodge","Hate[Traazorites]","Spelldancer","Spell Projector[Moons Priestess]", "Ally[Independent]"],
        "casting": {
            "power":15,
            "rating":10
        },
        "abilities":{
            "agility":10
        }
    },
    "gender": "M",
    "value": 35,
    "race": "Koronnan"
},{
    "factions": ["Koronnan Moonsworn"],
    "name": "Koronnan Bladebrother",
    "displayName": "Koronnan Bladebrother",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Saber"
        }],
        "shield":"S",
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Parry","Sidestep","Replace","Teammate[Bladesister]"]
    },
    "gender": "M",
    "value": 28,
    "race": "Koronnan"
},{
    "factions": ["Eclipse Sisterhood","Koronnan Moonsworn"],
    "primaryFaction":"Koronnan Moonsworn",
    "name": "Koronnan Bladebrother",
    "displayName": "Koronnan Bladebrother",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Saber"
        }],
        "shield":"S",
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Parry","Sidestep","Replace","Teammate[Bladesister]","Ally[Independent]"]
    },
    "gender": "M",
    "value": 28,
    "race": "Koronnan"
},{
    "factions": ["Koronnan Moonsworn"],
    "name": "Koronnan Bladesister",
    "displayName": "Koronnan Bladesister",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Saber"
        }],
        "shield":"S",
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Sidestep","Replace","Raven Stance","Hate[Traazorites]","Bladeflash","Teammate[Bladebrother]"]
    },
    "gender": "F",
    "value": 28,
    "race": "Koronnan"
},{
    "factions": ["Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction":"Koronnan Moonsworn",
    "name": "Koronnan Bladesister",
    "displayName": "Koronnan Bladesister",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Saber"
        }],
        "shield":"S",
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Sidestep","Replace","Raven Stance","Hate[Traazorites]","Bladeflash","Teammate[Bladebrother]","Ally[Independent]"]
    },
    "gender": "F",
    "value": 28,
    "race": "Koronnan"
},{
    "factions": ["Koronnan Moonsworn"],
    "name": "Koromen's Shadow",
    "displayName": "Koromen's Shadow",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Moonsickle"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Flurry","Weaponeer","Sidestep","Shadow","Hate[Traazorites]"],
        "abilities":{
            "agility":12
        }
    },
    "gender": "M",
    "value": 27,
    "race": "Koronnan"
},{
    "factions": ["Eclipse Sisterhood","Haradelan Questers","Mershael Corsairs","Ravenblade Mercenaries"],
    "primaryFaction":"Koronnan Moonsworn",
    "name": "Koromen's Shadow",
    "displayName": "Koromen's Shadow",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Moonsickle"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Flurry","Weaponeer","Sidestep","Shadow","Hate[Traazorites]","Ally[Independent]"],
        "abilities":{
            "agility":12
        }
    },
    "gender": "M",
    "value": 27,
    "race": "Koronnan"
},{
    "factions": ["Koronnan Moonsworn"],
    "name": "Black Spear",
    "displayName": "Black Spear",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 12,
            "name": "Longspear"
        }],
        "shield":"L",
        "armor": 6,
        "discipline": 10,
        "talents": ["Shield Bash","Shield Parry","Protector"]
    },
    "gender": "M",
    "value": 28,
    "race": "Koronnan"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Koronnan Moonsworn",
    "name": "Black Spear",
    "displayName": "Black Spear",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 12,
            "name": "Longspear"
        }],
        "shield":"L",
        "armor": 6,
        "discipline": 10,
        "talents": ["Shield Bash","Shield Parry","Protector","Ally[Independent]"]
    },
    "gender": "M",
    "value": 28,
    "race": "Koronnan"
},{
    "factions": ["Koronnan Moonsworn"],
    "name": "Red Archer",
    "displayName": "Red Archer",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Saber"
        }],
        "range":[{
            "rating":6,
            "name":"Bow"
        }],
        "shield":"AS",
        "armor": 4,
        "discipline": 6,
        "talents": ["Hate[Traazorites]"],
        "veteran": [{
            "name": "Teammate[Red Spear]",
            "cost": 1
        },{
            "name": "Shieldmate",
            "cost": 1
        }]
    },
    "gender": "M",
    "value": 12,
    "race": "Koronnan"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Koronnan Moonsworn",
    "name": "Red Archer",
    "displayName": "Red Archer",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Saber"
        }],
        "range":[{
            "rating":6,
            "name":"Bow"
        }],
        "shield":"AS",
        "armor": 4,
        "discipline": 6,
        "talents": ["Hate[Traazorites]","Ally[Independent]"],
        "veteran": [{
            "name": "Teammate[Red Spear]",
            "cost": 1
        },{
            "name": "Shieldmate",
            "cost": 1
        }]
    },
    "gender": "M",
    "value": 12,
    "race": "Koronnan"
},{
    "factions": ["Koronnan Moonsworn"],
    "name": "Red Spear",
    "displayName": "Red Spear",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Longspear"
        }],
        "shield":"S",
        "armor": 4,
        "discipline": 6,
        "veteran": [{
            "name": "MAR",
            "cost": 1
        },{
            "name": "Shieldmate",
            "cost": 1
        }]
    },
    "gender": "M",
    "value": 12,
    "race": "Koronnan"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Koronnan Moonsworn",
    "name": "Red Spear",
    "displayName": "Red Spear",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Longspear"
        }],
        "shield":"S",
        "armor": 4,
        "discipline": 6,
        "talents": ["Ally[Independent]"],
        "veteran": [{
            "name": "MAR",
            "cost": 1
        },{
            "name": "Shieldmate",
            "cost": 1
        }]
    },
    "gender": "M",
    "value": 12,
    "race": "Koronnan"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Lightbringer",
    "displayName": "Lightbringer",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Zeradrakh"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Die Hard","Alpine","Demonlore","Warden"],
        "abilities":{
            "agility":10,
            "endurance":10
        }
    },
    "gender": "M",
    "value": 33,
    "race": "Kuzaarik"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Lightbringer",
    "displayName": "Lightbringer",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Zeradrakh"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Die Hard","Alpine","Demonlore","Warden","Ally[Independent]"],
        "abilities":{
            "agility":10,
            "endurance":10
        }
    },
    "gender": "M",
    "value": 33,
    "race": "Kuzaarik"
},{
    "factions": ["Haradelan Questers"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Lightbringer",
    "displayName": "Lightbringer",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Zeradrakh"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Die Hard","Alpine","Demonlore","Warden","Ally[Independent]"],
        "abilities":{
            "agility":10,
            "endurance":10
        }
    },
    "gender": "M",
    "value": 33,
    "race": "Kuzaarik"
},{
    "factions": ["Falkaaran Adventurers"],
    "primaryFaction":"Kuzaarik Forgers",
    "name": "Lightbringer",
    "displayName": "Lightbringer (Shadow Hunter ally)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Zeradrakh"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Parry","Die Hard","Alpine","Demonlore","Warden","Ally[Trusted]"],
        "abilities":{
            "agility":10,
            "endurance":10
        }
    },
    "gender": "M",
    "value": 33,
    "race": "Kuzaarik"
},{
    "factions": ["Mershael Corsairs"],
    "name": "Riktokar",
    "displayName": "Riktokar (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 9,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "range":[{
            "rating":10,
            "name":"Tennko"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Cavalry","Dodge","Dodge","Crafty Dodge","Sidestep","Teammate[Riktokar]","Fast"],
        "abilities":{
            "agility":12
        }
    },
    "gender": "F",
    "value": 38,
    "race": "Faeler"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Mershael Corsairs",
    "name": "Riktokar",
    "displayName": "Riktokar (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 9,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "range":[{
            "rating":10,
            "name":"Tennko"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Cavalry","Dodge","Dodge","Crafty Dodge","Sidestep","Teammate[Riktokar]","Fast","Ally[Independent]"],
        "abilities":{
            "agility":12
        }
    },
    "gender": "F",
    "value": 38,
    "race": "Faeler"
},{
    "factions": ["Mershael Corsairs"],
    "name": "Riktokar",
    "displayName": "Riktokar (Dismounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "range":[{
            "rating":10,
            "name":"Tennko"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Crafty Dodge","Sidestep","Teammate[Riktokar]","Quick"],
        "abilities":{
            "agility":12
        }
    },
    "gender": "F",
    "value": 37,
    "race": "Faeler"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction":"Mershael Corsairs",
    "name": "Riktokar",
    "displayName": "Riktokar (Dismounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "range":[{
            "rating":10,
            "name":"Tennko"
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Crafty Dodge","Sidestep","Teammate[Riktokar]","Quick","Ally[Independent]"],
        "abilities":{
            "agility":12
        }
    },
    "gender": "F",
    "value": 37,
    "race": "Faeler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Pit Fighter",
    "displayName": "Pit Fighter",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Pit Glave"
        }],
        "shield":"B",
        "armor": 2,
        "discipline": 12,
        "talents": ["Dodge","Dodge","Tough","Steadfast"],
        "abilities":{
            "agility":12,
            "dexterity":10
        }
    },
    "gender": "M",
    "value": 30,
    "race": "Chaler"
},{
    "factions": ["The Collective"],
    "name": "Irvlor",
    "displayName": "Irvlor",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 12,
            "name": "Club"
        }],
        "armor": 4,
        "discipline": 12,
        "talents": ["Leader","Bribery","Die Hard","Merchant","Merchant","Peddler"],
        "abilities":{
            "endurance":12,
            "strength":10
        }
    },
    "gender": "M",
    "value": 36,
    "race": "Faeler"
},{
    "factions": ["The Collective"],
    "name": "Irvlor",
    "displayName": "Irvlor",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Club"
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Bribery","Die Hard","Merchant","Peddler"],
        "abilities":{
            "endurance":12,
            "strength":10
        }
    },
    "gender": "M",
    "value": 26,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Irvlor",
    "displayName": "Irvlor",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Club"
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Bribery","Die Hard","Merchant","Peddler","Ally[Independent]"],
        "abilities":{
            "endurance":12,
            "strength":10
        }
    },
    "gender": "M",
    "value": 26,
    "race": "Faeler"
},{
    "factions": ["The Collective"],
    "name": "Keldan",
    "displayName": "Keldan",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "damage": 4,
            "name": "Fist 2x"
        }],
        "armor": 4,
        "discipline": 12,
        "talents": ["Leader","Bribery","Die Hard","Merchant","Merchant","Recruiter"],
        "abilities":{
            "endurance":12,
            "strength":10
        }
    },
    "gender": "M",
    "value": 36,
    "race": "Faeler"
},{
    "factions": ["The Collective"],
    "name": "Keldan",
    "displayName": "Keldan",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 8,
            "damage": 4,
            "name": "Fist 2x"
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Bribery","Die Hard","Merchant","Recruiter"],
        "abilities":{
            "endurance":12,
            "strength":10
        }
    },
    "gender": "M",
    "value": 26,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Keldan",
    "displayName": "Keldan",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 8,
            "damage": 4,
            "name": "Fist 2x"
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Bribery","Die Hard","Merchant","Recruiter","Ally[Independent]"],
        "abilities":{
            "endurance":12,
            "strength":10
        }
    },
    "gender": "M",
    "value": 26,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits"],
    "name": "Sea Blade",
    "displayName": "Sea Blade",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Cutlass"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Parry", "Dodge", "Fient", "Elusive", "Accurate Strike", "Leaper", "Amphibious"],
        "skills": [{
            "name": "Thievery",
            "rating": 8
        }],
        "abilities": {
            "agility": 12
        }
    },
    "gender": "F",
    "value": 32,
    "race": "Faeler"
},{
    "factions": ["Kandoran Deathmasters","Shakrim Wavestalkers"],
    "primaryFaction":"Black Rose Bandits",
    "name": "Sea Blade",
    "displayName": "Sea Blade",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Cutlass"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Parry", "Dodge", "Fient", "Elusive", "Accurate Strike", "Leaper", "Amphibious","Ally[Independent]"],
        "skills": [{
            "name": "Thievery",
            "rating": 8
        }],
        "abilities": {
            "agility": 12
        }
    },
    "gender": "F",
    "value": 32,
    "race": "Faeler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Kurgozar",
    "displayName": "Kurgozar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Bite"
        },{
            "rating": 8,
            "damage": 8,
            "name": "Claw 2x"
        },{
            "rating": 8,
            "damage": 8,
            "name": "Tail",
            "abilities": ["ra","swp"]
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Die Hard","Die Hard","Fearsome","Large Target","Tenacious","Conquer","Impetuous","Scent of Prey","Tough","Tough","Warbeast"],
        "abilities": {
            "endurance":12,
            "strength":12
        }
    },
    "gender": "M",
    "value": 62,
    "race": "Beast"
},{
    "factions": ["Demons of Karelon"],
    "name": "Elivai",
    "displayName": "Elivai",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "damage": 8,
            "name": "Claw"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Perform[Siren Song,4]","Enhanced Disguise","Cunning","Dodge","Outperform","Voice on the Wind","Demon"],
        "abilities": {
            "agility":10,
            "spirit":10
        },
        "skills": [{
            "name": "Perform",
            "rating": 10
        }]
    },
    "gender": "F",
    "value": 37,
    "race": "Demon"
},{
    "factions": ["Demons of Karelon"],
    "name": "Elivai",
    "displayName": "Elivai",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "damage": 8,
            "name": "Claw"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Perform[Siren Song,4]","Enhanced Disguise","Cunning","Dodge","Outperform","Voice on the Wind","Demon"],
        "abilities": {
            "agility":10,
            "spirit":10
        },
        "skills": [{
            "name": "Perform",
            "rating": 10
        }]
    },
    "gender": "F",
    "value": 37,
    "race": "Demon"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Bonethrall Impaler",
    "displayName": "Bonethrall Impaler (Mounted)",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 8,
        "melee": [{
            "rating": 10,
            "name": "Impaler"
        }],
        "shield":"S",
        "armor": 2,
        "discipline": 8,
        "talents": ["Cavalry","Undead","Assault","Die Hard","Die Hard"],
        "abilities": {
            "endurance":12
        }
    },
    "gender": "M",
    "value": 37,
    "race": "Kandoran"
},{
    "factions": ["Koronnan Moonsworn"],
    "name": "Grey Veil",
    "displayName": "Grey Veil",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "rating": 8,
            "name": "Saber"
        }],
        "range": [{
            "rating":10,
            "name":"Recurved Short Bow"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Cavalry","Light Cavalry","Dodge","Scout","Harasser","Plnging Fire","Fast","Hate[Traazorites]"],
        "abilities": {
            "agility":10,
            "dexterity":10
        }
    },
    "gender": "M",
    "value": 33,
    "race": "Koronnan"
},{
    "factions": ["Eclipse Sisterhood","Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction":"Koronnan Moonsworn",
    "name": "Grey Veil",
    "displayName": "Grey Veil",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "rating": 8,
            "name": "Saber"
        }],
        "range": [{
            "rating":10,
            "name":"Recurved Short Bow"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Cavalry","Light Cavalry","Dodge","Scout","Harasser","Plnging Fire","Fast","Hate[Traazorites]","Ally[Independent]"],
        "abilities": {
            "agility":10,
            "dexterity":10
        }
    },
    "gender": "M",
    "value": 33,
    "race": "Koronnan"
},{
    "factions": ["Ravenblade Mercenaries"],
    "name": "Sho'pel",
    "displayName": "Sho'pel",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Cleaver"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Perform[Ravensong,5]","Protected","Dodge","Cunning","Bonded[Ravenblade Lt.]","Outperform"],
        "abilities": {
            "agility":12
        },
        "skills": [{
            "name":"Perform",
            "rating":12
        }]
    },
    "gender": "M",
    "value": 36,
    "race": "Faeler"
},{
    "factions": ["Ravenblade Mercenaries"],
    "name": "Sho'pel",
    "displayName": "Sho'pel",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Cleaver"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Perform[Ravensong,5]","Protected","Dodge","Cunning","Bonded[Ravenblade Lt.]","Outperform"],
        "abilities": {
            "agility":12
        },
        "skills": [{
            "name":"Perform",
            "rating":12
        }]
    },
    "gender": "M",
    "value": 36,
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Haradelan Questers"],
    "primaryFaction":"Ravenblade Mercenaries",
    "name": "Sho'pel",
    "displayName": "Sho'pel",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Cleaver"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Perform[Ravensong,5]","Protected","Dodge","Cunning","Bonded[Ravenblade Lt.]","Outperform","Ally[Trusted]"],
        "abilities": {
            "agility":12
        },
        "skills": [{
            "name":"Perform",
            "rating":12
        }]
    },
    "gender": "M",
    "value": 36,
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Haradelan Questers"],
    "primaryFaction":"Ravenblade Mercenaries",
    "name": "Sho'pel",
    "displayName": "Sho'pel",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Cleaver"
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Perform[Ravensong,5]","Protected","Dodge","Cunning","Bonded[Ravenblade Lt.]","Outperform","Ally[Trusted]"],
        "abilities": {
            "agility":12
        },
        "skills": [{
            "name":"Perform",
            "rating":12
        }]
    },
    "gender": "M",
    "value": 36,
    "race": "Faeler"
},{
    "factions": ["Shakrim Wavestalkers"],
    "name": "Trasilisk",
    "displayName": "Trasilisk",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Cutlass"
        },{
            "rating": 8,
            "damage": 6,
            "name": "Claw 2x"
        }],
        "range": [{
            "rating": 10,
            "name": "Atlatl"
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Scout","Pathfinder","Accurate Shot","Block"]
    },
    "gender": "M",
    "value": 33,
    "race": "Shakrim"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Kandoran Deathmasters","Traazorite Crusaders"],
    "primaryFaction":"Shakrim Wavestalkers",
    "name": "Trasilisk",
    "displayName": "Trasilisk",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Cutlass"
        },{
            "rating": 8,
            "damage": 6,
            "name": "Claw 2x"
        }],
        "range": [{
            "rating": 10,
            "name": "Atlatl"
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Scout","Pathfinder","Accurate Shot","Block","Ally[Independent]"]
    },
    "gender": "M",
    "value": 33,
    "race": "Shakrim"
},{
    "factions": ["The Collective"],
    "name": "Tyrsan",
    "displayName": "Tyrsan",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "range": [{
            "rating":10,
            "name":"Hatchet"
        }],
        "armor": 3,
        "discipline": 8,
        "skills": [{
            "name": "Thievery",
            "rating":8
        },{
            "name": "Stealth",
            "rating":8
        }],
        "talents": ["Champion[Irvlor, Keldan]","Freerunner","Raven Stance","Dodge","Dodge"],
        "abilities": {
            "agility": 12,
            "dexterity": 10
        }
    },
    "gender": "M",
    "value": 35,
    "race": "Chaler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction":"Wandering Allies",
    "name": "Tyrsan",
    "displayName": "Tyrsan",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Sakhazet"
        }],
        "range": [{
            "rating":10,
            "name":"Hatchet"
        }],
        "armor": 3,
        "discipline": 8,
        "skills": [{
            "name": "Thievery",
            "rating":8
        },{
            "name": "Stealth",
            "rating":8
        }],
        "talents": ["Champion[Irvlor, Keldan]","Freerunner","Raven Stance","Dodge","Dodge","Ally[Independent]"],
        "abilities": {
            "agility": 12,
            "dexterity": 10
        }
    },
    "gender": "M",
    "value": 35,
    "race": "Chaler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Baeorl",
    "displayName": "Baeorl",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Claw 2x"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Die Hard","Fearsome","Hardended","Warbeast","Bear Hug","Bonded[Daughter of the Bear]","Protective[Daughter of the Bear]"],
        "abilities": {
            "endurance": 10
        }
    },
    "gender": "M",
    "value": 33,
    "race": "Beast"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction": "Urdaggar Tribes of Valor",
    "name": "Baeorl",
    "displayName": "Baeorl",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "damage": 8,
            "name": "Claw 2x"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Die Hard","Fearsome","Hardended","Warbeast","Bear Hug","Bonded[Daughter of the Bear]","Protective[Daughter of the Bear]","Ally[Independent]"],
        "abilities": {
            "endurance": 10
        }
    },
    "gender": "M",
    "value": 33,
    "race": "Beast"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Dire Rider",
    "displayName": "Dire Rider",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 8,
        "melee": [{
            "rating": 10,
            "name": "Wolfsword"
        },{
            "rating": 8,
            "damage": 8,
            "name": "Bite"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Fearsome","Fearless","Fast","Furious","Parry","Tough","Tough","Cavalry"],
        "skills":[{
            "name":"Hunt",
            "rating":8
        }],
        "abilities": {
            "strength": 10
        }
    },
    "gender": "M",
    "value": 43,
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction": "Urdaggar Tribes of Valor",
    "name": "Dire Rider",
    "displayName": "Dire Rider",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 8,
        "melee": [{
            "rating": 10,
            "name": "Wolfsword"
        },{
            "rating": 8,
            "damage": 8,
            "name": "Bite"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Fearsome","Fearless","Fast","Furious","Parry","Tough","Tough","Cavalry","Ally[Independent]"],
        "skills":[{
            "name":"Hunt",
            "rating":8
        }],
        "abilities": {
            "strength": 10
        }
    },
    "gender": "M",
    "value": 43,
    "race": "Faeler"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Eviscerator",
    "displayName": "Eviscerator",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Spikedrakh"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Killing Strike","Killing Strike"],
        "abilities": {
            "agility": 12,
            "dexterity": 10
        }
    },
    "gender": "M",
    "value": 29,
    "race": "Kandoran"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits","Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction": "Kandoran Deathmasters",
    "name": "Eviscerator",
    "displayName": "Eviscerator",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Spikedrakh"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Killing Strike","Killing Strike","Ally[Independent]"],
        "abilities": {
            "agility": 12,
            "dexterity": 10
        }
    },
    "gender": "M",
    "value": 29,
    "race": "Kandoran"
},{
    "factions": ["Shakrim Wavestalkers"],
    "name": "Kobrin",
    "displayName": "Kobrin",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "damage": 6,
            "name": "Bite",
            "abilities":["ven"]
        },{
            "rating": 6,
            "name": "Dagger"
        }],
        "range": [{
            "rating":6,
            "name":"Atlatl"
        }],
        "armor": 4,
        "discipline": 6,
        "talents": ["Slither","Scout","Limited"]
    },
    "gender": "F",
    "value": 17,
    "race": "Shakrim"
},{
    "factions": ["Mershael Corsairs"],
    "name": "Sea Ronin",
    "displayName": "Sea Ronin",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Parry","Dodge","Tachan","Backstep","Leaper","Amphibious","Quick"],
        "abilities":{
            "agility":12
        }
    },
    "gender": "F",
    "value": 32,
    "race": "Chaler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Koronnan Moonsworn"],
    "primaryFaction": "Mershael Corsairs",
    "name": "Sea Ronin",
    "displayName": "Sea Ronin",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Parry","Dodge","Tachan","Backstep","Leaper","Amphibious","Quick","Ally[Independent]"],
        "abilities":{
            "agility":12
        }
    },
    "gender": "F",
    "value": 32,
    "race": "Chaler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "name": "Daughter of the Bear",
    "displayName": "Daughter of the Bear",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "War Axe"
        },{
            "rating": 10,
            "name": "War Axe"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Die Hard","Die Hard","Hardened","Shield Hook"],
        "abilities":{
            "endurance":10
        }
    },
    "gender": "F",
    "value": 33,
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction": "Urdaggar Tribes of Valor",
    "name": "Daughter of the Bear",
    "displayName": "Daughter of the Bear",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "War Axe"
        },{
            "rating": 10,
            "name": "War Axe"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Die Hard","Die Hard","Hardened","Shield Hook","Ally[Independent]"],
        "abilities":{
            "endurance":10
        }
    },
    "gender": "F",
    "value": 33,
    "race": "Faeler"
},{
    "factions": ["Mershael Corsairs"],
    "name": "Deck Gunner",
    "displayName": "Deck Gunner",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "range": [{
            "rating":6,
            "name":"Bolter"
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Quick","Limited"]
    },
    "gender": "M",
    "value": 12,
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Viper Vanguard",
    "displayName": "Viper Vanguard",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Barbed Javelin"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Ambush","Leap Attack","Winged Serpent","Pouncer","Feint","Arboreal"],
        "skills":[{
            "name":"Stealth",
            "rating":8
        }],
        "abilities":{
            "agility":10
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Chaler"
},{
    "factions": ["Shakrim Wavestalkers"],
    "primaryFaction":"Traazorite Crusaders",
    "name": "Viper Vanguard",
    "displayName": "Viper Vanguard",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Barbed Javelin"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Ambush","Leap Attack","Winged Serpent","Pouncer","Feint","Arboreal","Ally[Independent]"],
        "skills":[{
            "name":"Stealth",
            "rating":8
        }],
        "abilities":{
            "agility":10
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "name": "Viper Scout",
    "displayName": "Viper Scout",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Barbed Javelin"
        }],
        "armor": 3,
        "discipline": 6,
        "talents": ["Scout","Nimble","Harassing","Companion","Arboreal","Limited"]
    },
    "gender": "M",
    "value": 14,
    "race": "Chaler"
},{
    "factions": ["Shakrim Wavestalkers"],
    "primaryFaction":"Traazorite Crusaders",
    "name": "Viper Scout",
    "displayName": "Viper Scout",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Barbed Javelin"
        }],
        "armor": 3,
        "discipline": 6,
        "talents": ["Scout","Nimble","Harassing","Companion","Arboreal","Limited","Ally[Independent]"]
    },
    "gender": "M",
    "value": 14,
    "race": "Chaler"
},{
    "factions": ["Urdaggar Tribes of Ruin", "Urdaggar Tribes of Valor"],
    "name": "Battle Maiden",
    "displayName": "Battle Maiden",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Short Sword"
        }],
        "shield":"S",
        "armor": 2,
        "discipline": 8,
        "talents": ["Frenzy"]
    },
    "gender": "F",
    "value": 11,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": "Wandering Allies",
    "name": "Tarch",
    "displayName": "Tarch",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Petadrakh"
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Wild Magic[d6 Cloak, Illusionary Blades, Mask]","Dodge","Dodge","Rash Magic","Tarch's Fate","Ally[Independent]"],
        "abilities": {
            "agility": 14
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Chaler"
},{
    "factions": ["Urdaggar Tribes of Ruin"],
    "name": "Dark Herald",
    "displayName": "Dark Herald",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 8,
            "name": "Staff"
        }],
        "casting": {
            "power": 15,
            "rating": 10
        },
        "armor": 2,
        "discipline": 12,
        "talents": ["Leader","Shoot Them!","Carrion Harvest","Dodge"]
    },
    "gender": "F",
    "value": 39,
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Ruin"],
    "name": "Vanquisher",
    "displayName": "Vanquisher",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "War Mattock"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Adamant","Bold","Bull Rush","Die Hard","Die Hard"],
        "abilities": {
            "endurance": 10,
            "strength": 10
        }
    },
    "gender": "M",
    "value": 30,
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Ruin"],
    "name": "Destroyer",
    "displayName": "Destroyer",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 12,
            "name": "War Mattock"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Adamant","Adamant","Fearless","Bull Rush","Die Hard","Die Hard"],
        "abilities": {
            "endurance": 10,
            "strength": 10
        }
    },
    "gender": "M",
    "value": 37,
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Ruin"],
    "name": "Predator",
    "displayName": "Predator",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "War Axe"
        }],
        "range": [{
            "rating": 8,
            "name": "War Axe"
        }],
        "shield": "S",
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Infiltrate","Scavenger","Alpha[War Jackal]","Pack Attack"],
        "abilities": {
            "agility": 12
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Ruin"],
    "name": "Tangler",
    "displayName": "Tangler",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 8,
            "damage": 8,
            "name": "Ripper",
            "abilities": ["let"]
        }],
        "range": [{
            "rating": 10,
            "name": "Spider Net"
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Elusive","Harasser","Parry","Precise Throw"],
        "abilities": {
            "dexterity": 10
        }
    },
    "gender": "F",
    "value": 27,
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Ruin"],
    "name": "Thralls",
    "displayName": "Thralls",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 5,
        "melee": [{
            "rating": 4,
            "name": "Short Spear"
        }],
        "shield": "S",
        "armor": 2,
        "discipline": 4,
        "talents": ["Fodder","Thralled","Unskilled"]
    },
    "gender": "F",
    "value": 5,
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Ruin"],
    "name": "War Jackal",
    "displayName": "War Jackal",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 8,
        "melee": [{
            "rating": 6,
            "damage": 6,
            "name": "Bite"
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Infiltrate","Pack Attack","Scavenger","Warbeast","Feral"]
    },
    "gender": "M",
    "value": 10,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits"],
    "name": "Forsworn",
    "displayName": "Forsworn",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 9,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 5,
        "discipline": 10,
        "talents": ["Calvary","Parry","Parry","Shield Bash"],
        "skills": [{
            "name": "Thievery",
            "rating": 8
        }],
        "abilities": {
            "dexterity": 10,
            "strength": 10
        }
    },
    "gender": "M",
    "value": 36,
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "High Questor of Valia",
    "displayName": "High Questor of Valia",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 12,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 6,
        "discipline": 12,
        "talents": ["Leader","Parry","Parry","Heroic Attack"],
        "abilities": {
            "strength": 10,
            "spirit": 10
        }
    },
    "gender": "F",
    "value": 39,
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "name": "Sword of Valia",
    "displayName": "Sword of Valia",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Longsword (1h)"
        }],
        "shield": "S",
        "armor": 6,
        "discipline": 10,
        "talents": ["Parry","Parry","Heroic Attack"],
        "abilities": {
            "strength": 10,
            "spirit": 10
        }
    },
    "gender": "F",
    "value": 32,
    "race": "Faeler"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Abductor",
    "displayName": "Abductor",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "rating": 10,
            "name": "Spikedrakh"
        }],
        "range": [{
            "rating": 10,
            "name": "Lasso"
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Calvary","Light Calvary","Harasser","Deft Rider","Subdue","Scout","Fast"],
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }]
    },
    "gender": "M",
    "value": 33,
    "race": "Kandoran"
},{
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction": "Kandoran Deathmasters",
    "name": "Abductor",
    "displayName": "Abductor",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "rating": 10,
            "name": "Spikedrakh"
        }],
        "range": [{
            "rating": 10,
            "name": "Lasso"
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Calvary","Light Calvary","Harasser","Deft Rider","Subdue","Scout","Fast","Ally[Independent]"],
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }]
    },
    "gender": "M",
    "value": 33,
    "race": "Kandoran"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction": "Kandoran Deathmasters",
    "name": "Scrounger",
    "displayName": "Scrounger",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "armor": 4,
        "discipline": 6,
        "talents": ["Infiltrate","Scrounge","Ally[Independent]"],
        "skills": [{
            "name": "Find",
            "rating": 8
        }]
    },
    "gender": "M",
    "value": 10,
    "race": "Kandoran"
},{
    "factions": ["Kandoran Deathmasters"],
    "name": "Scrounger",
    "displayName": "Scrounger",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "armor": 4,
        "discipline": 6,
        "talents": ["Infiltrate","Scrounge"],
        "skills": [{
            "name": "Find",
            "rating": 8
        }]
    },
    "gender": "M",
    "value": 10,
    "race": "Kandoran"
},{
    "factions": ["Koronnan Moonsworn"],
    "name": "Skirmisher",
    "displayName": "Skirmisher",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 8,
        "melee": [{
            "rating": 6,
            "name": "Javelin"
        }],
        "range": [{
            "rating": 6,
            "name": "Javelin"
        }],
        "armor": 4,
        "discipline": 6
    },
    "gender": "M",
    "value": 10,
    "race": "Kandoran"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Field Warden",
    "displayName": "Field Warden",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Hunting Spear"
        }],
        "range": [{
            "rating": 10,
            "name": "Composite Bow"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Die Hard","Scout","Confine","Contain","Wayfinder"],
        "abilities": {
            "endurance": 10
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Kuzaarik"
},{
    "factions": ["Kuzaarik Forgers"],
    "name": "Trapper",
    "displayName": "Trapper",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 5,
        "melee": [{
            "rating": 6,
            "name": "Hunting Spear"
        }],
        "armor": 3,
        "discipline": 6,
        "talents": ["Die Hard","Alpine","Limited"],
        "skills": [{
            "name": "Snares",
            "rating": 8
        }],
        "abilities": {
            "endurance": 8
        }
    },
    "gender": "M",
    "value": 14,
    "race": "Kuzaarik"
},{
    "factions": ["Ravenblade Mercenaries"],
    "name": "Executioner",
    "displayName": "Executioner",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Tavsetar"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Hardened","Parry","Parry"],
        "abilities": {
            "strength": 10
        }
    },
    "gender": "M",
    "value": 30,
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Haradelan Questers"],
    "primaryFaction": "Ravenblade Mercenaries",
    "name": "Executioner",
    "displayName": "Executioner",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "rating": 10,
            "name": "Tavsetar"
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Hardened","Parry","Parry","Ally[Independent]"],
        "abilities": {
            "strength": 10
        }
    },
    "gender": "M",
    "value": 30,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","The Collective","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": "Wandering Allies",
    "name": "Enshrouder",
    "displayName": "Enshrouder",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "casting": {
            "power": 15,
            "rating": 10
        },
        "armor": 2,
        "discipline": 8,
        "talents": ["Void Magic: Enshrouder","Cunning","Spellstrecher","Ally[Independent]"]
    },
    "gender": "M",
    "value": 31,
    "race": "Faeler"
}];

export  {Models};