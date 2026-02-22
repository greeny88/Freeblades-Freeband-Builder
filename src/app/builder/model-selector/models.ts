import { Model } from "src/app/model";

const Models: Model[] = [{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Kuzaarik Forgers", "Urdaggar Tribes of Valor"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
            "name": "Ice Magic",
            "rating": 10,
            "power": 15,
            "type": "energy"
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Kuzaarik"
},{
    "factions": ["Kuzaarik Forgers","Varkraalan Unchained"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Kuzaarik Forgers", "Urdaggar Tribes of Valor","Varkraalan Unchained"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Kuzaarik Forgers", "Urdaggar Tribes of Valor","Varkraalan Unchained"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction": ["Kuzaarik Forgers"],
    "name": "Quarreler",
    "displayName": "Quarreler",
    "stats": {
        "discipline": 6,
        "talents": ["Die Hard", "March", "Alpine","Limited"],
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
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor","Varkraalan Unchained"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor","Varkraalan Unchained"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Kuzaarik Forgers", "Urdaggar Tribes of Valor","Varkraalan Unchained"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Black Rose Bandits"],
    "primaryFaction": ["Black Rose Bandits"],
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
    "primaryFaction": ["Black Rose Bandits"],
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
            "name": "Moons Magic",
            "power": 15,
            "rating": 10,
            "type": "spirit"
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Black Rose Bandits"],
    "primaryFaction": ["Black Rose Bandits"],
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
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits"],
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
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits"],
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
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "Kandoran Deathmasters", "Shakrim Wavestalkers", "Traazorite Crusaders"],
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits", "Shakrim Wavestalkers"],
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
    "factions": ["Black Rose Bandits", "Black Thorn Bandits"],
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits"],
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
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits"],
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
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits"],
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
            "rating": 10
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
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective", "Kandoran Deathmasters","Shakrim Wavestalkers"],
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective"],
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
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective", "Ravenblade Mercenaries"],
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective", "Ravenblade Mercenaries"],
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
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective", "Falkaaran Adventurers", "Haradelan Questers", "Ravenblade Mercenaries", "Koronnan Moonsworn","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective", "Falkaaran Adventurers", "Haradelan Questers", "Ravenblade Mercenaries"],
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
    "factions": ["Black Rose Bandits", "Black Thorn Bandits"],
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits"],
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
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits"],
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
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits"],
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
    "primaryFaction": ["Black Thorn Bandits"],
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
    "factions": ["Azura Windborne","Black Thorn Bandits","Eclipse Sisterhood", "Mershael Corsairs"],
    "primaryFaction": ["Black Thorn Bandits","Mershael Corsairs"],
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
            "name": "Illusion Magic",
            "power": 15,
            "rating": 10,
            "type": "energy"
        }
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "primaryFaction": ["Traazorite Crusaders"],
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
    "primaryFaction": ["Traazorite Crusaders"],
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
    "primaryFaction": ["Traazorite Crusaders"],
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
            "name": "Sun Magic",
            "rating": 10,
            "power": 15,
            "type": "spirit"
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "primaryFaction": ["Traazorite Crusaders"],
    "name": "Bladebrother",
    "displayName": "Bladebrother",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry","Bladeflash"],
        "speed": 6,
        "melee": [{
            "rating": 10,
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
    "primaryFaction": ["Traazorite Crusaders"],
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
    "primaryFaction": ["Traazorite Crusaders"],
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
    "primaryFaction": ["Traazorite Crusaders"],
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
    "factions": ["Shakrim Wavestalkers", "Traazorite Crusaders"],
    "primaryFaction": ["Traazorite Crusaders"],
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
        "armor": 3
    },
    "type": "Standard",
    "value": 30,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "primaryFaction": ["Traazorite Crusaders"],
    "name": "Ravager",
    "displayName": "Daklos Ravager",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Cavalry","Fly[Low, SPD 10]","Dodge","Scout","Bull Rush","Swoop[Net]","Hit and Run","Fast"],
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
    "primaryFaction": ["Traazorite Crusaders"],
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
    "primaryFaction": ["Traazorite Crusaders"],
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
    "primaryFaction": ["Traazorite Crusaders"],
    "name": "Legionnaire Recruit",
    "displayName": "Legionnaire Recruit",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "rating": 6,
            "name": "Sakhazet"
        }],
        "range": [{
            "rating": 6,
            "name": "Gadoru"
        }],
        "armor": 4,
        "shield": "L"
    },
    "type": "Standard",
    "value": 17,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Traazorite Crusaders"],
    "primaryFaction": ["Traazorite Crusaders"],
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
    "primaryFaction": ["Traazorite Crusaders"],
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
    "primaryFaction": ["Mershael Corsairs"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood"],
    "primaryFaction": ["Mershael Corsairs"],
    "name": "Shaikan",
    "displayName": "Shaikan",
    "stats": {
        "abilities": {
            "agility": 12
        },
        "discipline": 10,
        "type": "Hero",
        "talents": ["Parry","Parry","Quick","Agile Charge"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Mershael Corsairs"],
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
            "name": "Ancestral Rites",
            "power": 15,
            "rating": 10,
            "type": "spirit"
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Mershael Corsairs"],
    "name": "Skytracer",
    "displayName": "Skytracer",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Celestial Magic: Skytracer","Spell Riposte","Quick"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "casting": {
            "name": "Celestial Magic: Skytracer",
            "power": 15,
            "rating": 10,
            "type": "spirit"
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Mershael Corsairs"],
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
        "armor": 5,
        "veteran": [{
            "name": "Sergeant[Seafarer,Deck Gunner]",
            "cost": 2
        }]
    },
    "type": "Standard",
    "value": 28,
    "gender": "M",
    "race": "Chaler"
},{
    "factions": ["Azura Windborne","Mershael Corsairs","Ravenblade Mercenaries","Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Mershael Corsairs","Ravenblade Mercenaries","Wandering Allies"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Mershael Corsairs"],
    "name": "Seafarer",
    "displayName": "Seafarer",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "talents": ["Amphibious","Quick"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Mershael Corsairs"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Mershael Corsairs"],
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
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Shakrim Wavestalkers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "trustedFactions": ["Black Rose Bandits","Black Thorn Bandits","Shakrim Wavestalkers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Wandering Allies"],
    "name": "Snake Mystic",
    "displayName": "Snake Mystic",
    "stats": {
        "discipline": 6,
        "type": "Hero",
        "talents": ["Serpent Magic","Slither","Serpent Dance"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Barbed Javelin"
        }],
        "casting": {
            "name": "Serpent Magic",
            "power": 15,
            "rating": 10,
            "type": "spirit"
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Azura Windborne","The Collective","Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["The Collective", "Wandering Allies"],
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
            "name": "Earth Magic",
            "power": 15,
            "rating": 10,
            "type": "energy"
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Azura Windborne","The Collective","Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["The Collective","Wandering Allies"],
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
    "factions": ["Demons of Karelon"],
    "primaryFaction": ["Demons of Karelon"],
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
    "factions": ["Darkgrove Demons","Demons of Karelon","Grular Invaders"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Demons of Karelon"],
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
            "name": "Sorcery: Illusion/Shadow",
            "power": 10,
            "rating": 8,
            "type": "sorcery"
        },
        "armor": 4
    },
    "type": "Caster",
    "value": 40,
    "gender": "M",
    "race": "Demon"
},{
    "factions": ["Darkgrove Demons","Demons of Karelon","Grular Invaders"],
    "primaryFaction": ["Demons of Karelon","Grular Invaders"],
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
    "factions": ["Darkgrove Demons","Demons of Karelon","Grular Invaders"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Demons of Karelon"],
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
    "factions": ["Darkgrove Demons","Demons of Karelon","Grular Invaders"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Demons of Karelon"],
    "name": "Ventarx",
    "displayName": "Ventarx",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "abilities": {
            "agility": 10,
            "spirit": 10
        },
        "talents": ["Fly[Low, SPD 10]","Hit and Run","Nimble","Nimble","Scout","Demon"],
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
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Darkgrove Demons","Demons of Karelon"],
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
    "factions": ["Darkgrove Demons","Demons of Karelon","Grular Invaders"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Demons of Karelon"],
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
    "factions": ["Darkgrove Demons","Demons of Karelon","Grular Invaders"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Demons of Karelon"],
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
    "factions": ["Darkgrove Demons","Demons of Karelon","Grular Invaders"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Demons of Karelon"],
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
    "factions": ["Darkgrove Demons","Demons of Karelon","Grular Invaders"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Demons of Karelon"],
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
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Darkgrove Demons", "Demons of Karelon"],
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
    "factions": ["Darkgrove Demons","Demons of Karelon","Grular Invaders"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Demons of Karelon"],
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
    "primaryFaction": ["Eclipse Sisterhood"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Eclipse Sisterhood"],
    "name": "Suneater",
    "displayName": "Suneater",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "talents": ["Void Magic","Spellblocker","Cunning"],
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "casting": {
            "name": "Void Magic",
            "power": 15,
            "rating": 10,
            "type": "energy"
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Eclipse Sisterhood"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Eclipse Sisterhood"],
    "name": "Secret Sister",
    "displayName": "Secret Sister",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Dodge","Ambush","Elusive","Enhanced Disguise","Opportune Strike","Freerunner"],
        "abilities": {
            "agility": 12
        },
        "veteran": [{
            "cost": 1,
            "name": "Bladedancer"
        }],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Ravenblade Mercenaries","Black Rose Bandits","Black Thorn Bandits","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Shakrim Wavestalkers","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Eclipse Sisterhood","Ravenblade Mercenaries","Wandering Allies"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Eclipse Sisterhood"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Eclipse Sisterhood"],
    "name": "Manslayer",
    "displayName": "Manslayer Sniper",
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Eclipse Sisterhood"],
    "name": "Manslayer",
    "displayName": "Manslayer Assassin",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Accurate Strike","Dodge","Dodge","Rapid Reload","Scout"],
        "abilities": {
            "agility": 12
        },
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Long Knife"
        }],
        "range": [{
            "rating": 10,
            "name": "Roondar"
        }],
        "armor": 2
    },
    "type": "Standard",
    "value": 34,
    "gender": "F",
    "race": "Chaler"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Eclipse Sisterhood"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Eclipse Sisterhood"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Eclipse Sisterhood"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Eclipse Sisterhood"],
    "name": "Untamed",
    "displayName": "Untamed",
    "stats": {
        "discipline": 4,
        "type": "Follower",
        "talents": ["Flurry"],
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
    "primaryFaction": ["Falkaaran Adventurers"],
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
    "primaryFaction": ["Falkaaran Adventurers"],
    "name": "Jendal Bladeseeker",
    "displayName": "Jendal Bladeseeker",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "talents": ["Active Defense","Parry","Parry","Swordcatcher","Counterattack","Missle Parry"],
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
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
            "name": "Fire Magic",
            "rating": 10,
            "power": 15,
            "type": "energy"
        },
        "armor": 2
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "primaryFaction": ["Falkaaran Adventurers"],
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
            "name": "Varanic Rites: Hunter",
            "rating": 10,
            "power": 15,
            "type": "spirit"
        },
        "armor": 4
    },
    "type": "Leader",
    "value": 39,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Kuzaarik Forgers","Ravenblade Mercenaries"],
    "primaryFaction": ["Falkaaran Adventurers"],
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
            "name": "Varanic Rites: Hunter",
            "rating": 10,
            "power": 15,
            "type": "spirit"
        },
        "armor": 4
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers"],
    "primaryFaction": ["Falkaaran Adventurers"],
    "name": "Jhenkar",
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
    "factions": ["Falkaaran Adventurers","Kuzaarik Forgers"],
    "primaryFaction":["Falkaaran Adventurers"],
    "name": "Jhenkar",
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
    "factions": ["Falkaaran Adventurers"],
    "primaryFaction":["Falkaaran Adventurers"],
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Ravenblade Mercenaries","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Falkaaran Adventurers"],
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Kuzaarik Forgers","Ravenblade Mercenaries"],
    "primaryFaction": ["Falkaaran Adventurers"],
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Kuzaarik Forgers","Ravenblade Mercenaries"],
    "primaryFaction": ["Falkaaran Adventurers"],
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Koronnan Moonsworn","Ravenblade Mercenaries"],
    "primaryFaction": ["Falkaaran Adventurers"],
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction": ["Falkaaran Adventurers"],
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Koronnan Moonsworn","Ravenblade Mercenaries"],
    "primaryFaction": ["Falkaaran Adventurers","Ravenblade Mercenaries"],
    "name": "Sailor",
    "displayName": "Sailor",
    "stats": {
        "discipline": 6,
        "type": "Follower",
        "speed": 7,
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction": ["Falkaaran Adventurers"],
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
    "factions": ["Grular Invaders"],
    "primaryFaction": ["Grular Invaders"],
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
        "armor": 5,
        "veteran": [{
            "cost": 2,
            "name": "Menace[2]"
        }]
    },
    "type": "Leader",
    "value": 39,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "primaryFaction": ["Grular Invaders"],
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
        "armor": 5,
        "veteran": [{
            "cost": 2,
            "name": "Menace[2]"
        }]
    },
    "type": "Leader",
    "value": 43,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "primaryFaction": ["Grular Invaders"],
    "name": "Kor-Khan",
    "displayName": "Kor-Khan (Dismounted)",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "speed": 6,
        "talents": ["Parry","Menace"],
        "melee": [{
            "rating": 10,
            "name": "Spikedrakh"
        },{
            "rating": 10,
            "name": "Morning Star"
        }],
        "armor": 5
    },
    "type": "Standard",
    "value": 30,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "primaryFaction": ["Grular Invaders"],
    "name": "Kor-Khan",
    "displayName": "Kor-Khan (Mounted)",
    "stats": {
        "discipline": 10,
        "type": "Hero",
        "speed": 9,
        "talents": ["Parry","Cavalry","Fast","Menace"],
        "melee": [{
            "rating": 10,
            "name": "Spikedrakh"
        },{
            "rating": 10,
            "name": "Morning Star"
        }],
        "armor": 5
    },
    "type": "Standard",
    "value": 34,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Demons of Karelon","Grular Invaders"],
    "primaryFaction": ["Grular Invaders"],
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
            "name": "Shadow Magic",
            "power": 15,
            "rating": 10,
            "type": "spirit"
        }
    },
    "type": "Caster",
    "value": 31,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Demons of Karelon","Grular Invaders"],
    "primaryFaction": ["Grular Invaders"],
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
            "name": "Shadow Magic",
            "power": 15,
            "rating": 10,
            "type": "spirit"
        }
    },
    "type": "Caster",
    "value": 35,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders","Demons of Karelon","Kandoran Deathmasters"],
    "primaryFaction": ["Grular Invaders"],
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
        },{
            "name": "Fleeting Target",
            "cost": 1
        }]
    },
    "type": "Standard",
    "value": 29,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders","Demons of Karelon","Kandoran Deathmasters"],
    "primaryFaction": ["Grular Invaders"],
    "name": "Marauder",
    "displayName": "Marauder (Dismounted)",
    "stats": {
        "discipline": 8,
        "type": "Hero",
        "speed": 6,
        "talents": ["Scout","Harasser","Elusive","Hard Target","Hard Target"],
        "abilities": {
            "agility": 10
        },
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
            "name": "Camouflage",
            "cost": 2,
            "rating": 8
        }]
    },
    "type": "Standard",
    "value": 28,
    "gender": "M",
    "race": "Symker"
},{
    "factions": ["Grular Invaders"],
    "primaryFaction": ["Grular Invaders"],
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
    "primaryFaction": ["Grular Invaders"],
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
    "primaryFaction": ["Grular Invaders"],
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
    "primaryFaction": ["Haradelan Questers"],
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
            "name": "AV1+",
            "cost": 2
        }]
    },
    "type": "Leader",
    "value": 39,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Haradelan Questers"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Haradelan Questers"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Haradelan Questers"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction": ["Haradelan Questers","Ravenblade Mercenaries"],
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
            "name": "Varanic Rites",
            "power": 15,
            "rating": 10,
            "type": "spirit"
        }
    },
    "value": 33,
    "gender": "M",
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Haradelan Questers","Koronnan Moonsworn","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["The Collective","Falkaaran Adventurers","Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction": ["The Collective","Haradelan Questers","Ravenblade Mercenaries"],
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
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
    "race": "Trilian"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
    "race": "Trilian"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
    "race": "Trilian"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
            "name": "Treespeaking",
            "power": 15,
            "rating": 10,
            "type": "spirit"
        }
    },
    "value": 32,
    "gender": "F",
    "race": "Trilian"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
            "name": "Celestial Magic",
            "power": 15,
            "rating": 10,
            "type": "energy"
        }
    },
    "value": 32,
    "gender": "M",
    "race": "Trilian"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
    "race": "Trilian"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
    "race": "Trilian"
},{
    "factions": ["Kuzaarik Forgers","Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
    "race": "Trilian"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
    "race": "Trilian"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
    "race": "Trilian"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
    "race": "Trilian"
},{
    "factions": ["Kuzaarik Forgers","Ravenblade Mercenaries","Trilian Seekers"],
    "primaryFaction": ["Ravenblade Mercenaries","Trilian Seekers"],
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
    "race": "Trilian"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
    "race": "Trilian"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
        "talents": ["Arboreal","Scout","Limited"],
        "veteran": [{
            "name": "RAR",
            "cost": 1
        },{
            "name": "Camouflage",
            "cost": 1
        }]
    },
    "value":16,
    "gender": "M",
    "race": "Trilian"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
        "talents": ["Parry","Fearsome","Battlecry"],
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
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
        "talents": ["Scout","Spotter","Parry","Deft","Backstep"],
        "abilities": {
            "agility": 10,
            "spirit": 10
        }
    },
    "value":32,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
            "name": "Bear Magic",
            "power":15,
            "rating":10,
            "type": "spirit"
        }
    },
    "value":31,
    "gender": "F",
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
    "factions": ["Falkaaran Adventurers","Kuzaarik Forgers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
    "factions": ["Koronnan Moonsworn","Ravenblade Mercenaries","Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Shakrim Wavestalkers","Trilian Seekers","Urdaggar Tribes of Valor","The Collective"],
    "primaryFaction": ["Koronnan Moonsworn","Ravenblade Mercenaries","Wandering Allies"],
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
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Ravenblade Mercenaries","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "trustedFactions": ["Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Ravenblade Mercenaries","Wandering Allies"],
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
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Trilian Seekers","Urdaggar Tribes of Valor","Varkraalan Unchained"],
    "trustedFactions": ["Kuzaarik Forgers"],
    "primaryFaction": ["Ravenblade Mercenaries","Wandering Allies","Varkraalan Unchained"],
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
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","The Collective","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "trustedFactions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["The Collective","Wandering Allies"],
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
        "performance": {
            "name": "Bardsong",
            "rating": 10
        }
    },
    "gender": "F",
    "value": 25,
    "race": "Faeler"
},{
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","The Collective","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "trustedFactions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["The Collective","Wandering Allies"],
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
        "performance": {
            "name": "Bardsong",
            "rating": 10
        }
    },
    "gender": "F",
    "value": 25,
    "race": "Faeler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Wandering Allies"],
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
        "talents": ["Parry","Bladeflash","Conquer","Taunt"]
    },
    "gender": "M",
    "value": 30,
    "race": "Chaler"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits"],
    "primaryFaction": ["Black Rose Bandits","Black Thorn Bandits"],
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
        "performance": {
            "name": "Bardsong",
            "rating": 10
        }
    },
    "gender": "F",
    "value": 33,
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor","Varkraalan Unchained"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
    "race": "Trilian"
},{
    "factions": ["Grular Invaders","Kandoran Deathmasters"],
    "primaryFaction": ["Grular Invaders"],
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
        },
        "veteran": [{
            "name": "Hard Target",
            "cost": 1
        }]
    },
    "gender": "M",
    "value": 32,
    "race": "Symker"
},{
    "factions": ["Grular Invaders","Kandoran Deathmasters"],
    "primaryFaction": ["Grular Invaders"],
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
        },
        "veteran": [{
            "name": "Hard Target",
            "cost": 1
        }]
    },
    "gender": "M",
    "value": 27,
    "race": "Symker"
},{
    "factions": ["Grular Invaders","Kandoran Deathmasters"],
    "primaryFaction": ["Grular Invaders"],
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
        "talents": ["Cavalry","Harasser","Light Cavalry","Elusive","Fast"],
        "veteran": [{
            "name": "Deft Rider",
            "cost": 1
        }]
    },
    "gender": "M",
    "value": 18,
    "race": "Symker"
},{
    "factions": ["Grular Invaders","Kandoran Deathmasters"],
    "primaryFaction": ["Grular Invaders"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Mershael Corsairs"],
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
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor","Varkraalan Unchained"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor","Varkraalan Unchained"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Shakrim Wavestalkers","Traazorite Crusaders"],
    "primaryFaction": ["Traazorite Crusaders"],
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
    "factions": ["Darkgrove Demons","Demons of Karelon","Grular Invaders"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Demons of Karelon"],
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
    "factions": ["Kandoran Deathmasters"],
    "primaryFaction": ["Kandoran Deathmasters"],
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
        "talents": ["Leader","Strong-arm","Die Hard","Steadfast"],
        "abilities":{
            "endurance": 10
        }
    },
    "gender": "M",
    "value": 39,
    "race": "Kandoran"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction": ["Kandoran Deathmasters"],
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
        "talents": ["Strong-arm","Die Hard","Steadfast"],
        "abilities":{
            "endurance": 10
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Kandoran"
},{
    "factions": ["Kandoran Deathmasters"],
    "primaryFaction": ["Kandoran Deathmasters"],
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
            "name": "Necromancy",
            "rating":10,
            "power":15,
            "type": "spirit"
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Kandoran"
},{
    "factions": ["Kandoran Deathmasters"],
    "primaryFaction": ["Kandoran Deathmasters"],
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
    "primaryFaction": ["Kandoran Deathmasters"],
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
    "primaryFaction": ["Kandoran Deathmasters"],
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
    "factions": ["Kandoran Deathmasters","Black Rose Bandits","Black Thorn Bandits","Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction": ["Kandoran Deathmasters"],
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
    "factions": ["Kandoran Deathmasters"],
    "primaryFaction": ["Kandoran Deathmasters"],
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
    "primaryFaction": ["Kandoran Deathmasters"],
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
    "primaryFaction": ["Kandoran Deathmasters"],
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
    "primaryFaction": ["Shakrim Wavestalkers"],
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
    "primaryFaction": ["Shakrim Wavestalkers"],
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
            "name": "Water Magic",
            "power":15,
            "rating":10,
            "type": "energy"
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Shakrim"
},{
    "factions": ["Shakrim Wavestalkers"],
    "primaryFaction": ["Shakrim Wavestalkers"],
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
    "primaryFaction": ["Shakrim Wavestalkers"],
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
    "primaryFaction": ["Shakrim Wavestalkers"],
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
    "primaryFaction": ["Shakrim Wavestalkers"],
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
        "talents": ["Amphibious","Limited"]
    },
    "gender": "M",
    "value": 13,
    "race": "Shakrim"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs","Koronnan Moonsworn"],
    "primaryFaction": ["Eclipse Sisterhood"],
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "trustedFactions": ["Falkaaran Adventurers","Haradelan Questers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Wandering Allies"],
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
        "talents": ["Dodge","Cunning","Outperform","Protected","Perform[Wing Dances,5]"],
        "abilities":{
            "agility":12
        },
        "performance": {
            "name": "Wing Dances",
            "rating": 10
        }
    },
    "gender": "F",
    "value": 31,
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "trustedFactions": ["Falkaaran Adventurers","Haradelan Questers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Wandering Allies"],
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
        "talents": ["Dodge","Cunning","Outperform","Protected","Perform[Wing Dances,5]"],
        "abilities":{
            "agility":12
        },
        "performance": {
            "name": "Wing Dances",
            "rating": 10
        }
    },
    "gender": "F",
    "value": 31,
    "race": "Faeler"
},{
    "factions": ["Darkgrove Demons","Demons of Karelon","Grular Invaders","Shakrim Wavestalkers"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Demons of Karelon"],
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
    "factions": ["Kandoran Deathmasters","Black Rose Bandits","Black Thorn Bandits","Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction": ["Kandoran Deathmasters"],
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
            "name": "Necromancy",
            "power": 15,
            "rating": 10,
            "type": "spirit"
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Kandoran"
},{
    "factions": ["Azura Windborne","Haradelan Questers", "Ravenblade Mercenaries","Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Haradelan Questers", "Ravenblade Mercenaries", "Wandering Allies"],
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
        },
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }]
    },
    "gender": "M",
    "value": 34,
    "race": "Faeler"
},{
    "factions": ["Shakrim Wavestalkers","Black Rose Bandits","Black Thorn Bandits","Kandoran Deathmasters","Traazorite Crusaders"],
    "primaryFaction": ["Shakrim Wavestalkers"],
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction": ["Falkaaran Adventurers","Haradelan Questers","Ravenblade Mercenaries"],
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction": ["Falkaaran Adventurers"],
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
        "talents": ["Dodge","Scout","Harasser","Fly[Low, SPD 10]","Light Cavalry","Calvary"],
        "abilities": {
            "agility": 10,
            "dexterity": 10
        }
    },
    "gender": "M",
    "value": 38,
    "race": "Faeler"
},{
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction": ["Falkaaran Adventurers"],
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
    "factions": ["The Collective","Ravenblade Mercenaries","Falkaaran Adventurers","Haradelan Questers"],
    "trustedFactions": ["Falkaaran Adventurers","Haradelan Questers"],
    "primaryFaction": ["The Collective","Ravenblade Mercenaries"],
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
        "discipline": 10,
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
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
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
        "talents": ["Cavalry","Fly[Low, SPD 10]","Parry","Parry","Assault","Missle Parry","Warhorse"],
        "abilities": {
            "agility":10,
            "dexterity":10
        }
    },
    "gender": "M",
    "value": 46,
    "race": "Trilian"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
    "name": "Talsytar",
    "displayName": "Talsytar (Dismounted)",
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
        "talents": ["Parry","Parry","Assault","Missle Parry"],
        "abilities": {
            "agility":10,
            "dexterity":10
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Trilian"
},{
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Ruin", "Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Ruin", "Urdaggar Tribes of Valor"],
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
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective","Kandoran Deathmasters","Shakrim Wavestalkers"],
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective"],
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
    "factions": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective"],
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits", "The Collective"],
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
    "primaryFaction": ["Darkgrove Demons", "Demons of Karelon"],
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
            "name": "Darkgrove Sorcery",
            "power": 15,
            "rating": 10,
            "type": "sorcery"
        },
        "abilities": {
            "agility":10
        }
    },
    "gender": "F",
    "value": 50,
    "race": "Demon"
},{
    "factions": ["Darkgrove Demons", "Demons of Karelon"],
    "primaryFaction": ["Darkgrove Demons"],
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
    "factions": ["Darkgrove Demons", "Demons of Karelon"],
    "primaryFaction": ["Darkgrove Demons"],
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
    "factions": ["Darkgrove Demons", "Demons of Karelon"],
    "primaryFaction": ["Darkgrove Demons"],
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
    "factions": ["Darkgrove Demons", "Demons of Karelon"],
    "primaryFaction": ["Darkgrove Demons"],
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
    "factions": ["Darkgrove Demons", "Demons of Karelon","Grular Invaders"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Darkgrove Demons", "Demons of Karelon"],
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
    "primaryFaction": ["Grular Invaders"],
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
        "talents": ["Accurate Strike", "Tough", "Tough", "Strong-arm","Active Defense","Lash Attack","Menace","Menace"]
    },
    "gender": "M",
    "value": 30,
    "race": "Symker"
},{
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Ravenblade Mercenaries"],
    "primaryFaction": ["Haradelan Questers"],
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
            "name": "Varanic Rites: Kantor",
            "rating": 10,
            "power": 15,
            "type": "spirit"
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Faeler"
},{
    "factions": ["Haradelan Questers"],
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
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
            "name": "Moons Magic: Priestess",
            "power":15,
            "rating":10,
            "type": "spirit"
        },
        "abilities":{
            "agility":10
        }
    },
    "gender": "F",
    "value": 41,
    "race": "Koronnan"
},{
    "factions": ["Eclipse Sisterhood","Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
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
            "name": "Moons Magic: Priestess",
            "power":15,
            "rating":10,
            "type": "spirit"
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
    "primaryFaction": ["Koronnan Moonsworn"],
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
        "talents": ["Leader","Moons Magic: Priest", "Dodge","Spelldancer","Spell Projector[Moons Priestess]"],
        "casting": {
            "name": "Moons Magic: Priest",
            "power":15,
            "rating":10,
            "type": "spirit"
        },
        "abilities":{
            "agility":10
        }
    },
    "gender": "M",
    "value": 41,
    "race": "Koronnan"
},{
    "factions": ["Eclipse Sisterhood","Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
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
        "talents": ["Moons Magic: Priest", "Dodge","Spelldancer","Spell Projector[Moons Priestess]"],
        "casting": {
            "name": "Moons Magic: Priest",
            "power":15,
            "rating":10,
            "type": "spirit"
        },
        "abilities":{
            "agility":10
        }
    },
    "gender": "M",
    "value": 35,
    "race": "Koronnan"
},{
    "factions": ["Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Koronnan Moonsworn"],
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
    "factions": ["Koronnan Moonsworn","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Koronnan Moonsworn"],
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
    "factions": ["Koronnan Moonsworn","Eclipse Sisterhood","Haradelan Questers","Mershael Corsairs","Ravenblade Mercenaries"],
    "primaryFaction": ["Koronnan Moonsworn"],
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
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
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
    "factions": ["Eclipse Sisterhood","Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
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
    "factions": ["Eclipse Sisterhood","Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
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
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Kuzaarik Forgers","Urdaggar Tribes of Valor","Varkraalan Unchained"],
    "trustedFactions": ["Falkaaran Adventurers"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Mershael Corsairs"],
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
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Mershael Corsairs"],
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
    "factions": ["Traazorite Crusaders"],
    "primaryFaction": ["Traazorite Crusaders"],
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
    "primaryFaction": ["The Collective"],
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
    "factions": ["Azura Windborne","The Collective","Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["The Collective","Wandering Allies"],
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
    "factions": ["The Collective"],
    "primaryFaction": ["The Collective"],
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
    "factions": ["Azura Windborne","The Collective","Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["The Collective","Wandering Allies"],
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
    "factions": ["Black Rose Bandits", "Black Thorn Bandits","Kandoran Deathmasters","Shakrim Wavestalkers"],
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits"],
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
    "factions": ["Traazorite Crusaders"],
    "primaryFaction": ["Traazorite Crusaders"],
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
    "factions": ["Demons of Karelon","Darkgrove Demons","Grular Invaders"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Demons of Karelon"],
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
        "performance": {
            "name": "Siren Song",
            "rating": 10
        }
    },
    "gender": "F",
    "value": 37,
    "race": "Demon"
},{
    "factions": ["Demons of Karelon","Darkgrove Demons","Grular Invaders"],
    "trustedFactions": ["Grular Invaders"],
    "primaryFaction": ["Demons of Karelon"],
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
        "performance": {
            "name": "Siren Song",
            "rating": 10
        }
    },
    "gender": "F",
    "value": 37,
    "race": "Demon"
},{
    "factions": ["Kandoran Deathmasters"],
    "primaryFaction": ["Kandoran Deathmasters"],
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
    "factions": ["Koronnan Moonsworn","Eclipse Sisterhood","Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction": ["Koronnan Moonsworn"],
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
    "factions": ["Ravenblade Mercenaries","Falkaaran Adventurers","Haradelan Questers"],
    "trustedFactions": ["Falkaaran Adventurers","Haradelan Questers"],
    "primaryFaction": ["Ravenblade Mercenaries"],
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
        "performance": {
            "name": "Ravensong",
            "rating": 12
        }
    },
    "gender": "M",
    "value": 36,
    "race": "Faeler"
},{
    "factions": ["Ravenblade Mercenaries","Falkaaran Adventurers","Haradelan Questers"],
    "trustedFactions": ["Falkaaran Adventurers","Haradelan Questers"],
    "primaryFaction": ["Ravenblade Mercenaries"],
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
        "performance": {
            "name": "Ravensong",
            "rating": 12
        }
    },
    "gender": "M",
    "value": 36,
    "race": "Faeler"
},{
    "factions": ["Shakrim Wavestalkers","Black Rose Bandits","Black Thorn Bandits","Kandoran Deathmasters","Traazorite Crusaders"],
    "primaryFaction": ["Shakrim Wavestalkers"],
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
    "factions": ["Azura Windborne","The Collective","Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["The Collective","Wandering Allies"],
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
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
    "value": 32,
    "race": "Beast"
},{
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
    "factions": ["Kandoran Deathmasters","Black Rose Bandits", "Black Thorn Bandits","Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction": ["Kandoran Deathmasters"],
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
    "factions": ["Shakrim Wavestalkers"],
    "primaryFaction": ["Shakrim Wavestalkers"],
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
    "factions": ["Azura Windborne","Mershael Corsairs","Black Rose Bandits","Black Thorn Bandits","Eclipse Sisterhood","Koronnan Moonsworn"],
    "primaryFaction": ["Mershael Corsairs"],
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
    "factions": ["Kuzaarik Forgers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
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
    "factions": ["Azura Windborne", "Mershael Corsairs"],
    "primaryFaction": ["Mershael Corsairs"],
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
    "factions": ["Shakrim Wavestalkers","Traazorite Crusaders"],
    "primaryFaction": ["Traazorite Crusaders"],
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
    "factions": ["Shakrim Wavestalkers","Traazorite Crusaders"],
    "primaryFaction": ["Traazorite Crusaders"],
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
    "factions": ["Urdaggar Tribes of Ruin", "Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Ruin", "Urdaggar Tribes of Valor"],
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
    "factions": ["Azura Windborne","Black Rose Bandits", "Black Thorn Bandits","Eclipse Sisterhood","Falkaaran Adventurers","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Wandering Allies"],
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
        "talents": ["Wild Magic[d6 Cloak, Illusionary Blades, Mask]","Dodge","Dodge","Rash Magic","Tarch's Fate"],
        "abilities": {
            "agility": 14
        }
    },
    "gender": "M",
    "value": 32,
    "race": "Chaler"
},{
    "factions": ["Urdaggar Tribes of Ruin"],
    "primaryFaction": ["Urdaggar Tribes of Ruin"],
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
            "name": "Vulture Magic",
            "power": 15,
            "rating": 10,
            "type": "spirit"
        },
        "armor": 2,
        "discipline": 12,
        "talents": ["Leader","Carrion Harvest","Dodge","Vulture Magic"]
    },
    "gender": "F",
    "value": 39,
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Ruin"],
    "primaryFaction": ["Urdaggar Tribes of Ruin"],
    "name": "Dark Herald",
    "displayName": "Dark Herald",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Staff"
        }],
        "casting": {
            "name": "Vulture Magic",
            "power": 15,
            "rating": 10,
            "type": "spirit"
        },
        "armor": 2,
        "discipline": 10,
        "talents": ["Carrion Harvest","Dodge","Vulture Magic"]
    },
    "gender": "F",
    "value": 32,
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Ruin"],
    "primaryFaction": ["Urdaggar Tribes of Ruin"],
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
    "primaryFaction": ["Urdaggar Tribes of Ruin"],
    "name": "Vanquisher",
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
    "primaryFaction": ["Urdaggar Tribes of Ruin"],
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
    "primaryFaction": ["Urdaggar Tribes of Ruin"],
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
    "primaryFaction": ["Urdaggar Tribes of Ruin"],
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
    "primaryFaction": ["Urdaggar Tribes of Ruin"],
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
    "primaryFaction": ["Black Rose Bandits", "Black Thorn Bandits"],
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
    "primaryFaction": ["Haradelan Questers"],
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
    "primaryFaction": ["Haradelan Questers"],
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
    "factions": ["Kandoran Deathmasters","Black Rose Bandits", "Black Thorn Bandits", "Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction": ["Kandoran Deathmasters"],
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
    "factions": ["Kandoran Deathmasters","Black Rose Bandits","Black Thorn Bandits","Grular Invaders","Shakrim Wavestalkers"],
    "primaryFaction": ["Kandoran Deathmasters"],
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
        "armor": 2,
        "discipline": 6,
        "talents": ["Infiltrate","Scrounge"],
        "skills": [{
            "name": "Find",
            "rating": 10
        }]
    },
    "gender": "M",
    "value": 10,
    "race": "Kandoran"
},{
    "factions": ["Koronnan Moonsworn", "Eclipse Sisterhood"],
    "primaryFaction": ["Koronnan Moonsworn"],
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
        "armor": 2,
        "discipline": 6,
        "talents": ["Fast"]
    },
    "gender": "M",
    "value": 10,
    "race": "Koronnan"
},{
    "factions": ["Kuzaarik Forgers","Varkraalan Unchained","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Kuzaarik Forgers","Varkraalan Unchained"],
    "primaryFaction": ["Kuzaarik Forgers"],
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
    "factions": ["Ravenblade Mercenaries","Falkaaran Adventurers","Haradelan Questers"],
    "primaryFaction": ["Ravenblade Mercenaries"],
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
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","The Collective","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Wandering Allies"],
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
            "name": "Void Magic: Enshrouder",
            "power": 15,
            "rating": 10,
            "type": "energy"
        },
        "armor": 2,
        "discipline": 8,
        "talents": ["Void Magic: Enshrouder","Cunning","Spellstrecher"]
    },
    "gender": "M",
    "value": 31,
    "race": "Faeler"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction": ["Eclipse Sisterhood"],
    "name": "Void Agent",
    "displayName": "Void Agent",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Long Knife"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Backstep","Prowl","Accurate Strike","Accurate Strike","Accurate Strike","Wild Magic[d6, Nullify Armor, Missed Opportunity, Void Blade]"],
        "abilities": {
            "agility": 12
        }
    },
    "gender": "F",
    "value": 35,
    "race": "Chaler"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Eclipse Sisterhood"],
    "name": "Sky Sister",
    "displayName": "Sky Sister",
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
            "name": "Roondar"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Cavalry","Light Cavalry","Dodge","Scout","Harasser","Marksman","Fly[Low, SPD 10]","Stable Shot[d10]"],
        "abilities": {
            "agility": 12
        }
    },
    "gender": "F",
    "value": 45,
    "race": "Chaler"
},{
    "factions": ["Falkaaran Adventurers","Ravenblade Mercenaries","Haradelan Questers"],
    "primaryFaction": ["Falkaaran Adventurers"],
    "name": "Knight Immolator",
    "displayName": "Knight Immolator",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 9,
        "melee": [{
            "rating": 10,
            "name": "Longsword (magic)"
        },{
            "rating": 6,
            "name": "Warhorse",
            "damage": 6
        }],
        "shield": "S",
        "armor": 6,
        "discipline": 10,
        "talents": ["Cavalry","Parry","Parry","Bladeflash","Glacis","Warhorse","Immune[Flame]","Fast"],
        "abilities": {
            "dexterity": 10,
            "spirit": 10
        }
    },
    "gender": "F",
    "value": 45,
    "race": "Chaler"
},{
    "factions": ["Koronnan Moonsworn","Eclipse Sisterhood"],
    "primaryFaction": ["Koronnan Moonsworn"],
    "name": "Red Lancer",
    "displayName": "Red Lancer",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 9,
        "melee": [{
            "rating": 10,
            "name": "Lance"
        },{
            "rating": 10,
            "name": "Saber"
        }],
        "range": [{
            "rating": 10,
            "name": "Recurved Short Bow"
        }],
        "shield": "S",
        "armor": 5,
        "discipline": 10,
        "talents": ["Cavalry","Fast","Armored Deflection","Armored Deflection","Recover","Follow Through"],
        "abilities": {
            "agility": 10,
            "strength": 10
        }
    },
    "gender": "M",
    "value": 42,
    "race": "Koronnan"
},{
    "factions": ["Azura Windborne","Mershael Corsairs","Eclipse Sisterhood"],
    "primaryFaction": ["Mershael Corsairs"],
    "name": "Kyutokar",
    "displayName": "Kyutokar",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "rating": 10,
            "name": "Taumari"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Cavalry","Dodge","Dodge","Vay","Hit and Run","Fly[Low, SPD 10]"],
        "abilities": {
            "agility": 12
        }
    },
    "gender": "M",
    "value": 36,
    "race": "Chaler"
},{
    "factions": ["Shakrim Wavestalkers"],
    "primaryFaction": ["Shakrim Wavestalkers"],
    "name": "Ssarashal",
    "displayName": "Ssarashal",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Fang Blade"
        },{
            "rating": 10,
            "name": "Fang Blade"
        }],
        "range": [{
            "rating": 8,
            "name": "Poison Pellet"
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Arboreal","Chameleon","Dodge","Dodge","Enhanced Ambush","Arsenal Poison[Poison Pellet]"],
        "abilities": {
            "agility": 12
        }
    },
    "gender": "M",
    "value": 37,
    "race": "Shakrim"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
    "name": "Drakohal",
    "displayName": "Drakohal",
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
        "talents": ["Parry","Parry","Sure Strikes","Protector","Confine","Warden","Arboreal"],
        "abilities": {
            "agility": 10
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Trilian"
},{
    "factions": ["Black Rose Bandits","Black Thorn Bandits","The Collective","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Wandering Allies"],
    "name": "Moon Talon",
    "displayName": "Moon Talon",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 9,
        "melee": [{
            "rating": 10,
            "name": "Lance"
        },{
            "rating": 10,
            "name": "Saber"
        },{
            "rating": 8,
            "name": "Talon",
            "damage": 6,
            "abilities": ["pin"]
        },{
            "rating": 8,
            "name": "Bite",
            "damage": 6
        }],
        "shield": "S",
        "armor": 4,
        "discipline": 10,
        "talents": ["Cavalry","Parry","Fearsome","Tough","Backstep","Swoop[Talon]","Fly[Low, SPD 8]","Darkvision"]
    },
    "gender": "M",
    "value": 50,
    "race": "Koronnan"
},{
    "factions": ["Azura Windborne"],
    "primaryFaction": ["Azura Windborne"],
    "name": "Skyrider",
    "displayName": "Skyrider",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 12,
            "name": "Halaztaf"
        }],
        "armor": 3,
        "discipline": 12,
        "talents": ["Leader","Dodge","Dodge","Feint","Tripping Strike","Hit and Run","Fly[Low, SPD 8]"],
        "abilities": {
            "agility": 12
        }
    },
    "gender": "M",
    "value": 39,
    "race": "Azura"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Azura Windborne"],
    "name": "Squall",
    "displayName": "Squall",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Halaztaf"
        }],
        "range": [{
            "rating": 8,
            "name": "Iron Pinion"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Feint","Swoop[Iron Pinion]","Fly[Low, SPD 5]"],
        "abilities": {
            "agility": 12
        }
    },
    "gender": "M",
    "value": 30,
    "race": "Azura"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Azura Windborne"],
    "name": "Whirlwind",
    "displayName": "Whirlwind",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 10,
            "name": "Kaiba"
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Raven Stance","Raven Stance","Sidestep","Fly[Low, SPD 5]"],
        "abilities": {
            "agility": 10
        }
    },
    "gender": "M",
    "value": 28,
    "race": "Azura"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Azura Windborne"],
    "name": "Stormspeaker",
    "displayName": "Stormspeaker",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Dagger"
        }],
        "casting": {
            "name": "Air Magic",
            "rating": 10,
            "power": 15,
            "type": "energy"
        },
        "armor": 2,
        "discipline": 8,
        "talents": ["Air Magic","Updraft","Fly[Low, SPD 5]"],
        "abilities": {
            "strength": 6
        }
    },
    "gender": "M",
    "value": 31,
    "race": "Azura"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Azura Windborne"],
    "name": "Cloudchaser",
    "displayName": "Cloudchaser",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 6,
            "name": "Long Knife"
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Cunning","Fly[Low, SPD 5]"]
    },
    "gender": "M",
    "value": 10,
    "race": "Azura"
},{
    "factions": ["Azura Windborne"],
    "primaryFaction": ["Azura Windborne"],
    "name": "Mistral",
    "displayName": "Mistral",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "rating": 4,
            "name": "Dagger"
        }],
        "range": [{
            "rating": 8,
            "name": "Zishoti"
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Limited","Fly[Low, SPD 5]"]
    },
    "gender": "M",
    "value": 12,
    "race": "Azura"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Azura Windborne"],
    "name": "Hailstorm",
    "displayName": "Hailstorm",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "range": [{
            "rating": 8,
            "name": "Zishoti"
        },{
            "rating": 8,
            "name": "Zishoti"
        }],
        "armor": 3,
        "discipline": 8,
        "talents": ["Dodge","Elusive","Harasser","Fly[Low, SPD 5]"],
        "abilities": {
            "agility":12
        },
        "skills": [{
            "name":"Hunt",
            "rating":8
        }]
    },
    "gender": "M",
    "value": 35,
    "race": "Azura"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Azura Windborne"],
    "name": "Thunderbolt",
    "displayName": "Thunderbolt",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee":[{
            "name": "Arantish",
            "rating": 10
        },{
            "name":"Beak",
            "rating":6,
            "damage":6
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Assult","Bounding Charge","Cavalry","Enhanced Leaper","Enhanced Leaper","Hit and Run","Fouling Strike","Fast","Light Construction"],
        "abilities": {
            "agility":12
        }
    },
    "gender": "M",
    "value": 43,
    "race": "Azura"
},{
    "factions": ["Darkgrove Demons","Demons of Karelon"],
    "primaryFaction": ["Darkgrove Demons"],
    "name": "Thornripper",
    "displayName": "Thornripper",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee":[{
            "name": "Claw",
            "rating": 10,
            "damage": 8
        }],
        "armor": 5,
        "discipline": 8,
        "talents": ["Die Hard","Thorny Body","Arboreal","Demon"],
        "veteran": [{
            "name": "SPR",
            "cost": 2
        }],
        "abilities": {
            "endurance":10
        }
    },
    "gender": "M",
    "value": 23,
    "race": "Demon"
},{
    "factions": ["Darkgrove Demons","Demons of Karelon"],
    "primaryFaction": ["Darkgrove Demons"],
    "name": "Hanging Lasher",
    "displayName": "Hanging Lasher",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee":[{
            "name": "Barbed Whip",
            "rating": 6
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Ambush","Entangler","Entangler","Arboreal","Demon"]
    },
    "gender": "M",
    "value": 12,
    "race": "Demon"
},{
    "factions": ["Ravenblade Mercenaries"],
    "primaryFaction": ["Ravenblade Mercenaries"],
    "name": "Deadeye",
    "displayName": "Deadeye",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee":[{
            "name": "Short Sword",
            "rating": 10
        }],
        "range": [{
            "name":"Crossbow",
            "rating":10
        }],
        "armor": 4,
        "discipline": 8,
        "talents": ["Glacis","Guardian Shot","Dodge","Sharpshooter","Combat Reflexes"],
        "abilities": {
            "agility": 10
        }
    },
    "gender": "M",
    "value": 28,
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Ruin"],
    "primaryFaction": ["Urdaggar Tribes of Ruin"],
    "name": "Night Lurker",
    "displayName": "Night Lurker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee":[{
            "name": "Ripper",
            "rating": 10
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Darkvision","Dodge","Dodge","Cavalry","Light Cavalry","Fly[Low, SPD 10]","Hit and Run","Piercing Screech","Scout"],
        "abilities": {
            "agility": 10
        }
    },
    "gender": "M",
    "value": 34,
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Ruin"],
    "primaryFaction": ["Urdaggar Tribes of Ruin"],
    "name": "Spider Rider",
    "displayName": "Spider Rider",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee":[{
            "name": "Bite",
            "rating": 10,
            "damage":8,
            "abilities":["ven"]
        },{
            "name": "Web",
            "rating": 10
        },{
            "name": "Short Spear",
            "rating": 8
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Cavalry","Die Hard","Battler","Dodge","Fearsome","Infiltrate","Spiderclimb","Tough"],
        "abilities": {
            "agility": 10,
            "endurance":10
        }
    },
    "gender": "M",
    "value": 44,
    "race": "Faeler"
},{
    "factions": ["Kandoran Deathmasters","Black Rose Bandits","Black Thorn Bandits"],
    "primaryFaction": ["Kandoran Deathmasters"],
    "name": "The Faceless",
    "displayName": "The Faceless",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee":[{
            "name": "Agukrich",
            "rating": 8
        }],
        "range": [{
            "name": "Agukrich",
            "rating": 10
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Accurate Shot","Bladedancer","Deft Hands","Dodge","Disguise","Fast Disguise"],
        "abilities": {
            "agility": 12,
            "dexterity":10
        },
        "skills": [{
            "name":"Thievery",
            "rating":10
        }]
    },
    "gender": "M",
    "value": 35,
    "race": "Faeler"
},{
    "factions": ["Urdaggar Tribes of Valor"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
    "name": "Sholakir",
    "displayName": "Sholakir",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee":[{
            "name": "Longspear",
            "rating": 12
        },{
            "name": "Talon",
            "rating": 8,
            "damage": 6,
            "abilities": ["pin"]
        }],
        "shield": "S",
        "armor": 3,
        "discipline": 12,
        "talents": ["Leader","Dodge","Dodge","Hit and Run","Assult","Cavalry","Swoop[Talon]","Fly[Low, SPD 10]"],
        "abilities": {
            "agility": 10,
            "spirit": 10
        }
    },
    "gender": "M",
    "value": 50,
    "race": "Faeler"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction": ["Urdaggar Tribes of Valor"],
    "name": "Sholakir",
    "displayName": "Sholakir",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee":[{
            "name": "Longspear",
            "rating": 10
        },{
            "name": "Talon",
            "rating": 8,
            "damage": 6,
            "abilities": ["pin"]
        }],
        "shield": "S",
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Hit and Run","Assult","Cavalry","Swoop[Talon]","Fly[Low, SPD 10]"],
        "abilities": {
            "agility": 10,
            "spirit": 10
        }
    },
    "gender": "M",
    "value": 43,
    "race": "Faeler"
},{
    "factions": ["Grular Invaders"],
    "primaryFaction": ["Grular Invaders"],
    "name": "Fear Bringer",
    "displayName": "Fear Bringer",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee":[{
            "name": "Morning Star",
            "rating": 10
        }],
        "range":[{
            "name": "Skullbomb",
            "rating": 8
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Dodge","Menace","Fearsome","Face your Fear","Face your Fear"],
        "abilities": {
            "agility": 10,
            "knowledge": 10
        }
    },
    "gender": "M",
    "value": 30,
    "race": "Faeler"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
    "name": "Spirit Owl",
    "displayName": "Spirit Owl",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 1,
        "melee":[{
            "name": "Talon",
            "rating": 6,
            "damage": 4,
            "abilities": ["pin"]
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Familiar","Animal","Spirit","Insignificant","Fly[Low, SPD 10]","Starlight Vision","Dodge","Intensify Spell"],
        "abilities": {
            "agility": 10
        },
        "skills": [{
            "name": "Hunt",
            "rating": 6
        }]
    },
    "gender": "M",
    "value": 15,
    "race": "Beast"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
    "name": "Spirit Wolf",
    "displayName": "Spirit Wolf",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 8,
        "melee":[{
            "name": "Bite",
            "rating": 6,
            "damage": 8
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Familiar","Animal","Spirit","Arboreal","Fast","Spell Shift"],
        "skills": [{
            "name": "Hunt",
            "rating": 6
        }]
    },
    "gender": "M",
    "value": 15,
    "race": "Beast"
},{
    "factions": ["Shakrim Wavestalkers"],
    "primaryFaction": ["Shakrim Wavestalkers"],
    "name": "Zaleek Warrior",
    "displayName": "Zaleek Warrior",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee":[{
            "name": "Toothed Sword",
            "rating": 10
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Confine","Constrict","Die Hard","Die Hard"],
        "abilities": {
            "endurance": 10
        }
    },
    "gender": "M",
    "value": 30,
    "race": "Shakrim"
},{
    "factions": ["Traazorite Crusaders"],
    "primaryFaction": ["Traazorite Crusaders"],
    "name": "Dune Crawler",
    "displayName": "Dune Crawler",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee":[{
            "name": "Claw 2x",
            "rating": 10,
            "damage": 8
        },{
            "name": "Stinger",
            "rating": 10,
            "damage": 4,
            "abilities": ["ven"]
        },{
            "name": "Whip",
            "rating": 8
        }],
        "armor": 6,
        "discipline": 10,
        "talents": ["Battler","Tough","Hardened","Fearsome","Mountainer","Enhanced Vemon","Enhanced Vemon","Cavalry","Confine","Bear Hug"],
        "abilities": {
            "endurance": 10
        }
    },
    "gender": "M",
    "value": 52,
    "race": "Chaler"
},{
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Darkgrove Demons","Demons of Karelon","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","The Collective","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Familiar"],
    "name": "Iztrazal",
    "displayName": "Iztrazal",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 5,
        "melee":[{
            "name": "Bite",
            "rating": 6,
            "damage": 4
        }],
        "armor": 5,
        "discipline": 4,
        "talents": ["Familiar","Animal","Insignificant","Disguise","Armored Deflection","Spellhammer"],
        "abilities": {
            "strength": 10
        }
    },
    "gender": "M",
    "value": 13,
    "race": "Beast"
},{
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Darkgrove Demons","Demons of Karelon","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","The Collective","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Familiar"],
    "name": "Owl",
    "displayName": "Owl",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 1,
        "melee":[{
            "name": "Talon",
            "rating": 6,
            "damage": 4,
            "abilities": ["pin"]
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Familiar","Animal","Insignificant","Disguise","Fly[Low, SPD 10]","Starlight Vision","Dodge","Intensify Spell"],
        "skills": [{
            "name": "Hunt",
            "rating": 6
        }],
        "abilities": {
            "agility": 10
        }
    },
    "gender": "M",
    "value": 14,
    "race": "Beast"
},{
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Darkgrove Demons","Demons of Karelon","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","The Collective","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Familiar"],
    "name": "Suralax",
    "displayName": "Suralax",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 4,
        "melee":[{
            "name": "Bite",
            "rating": 6,
            "damage": 4,
            "abilities": ["acd"]
        }],
        "range":[{
            "name": "Acid Spit",
            "rating": 6,
            "damage": 0,
            "distance": 2
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Familiar","Animal","Insignificant","Disguise","Dodge","Fly[Low, SPD 9]","Spellhammer"],
        "abilities": {
            "strength": 4
        }
    },
    "gender": "M",
    "value": 14,
    "race": "Beast"
},{
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Darkgrove Demons","Demons of Karelon","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","The Collective","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Familiar"],
    "name": "Voavar",
    "displayName": "Voavar",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 4,
        "melee":[{
            "name": "Sting",
            "rating": 6,
            "damage": 4,
            "abilities": ["ven"]
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Familiar","Animal","Insignificant","Disguise","Dodge","Fly[Low, SPD 8]","Sympathetic Spell"],
        "abilities": {
            "strength": 4,
            "agility": 8
        }
    },
    "gender": "M",
    "value": 10,
    "race": "Beast"
},{
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Darkgrove Demons","Demons of Karelon","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","The Collective","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Familiar"],
    "name": "Wolf",
    "displayName": "Wolf",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 8,
        "melee":[{
            "name": "Bite",
            "rating": 6,
            "damage": 8
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Familiar","Animal","Disguise","Arboreal","Fast","Spell Shift"],
        "skills": [{
            "name": "Hunt",
            "rating": 6
        }]
    },
    "gender": "M",
    "value": 14,
    "race": "Beast"
},{
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Darkgrove Demons","Demons of Karelon","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","The Collective","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Familiar"],
    "name": "Fox",
    "displayName": "Fox",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 8,
        "melee":[{
            "name": "Bite",
            "rating": 6,
            "damage": 6
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Familiar","Animal","Insignificant","Disguise","Arboreal","Fast","Dodge","Spellbender"],
        "abilities": {
            "agility": 8
        }
    },
    "gender": "M",
    "value": 12,
    "race": "Beast"
},{
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Darkgrove Demons","Demons of Karelon","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","The Collective","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Familiar"],
    "name": "Rabbit",
    "displayName": "Rabbit",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 8,
        "melee":[{
            "name": "Bite",
            "rating": 6,
            "damage": 4
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Familiar","Animal","Insignificant","Disguise","Arboreal","Fast","Dodge","Selective"],
        "abilities": {
            "agility": 10,
            "strength": 4
        }
    },
    "gender": "M",
    "value": 11,
    "race": "Beast"
},{
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Darkgrove Demons","Demons of Karelon","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","The Collective","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Familiar"],
    "name": "Skunk",
    "displayName": "Skunk",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee":[{
            "name": "Bite",
            "rating": 6,
            "damage": 4
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Familiar","Animal","Insignificant","Disguise","Arboreal","Skunk Attack","Spell Emanation"]
    },
    "gender": "M",
    "value": 9,
    "race": "Beast"
},{
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Darkgrove Demons","Demons of Karelon","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","The Collective","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Familiar"],
    "name": "Squirrel",
    "displayName": "Squirrel",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee":[{
            "name": "Bite",
            "rating": 6,
            "damage": 4
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Familiar","Animal","Insignificant","Disguise","Arboreal","Dodge","Elusive","Spellstretcher"],
        "abilities": {
            "agility": 10,
            "strength": 4
        }
    },
    "gender": "M",
    "value": 9,
    "race": "Beast"
},{
    "factions": ["Azura Windborne","Black Rose Bandits","Black Thorn Bandits","Darkgrove Demons","Demons of Karelon","Eclipse Sisterhood","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Kuzaarik Forgers","Mershael Corsairs","Ravenblade Mercenaries","Shakrim Wavestalkers","The Collective","Traazorite Crusaders","Trilian Seekers","Urdaggar Tribes of Ruin","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Familiar"],
    "name": "Stag",
    "displayName": "Stag",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 8,
        "melee":[{
            "name": "Antlers",
            "rating": 6,
            "damage": 8
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Familiar","Animal","Disguise","Arboreal","Fast","Wild Charge","Spellbracer"]
    },
    "gender": "M",
    "value": 13,
    "race": "Beast"
},{
    "factions": ["Grular Invaders"],
    "primaryFaction": ["Grular Invaders"],
    "name": "Falconer",
    "displayName": "Falconer",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "name": "Spikedrakh",
            "rating": 8
        }],
        "range": [{
            "name": "Composite Bow",
            "rating": 12
        }],
        "armor": 4,
        "discipline": 12,
        "talents": ["Cavalry","Falconer","Fast","Harasser","Hard Target","Hunting Raptor","Leader","Light Cavalry","Rapid Reload","Winged Companion"],
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }]
    },
    "value": 42,
    "race": "Symker",
    "gender": "M"
},{
    "factions": ["Grular Invaders"],
    "primaryFaction": ["Grular Invaders"],
    "name": "Falconer",
    "displayName": "Falconer",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "name": "Spikedrakh",
            "rating": 8
        }],
        "range": [{
            "name": "Composite Bow",
            "rating": 10
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Cavalry","Falconer","Fast","Harasser","Hard Target","Hunting Raptor","Light Cavalry","Rapid Reload","Winged Companion"],
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }]
    },
    "value": 36,
    "race": "Symker",
    "gender": "M"
},{
    "factions": ["Grular Invaders"],
    "primaryFaction": ["Grular Invaders"],
    "name": "Firestarter",
    "displayName": "Firestarter",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 10,
        "melee": [{
            "name": "Staff",
            "rating": 6
        }],
        "casting": {
            "name": "Fire Magic:Firestarter",
            "type": "energy",
            "power": 15,
            "rating": 10
        },
        "armor": 2,
        "discipline": 8,
        "talents": ["Fire Magic:Firestarter","Cavalry","Fast","Spelldancer"]
    },
    "value": 35,
    "race": "Symker",
    "gender": "M"
},{
    "factions": ["Grular Invaders"],
    "primaryFaction": ["Grular Invaders"],
    "name": "Deserter",
    "displayName": "Deserter",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "name": "Cudgel",
            "rating": 6
        }],
        "armor": 2,
        "discipline": 4,
        "talents": ["Fighting Spirit","Fodder"]
    },
    "value": 9,
    "race": "Symker",
    "gender": "M"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
    "name": "Night Fang",
    "displayName": "Night Fang",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Moonsickle",
            "rating": 12
        }],
        "armor": 3,
        "discipline": 12,
        "talents": ["Accurate Strike","Accurate Strike","Accurate Strike","Champion[Night Wing]","Expert[Parry]","Feint","Leader","Parry","Parry"],
        "skills": [{
            "name": "Stealth",
            "rating": 8
        }],
        "abilities": {
            "agility": 10,
            "dexterity": 10
        }
    },
    "value": 41,
    "race": "Koronnan",
    "gender": "M"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
    "name": "Night Wing",
    "displayName": "Night Wing",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Moonsickle",
            "rating": 12
        }],
        "armor": 3,
        "discipline": 12,
        "talents": ["Champion[Night Fang]","Dodge","Dodge","Hate[Traazorites]","Killing Strike","Killing Strike","Leader","Opportune Strike","Prowl","Weaponeer"],
        "skills": [{
            "name": "Stealth",
            "rating": 8
        }],
        "abilities": {
            "agility": 12
        }
    },
    "value": 41,
    "race": "Koronnan",
    "gender": "F"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
    "name": "Night Fang",
    "displayName": "Night Fang",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Moonsickle",
            "rating": 10
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Accurate Strike","Accurate Strike","Accurate Strike","Champion[Night Wing]","Expert[Parry]","Feint","Parry","Parry"],
        "skills": [{
            "name": "Stealth",
            "rating": 8
        }],
        "abilities": {
            "agility": 10,
            "dexterity": 10
        }
    },
    "value": 34,
    "race": "Koronnan",
    "gender": "M"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
    "name": "Night Wing",
    "displayName": "Night Wing",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Moonsickle",
            "rating": 10
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Champion[Night Fang]","Dodge","Dodge","Hate[Traazorites]","Killing Strike","Killing Strike","Opportune Strike","Prowl","Weaponeer"],
        "skills": [{
            "name": "Stealth",
            "rating": 8
        }],
        "abilities": {
            "agility": 12
        }
    },
    "value": 34,
    "race": "Koronnan",
    "gender": "F"
},{
    "factions": ["Koronnan Moonsworn"],
    "primaryFaction": ["Koronnan Moonsworn"],
    "name": "Shader",
    "displayName": "Shader",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "name": "Moonsickle",
            "rating": 6
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Ambush","Hate[Traazorites"]
    },
    "value": 9,
    "race": "Koronnan",
    "gender": "F"
},{
    "factions": ["Varkraalan Unchained"],
    "primaryFaction": ["Varkraalan Unchained"],
    "name": "Dervish",
    "displayName": "Dervish",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Petadrakh",
            "rating": 12
        }],
        "armor": 3,
        "discipline": 12,
        "talents": ["Leader","Parry","Parry","Bladedancer","Missile Parry","Swordstorm"],
        "abilities": {
            "agility": 10
        }
    },
    "value": 39,
    "race": "Symker",
    "gender": "M"
},{
    "factions": ["Varkraalan Unchained","Kuzaarik Forgers"],
    "primaryFaction": ["Varkraalan Unchained"],
    "name": "Vuan Pang Monk",
    "displayName": "Vuan Pang Monk",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Strike 2x",
            "rating": 8,
            "damage": 4
        }],
        "armor": 2,
        "discipline": 8,
        "talents": ["Focus[Vuan Pang Style]","Pure Monk","Dodge","Dampening","Aura Wave"],
        "abilities": {
            "agility": 10,
            "spirit": 10
        },
        "focus": {
            "name": "Vuan Pang Style",
            "rating": 10
        }
    },
    "value": 34,
    "race": "Symker",
    "gender": "M"
},{
    "factions": ["Varkraalan Unchained","Kuzaarik Forgers"],
    "primaryFaction": ["Varkraalan Unchained"],
    "name": "Jade Changeseeker",
    "displayName": "Jade Changeseeker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Agukrich",
            "rating": 10
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Dodge","Dodging Strike","Focus[Mul Sat Style]","Freerunner","Pouncer"],
        "skills": [{
            "name": "Stealth",
            "rating": 8
        }],
        "abilities": {
            "agility": 12,
            "dexterity": 10
        },
        "focus": {
            "name": "Mul Sat Style",
            "rating": 6
        }
    },
    "value": 28,
    "race": "Symker",
    "gender": "M"
},{
    "factions": ["Varkraalan Unchained","Kuzaarik Forgers"],
    "primaryFaction": ["Varkraalan Unchained"],
    "name": "Jade Truthseeker",
    "displayName": "Jade Truthseeker",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Sanghara",
            "rating": 10
        },{
            "name": "Sanghara",
            "rating": 10
        }],
        "armor": 2,
        "discipline": 10,
        "talents": ["Bladedancer","Accurate Strike","Dodge","Dodge","Focus[Shah Zah Style]"],
        "skills": [{
            "name": "Find",
            "rating": 10
        }],
        "abilities": {
            "agility": 14,
            "knowledge": 10
        },
        "focus": {
            "name": "Shah Zah Style",
            "rating": 6
        }
    },
    "value": 37,
    "race": "Symker",
    "gender": "F"
},{
    "factions": ["Varkraalan Unchained","Kuzaarik Forgers"],
    "primaryFaction": ["Varkraalan Unchained"],
    "name": "Zevriss",
    "displayName": "Zevriss",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Zeradrakh",
            "rating": 10
        }],
        "armor": 4,
        "discipline": 10,
        "talents": ["Parry","Fighting Spirit","Fighting Spirit","Battler","Wayfinder"]
    },
    "value": 27,
    "race": "Symker",
    "gender": "M"
},{
    "factions": ["Varkraalan Unchained","Kuzaarik Forgers"],
    "primaryFaction": ["Varkraalan Unchained"],
    "name": "Bounty Hunter",
    "displayName": "Bounty Hunter",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Spikedrakh",
            "rating": 10
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Dodge","Subdue","Pouncer","Wayfinder","Scout"],
        "skills": [{
            "name": "Hunt",
            "rating": 10
        },{
            "name": "Stealth",
            "rating": 8
        }],
        "abilities": {
            "agility": 12
        }
    },
    "value": 33,
    "race": "Symker",
    "gender": "M"
},{
    "factions": ["Varkraalan Unchained","Kuzaarik Forgers"],
    "primaryFaction": ["Varkraalan Unchained"],
    "name": "Dread Hunter",
    "displayName": "Dread Hunter",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Dreadspear",
            "rating": 10
        }],
        "range": [{
            "name": "Composite Bow",
            "rating": 10
        }],
        "armor": 3,
        "discipline":10,
        "talents": ["Dodge","Heroic Attack","Hunting Partner[Hunting Cat]","Raven Stance","Scout","Wayfinder"],
        "skills": [{
            "name": "Hunt",
            "rating": 8
        }],
        "abilities": {
            "agility": 10
        }
    },
    "value": 35,
    "race": "Symker",
    "gender": "M"
},{
    "factions": ["Varkraalan Unchained","Kuzaarik Forgers"],
    "primaryFaction": ["Varkraalan Unchained"],
    "name": "State Spearman",
    "displayName": "State Spearman",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "name": "Longspear",
            "rating": 6
        }],
        "shield": "S",
        "armor": 3,
        "discipline": 6,
        "talents": ["Shieldmate"]
    },
    "value": 13,
    "race": "Symker",
    "gender": "M"
},{
    "factions": ["Varkraalan Unchained","Kuzaarik Forgers"],
    "primaryFaction": ["Varkraalan Unchained"],
    "name": "State Archer",
    "displayName": "State Archer",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "name": "Dagger",
            "rating": 6
        }],
        "range": [{
            "name": "Composite Bow",
            "rating": 6
        }],
        "armor": 2,
        "discipline": 6
    },
    "value": 9,
    "race": "Symker",
    "gender": "M"
},{
    "factions": ["Varkraalan Unchained","Kuzaarik Forgers"],
    "primaryFaction": ["Varkraalan Unchained"],
    "name": "Hunting Cat",
    "displayName": "Hunting Cat",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 8,
        "melee": [{
            "name": "Claw",
            "rating": 8,
            "damage": 8
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Dodge","Bonded[Dread Hunter]","Warbeast","wayfinder","Fast"],
        "abilities": {
            "agility": 8
        }
    },
    "value": 15,
    "race": "Beast",
    "gender": "F"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Mershael Corsairs"],
    "primaryFaction": ["Azura Windborne"],
    "name": "Wargull",
    "displayName": "Wargull",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "name": "Fysala",
            "rating": 6
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Flurry","Fly[Low, SPD 5]"]
    },
    "value": 9,
    "race": "Azura",
    "gender": "F"
},{
    "factions": ["Eclipse Sisterhood"],
    "primaryFaction": ["Eclipse Sisterhood"],
    "name": "Bladedaughter",
    "displayName": "Bladedaughter",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Sakhazet",
            "rating": 12
        }],
        "armor": 3,
        "discipline": 12,
        "talents": ["Leader","Adapt the Plan","Awareness","Dodge","Dodge","Opportune Strike","Sidestep","Opening Strike","Opening Strike"],
        "abilities": {
            "agility": 12
        }
    },
    "value": 39,
    "race": "Chaler",
    "gender": "F"
},{
    "factions": ["Azura Windborne","Eclipse Sisterhood","Koronnan Moonsworn","Mershael Corsairs"],
    "primaryFaction": ["Eclipse Sisterhood"],
    "name": "Bladedaughter Aspirant",
    "displayName": "Bladedaughter Aspirant",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Sakhazet",
            "rating": 10
        }],
        "armor": 3,
        "discipline": 10,
        "talents": ["Dodge","Opportune Strike","Sidestep","Opening Strike","Opening Strike"],
        "abilities": {
            "agility": 12
        }
    },
    "value": 26,
    "race": "Chaler",
    "gender": "F"
},{
    "factions": ["Haradelan Questers"],
    "primaryFaction": ["Haradelan Questers"],
    "name": "High Questor of Modo",
    "displayName": "High Questor of Modo",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "name": "Hunting Spear",
            "rating": 12
        }],
        "range": [{
            "name": "Hunting Spear",
            "rating": 10
        }],
        "armor": 5,
        "discipline": 12,
        "talents": ["Leader","Arboreal","Die Hard","Fighting Spirit","Steadfast","Vicious Strike"],
        "abilities": {
            "endurance": 10,
            "spirit": 10
        }
    },
    "value": 44,
    "race": "Faeler",
    "gender": "M"
},{
    "factions": ["Falkaaran Adventurers","Haradelan Questers","Ravenblade Mercenaries"],
    "primaryFaction": ["Haradelan Questers"],
    "name": "Darkbane",
    "displayName": "Darkbane",
    "type": "Caster",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "name": "Hunting Spear",
            "rating": 8
        }],
        "casting": {
            "name": "Varanic Smiting",
            "type": "spirit",
            "power": 15,
            "rating": 10
        },
        "armor": 5,
        "discipline": 8,
        "talents": ["Varanic Smiting","Spelldancer"]
    },
    "value": 37,
    "race": "Faeler",
    "gender": "M"
},{
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Haradelan Questers"],
    "name": "Questing Knight of Modo",
    "displayName": "Questing Knight of Modo",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "name": "Hunting Spear",
            "rating": 10
        }],
        "range": [{
            "name": "Hunting Spear",
            "rating": 10
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Arboreal","Die Hard","Vicious Strike"],
        "veteran": [{
            "name": "Fighting Spirit",
            "cost": 2
        }],
        "abilities": {
            "endurance": 10,
            "spirit": 10
        }
    },
    "value": 33,
    "race": "Faeler",
    "gender": "M"
},{
    "factions": ["Haradelan Questers","Falkaaran Adventurers","Koronnan Moonsworn","Ravenblade Mercenaries","Trilian Seekers","Urdaggar Tribes of Valor"],
    "primaryFaction": ["Haradelan Questers"],
    "name": "Apprentice Knight of Modo",
    "displayName": "Apprentice Knight of Modo",
    "type": "Standard",
    "stats": {
        "type": "Hero",
        "speed": 6,
        "melee": [{
            "name": "Hunting Spear",
            "rating": 10
        }],
        "armor": 5,
        "discipline": 10,
        "talents": ["Arboreal","Die Hard","Vicious Strike"],
        "abilities": {
            "endurance": 10,
            "spirit": 10
        }
    },
    "value": 26,
    "race": "Faeler",
    "gender": "M"
},{
    "factions": ["Kandoran Deathmasters"],
    "primaryFaction": ["Kandoran Deathmasters"],
    "name": "Deathwail",
    "displayName": "Deathwail",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 7,
        "melee": [{
            "name": "Withering Touch",
            "rating": 12,
            "damage": 4,
            "abilities": ["mag","wth"]
        }],
        "performance": {
            "name": "Ghastly Wails",
            "rating": 8
        },
        "armor": 2,
        "discipline": 12,
        "talents": ["Leader","Combat Performer","Perform[Ghastly Wails, 3]","Spirit","Undead","Wraith","Wraith"],
        "abilities": {
            "spirit": 10
        }
    },
    "value": 48,
    "race": "Faeler",
    "gender": "M"
},{
    "factions": ["Kuzaarik Forgers"],
    "primaryFaction": ["Kuzaarik Forgers"],
    "name": "Arctic Storm",
    "displayName": "Arctic Storm",
    "type": "Leader",
    "stats": {
        "type": "Hero",
        "speed": 5,
        "melee": [{
            "name": "Ice Mace",
            "rating": 12
        }],
        "shield": "S",
        "armor": 6,
        "discipline": 12,
        "talents": ["Leader","Alpine","Die Hard","Runeshield","Shatter"],
        "veteran": [{
            "name": "Conquer",
            "cost": 1
        }],
        "abilities": {
            "endurance": 10,
            "strength": 10
        }
    },
    "value": 39,
    "race": "Kuzaarik",
    "gender": "M"
},{
    "factions": ["Trilian Seekers"],
    "primaryFaction": ["Trilian Seekers"],
    "name": "Shifter",
    "displayName": "Shifter",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 7,
        "melee": [{
            "name": "Long Knife",
            "rating": 6
        }],
        "armor": 2,
        "discipline": 6,
        "talents": ["Wild Magic[d6, Shift]"]
    },
    "value": 9,
    "race": "Trilian",
    "gender": "M"
},{
    "factions": ["The Collective","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Mershael Corsairs","Ravenblade Mercenaries","Traazorite Crusaders","Varkraalan Unchained"],
    "trustedFactions": ["The Collective","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Mershael Corsairs","Ravenblade Mercenaries","Traazorite Crusaders","Varkraalan Unchained"],
    "primaryFaction": ["Wandering Allies"],
    "name": "Standard Bearer",
    "displayName": "Standard Bearer (Rally)",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "name": "Dagger",
            "rating": 6
        }],
        "armor": 4,
        "discipline": 6,
        "talents": ["Protected", "Rally Banner"]
    },
    "value": 11,
    "race": "Faeler",
    "gender": "M"
},{
    "factions": ["The Collective","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Mershael Corsairs","Ravenblade Mercenaries","Traazorite Crusaders","Varkraalan Unchained"],
    "trustedFactions": ["The Collective","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Mershael Corsairs","Ravenblade Mercenaries","Traazorite Crusaders","Varkraalan Unchained"],
    "primaryFaction": ["Wandering Allies"],
    "name": "Standard Bearer",
    "displayName": "Standard Bearer (Steadfast)",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "name": "Dagger",
            "rating": 6
        }],
        "armor": 4,
        "discipline": 6,
        "talents": ["Protected", "Steadfast Banner"]
    },
    "value": 12,
    "race": "Faeler",
    "gender": "M"
},{
    "factions": ["The Collective","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Mershael Corsairs","Ravenblade Mercenaries","Traazorite Crusaders","Varkraalan Unchained"],
    "trustedFactions": ["The Collective","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Mershael Corsairs","Ravenblade Mercenaries","Traazorite Crusaders","Varkraalan Unchained"],
    "primaryFaction": ["Wandering Allies"],
    "name": "Standard Bearer",
    "displayName": "Standard Bearer (Howling)",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "name": "Dagger",
            "rating": 6
        }],
        "armor": 4,
        "discipline": 6,
        "talents": ["Protected", "Howling Banner"]
    },
    "value": 13,
    "race": "Faeler",
    "gender": "M"
},{
    "factions": ["The Collective","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Mershael Corsairs","Ravenblade Mercenaries","Traazorite Crusaders","Varkraalan Unchained"],
    "trustedFactions": ["The Collective","Falkaaran Adventurers","Grular Invaders","Haradelan Questers","Kandoran Deathmasters","Koronnan Moonsworn","Mershael Corsairs","Ravenblade Mercenaries","Traazorite Crusaders","Varkraalan Unchained"],
    "primaryFaction": ["Wandering Allies"],
    "name": "Standard Bearer",
    "displayName": "Standard Bearer (War)",
    "type": "Standard",
    "stats": {
        "type": "Follower",
        "speed": 6,
        "melee": [{
            "name": "Dagger",
            "rating": 6
        }],
        "armor": 4,
        "discipline": 6,
        "talents": ["Protected", "War Banner"]
    },
    "value": 13,
    "race": "Faeler",
    "gender": "M"
}];


export  {Models};
