import {Factions} from 'src/app/model';

const PreBuiltFreebands: {name:string, faction:typeof Factions[number], freebandLimit:number, altLeader:boolean, models:{displayName: string, type?: string}[]}[] = [{
    'name': 'Kuzaarik Starter Set',
    'faction': 'Kuzaarik Forgers',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Forge Warden', 'type': 'Leader'},
        {'displayName': 'Kryomancer', 'type': 'Caster'},
        {'displayName': 'Hinterguard'},
        {'displayName': 'Field Agent'},
        {'displayName': 'Quarreler'},
        {'displayName': 'Explorer'}
    ]
}, {
    'name': 'Azura Starter Set',
    'faction': 'Azura Windborne',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Skyrider', 'type': 'Leader'},
        {'displayName': 'Stormspeaker', 'type': 'Caster'},
        {'displayName': 'Squall'},
        {'displayName': 'Whirlwind'},
        {'displayName': 'Cloudchaser'},
        {'displayName': 'Mistral'}
    ]
}, {
    'name': 'Black Rose Starter Set',
    'faction': 'Black Rose Bandits',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Black Rose', 'type': 'Leader'},
        {'displayName': 'Enchantress', 'type': 'Caster'},
        {'displayName': 'Duelist'},
        {'displayName': 'Headhunter'},
        {'displayName': 'Rustler'},
        {'displayName': 'Outlaw'}
    ]
}, {
    'name': 'Black Thorn Starter Set',
    'faction': 'Black Thorn Bandits',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Black Thorn', 'type': 'Leader'},
        {'displayName': 'Illusionist', 'type': 'Caster'},
        {'displayName': 'Huskarl'},
        {'displayName': 'Bodyguard'},
        {'displayName': 'Thief'},
        {'displayName': 'Outlaw'}
    ]
}, {
    'name': 'Haradelan Starter Set',
    'faction': 'Haradelan Questers',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'High Questor of Tahnar', 'type': 'Leader'},
        {'displayName': 'Fist of Vidunar', 'type': 'Caster'},
        {'displayName': 'Apprentice Knight of Barek'},
        {'displayName': 'Apprentice Knight of Tahnar'},
        {'displayName': 'Militia Spearman'},
        {'displayName': 'Muster Thresher'},
        {'displayName': 'Muster Archer'}
    ]
}, {
    'name': 'Demons Starter Set',
    'faction': 'Demons of Karelon',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Azalakar', 'type': 'Leader'},
        {'displayName': 'Mokruhl', 'type': 'Caster'},
        {'displayName': 'Saryad'},
        {'displayName': 'Borgat'},
        {'displayName': 'Skrot'},
        {'displayName': 'Skrot'}
    ]
}, {
    'name': 'Grular Starter Set (Old)',
    'faction': 'Grular Invaders',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Kor-Khan (Dismounted)', 'type': 'Leader'},
        {'displayName': 'Warlock (Dismounted)', 'type': 'Caster'},
        {'displayName': 'Marauder (Mounted)'},
        {'displayName': 'Gadarl'},
        {'displayName': 'Krang'},
        {'displayName': 'Bludgeoneer'}
    ]
}, {
    'name': 'Grular Starter Set',
    'faction': 'Grular Invaders',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Kor-Khan (Mounted)', 'type': 'Leader'},
        {'displayName': 'Warlock (Mounted)', 'type': 'Caster'},
        {'displayName': 'Impaler (Mounted)'},
        {'displayName': 'Raider (Mounted)'},
        {'displayName': 'Raider (Mounted)'}
    ]
}, {
    'name': 'Eclipse Starter Set',
    'faction': 'Eclipse Sisterhood',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Nemesis', 'type': 'Leader'},
        {'displayName': 'Suneater', 'type': 'Caster'},
        {'displayName': 'Shadow Dancer'},
        {'displayName': 'Secret Sister'},
        {'displayName': 'Rebel Maiden'},
        {'displayName': 'Throatseeker'}
    ]
}, {
    'name': 'Falkaaran Starter Set',
    'faction': 'Falkaaran Adventurers',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Jendal Bladeseeker', 'type': 'Leader'},
        {'displayName': 'Fire Wizard', 'type': 'Caster'},
        {'displayName': 'Karadal Bladesister'},
        {'displayName': 'Knight Defender'},
        {'displayName': 'Pikeman'},
        {'displayName': 'Sailor'}
    ]
}, {
    'name': 'Kandoran Starter Set',
    'faction': 'Kandoran Deathmasters',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Oppressor', 'type': 'Leader'},
        {'displayName': 'Jackal-Priest', 'type': 'Caster'},
        {'displayName': 'Krayech\'s Reaper'},
        {'displayName': 'Awakened'},
        {'displayName': 'Levy Spearman'},
        {'displayName': 'Wretch'}
    ]
}, {
    'name': 'Koronnan Starter Set',
    'faction': 'Koronnan Moonsworn',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Moons Priest', 'type': 'Leader'},
        {'displayName': 'Black Spear'},
        {'displayName': 'Koromen\'s Shadow'},
        {'displayName': 'Koronnan Bladesister'},
        {'displayName': 'Red Spear'},
        {'displayName': 'Red Archer'}
    ]
}, {
    'name': 'Mershael Starter Set',
    'faction': 'Mershael Corsairs',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Shaikan', 'type': 'Leader'},
        {'displayName': 'Mender', 'type': 'Caster'},
        {'displayName': 'Reaver\'s Kindred'},
        {'displayName': 'Kayhar'},
        {'displayName': 'Sentinel'},
        {'displayName': 'Seafarer'}
    ]
}, {
    'name': 'Shakrim Starter Set',
    'faction': 'Shakrim Wavestalkers',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Steel Fang', 'type': 'Leader'},
        {'displayName': 'Nerodix', 'type': 'Caster'},
        {'displayName': 'Shellback'},
        {'displayName': 'Viperon'},
        {'displayName': 'Spitter'},
        {'displayName': 'Tilik'}
    ]
}, {
    'name': 'Trilian Starter Set',
    'faction': 'Trilian Seekers',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Starseeker', 'type': 'Leader'},
        {'displayName': 'Treespeaker', 'type': 'Caster'},
        {'displayName': 'Enforcer'},
        {'displayName': 'Tree Runner'},
        {'displayName': 'Wanderer'},
        {'displayName': 'Wanderer'}
    ]
}, {
    'name': 'Urdaggar(Valor) Starter Set',
    'faction': 'Urdaggar Tribes of Valor',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Wolfkarl', 'type': 'Leader'},
        {'displayName': 'Bear Mystic', 'type': 'Caster'},
        {'displayName': 'Boar Warrior'},
        {'displayName': 'Berserker'},
        {'displayName': 'Slinger'},
        {'displayName': 'Unproven'}
    ]
}, {
    'name': 'Urdaggar(Ruin) Starter Set',
    'faction': 'Urdaggar Tribes of Ruin',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Dark Herald', 'type': 'Leader'},
        {'displayName': 'Destroyer'},
        {'displayName': 'Predator'},
        {'displayName': 'Tangler'},
        {'displayName': 'War Jackal'},
        {'displayName': 'Thralls'}
    ]
}, {
    'name': 'Traazorite Starter Set',
    'faction': 'Traazorite Crusaders',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Keshark (Mounted)', 'type': 'Leader'},
        {'displayName': 'Sunbringer', 'type': 'Caster'},
        {'displayName': 'Packmaster'},
        {'displayName': 'Legionnaire'},
        {'displayName': 'Vezarin'},
        {'displayName': 'Vezarin'}
    ]
}, {
    'name': 'Varkraalan Starter Set',
    'faction': 'Varkraalan Unchained',
    'freebandLimit': 150,
    'altLeader': false,
    'models': [
        {'displayName': 'Dervish', 'type': 'Leader'},
        {'displayName': 'Vuan Pang Monk', 'type': 'Caster'},
        {'displayName': 'Jade Changeseeker'},
        {'displayName': 'Zevriss'},
        {'displayName': 'State Spearman'},
        {'displayName': 'State Archer'}
    ]
}];

export  { PreBuiltFreebands };