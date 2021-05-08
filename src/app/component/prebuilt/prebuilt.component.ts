import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { CommunicatorService } from '../communicator.service';
import template from './prebuilt.html';

interface Freeband {name: String, faction: String, freebandLimit: number, altLeader: boolean, models: Object[]};

@Component({
    selector: 'prebuilt',
    template
})
export class PrebuiltComponent {
    // TODO: build ability to sort/filter list of freebands
    prebuiltFreebands: Freeband[];

    constructor(private router: Router, private commService: CommunicatorService) { }

    ngOnInit() {
        this.prebuiltFreebands = [{
            'name': 'Kuzaarik Starter Set',
            'faction': 'Kuzaarik Forgers',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Forge Warden', 'type': 'Leader'},
                {'name': 'Kryomancer', 'type': 'Caster'},
                {'name': 'Hinterguard'},
                {'name': 'Field Agent'},
                {'name': 'Quarreler'},
                {'name': 'Explorer'}
            ]
        }, {
            'name': 'Black Rose Starter Set',
            'faction': 'Black Rose Bandits',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Black Rose', 'type': 'Leader'},
                {'name': 'Enchantress', 'type': 'Caster'},
                {'name': 'Duelist'},
                {'name': 'Head Hunter'},
                {'name': 'Rustler'},
                {'name': 'Outlaw'}
            ]
        }, {
            'name': 'Black Thorn Starter Set',
            'faction': 'Black Thorn Bandits',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Black Thorn', 'type': 'Leader'},
                {'name': 'Illusionist', 'type': 'Caster'},
                {'name': 'Huskarl'},
                {'name': 'Bodyguard'},
                {'name': 'Thief'},
                {'name': 'Outlaw'}
            ]
        }, {
            'name': 'Haradelan Starter Set',
            'faction': 'Haradelan Questers',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'High Questor of Tahnar', 'type': 'Leader'},
                {'name': 'Fist of Vidunar', 'type': 'Caster'},
                {'name': 'Apprentice Knight of Barek'},
                {'name': 'Apprentice Knight of Tahnar'},
                {'name': 'Militia Spearman'},
                {'name': 'Muster Thresher'},
                {'name': 'Muster Archer'}
            ]
        }, {
            'name': 'Demons Starter Set',
            'faction': 'Demons of Karelon',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Azalakar', 'type': 'Leader'},
                {'name': 'Mokruhl', 'type': 'Caster'},
                {'name': 'Saryad'},
                {'name': 'Borgat'},
                {'name': 'Skrot'},
                {'name': 'Skrot'}
            ]
        }, {
            'name': 'Grular Starter Set',
            'faction': 'Grular Invaders',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Kor-Khan (Dismounted)', 'type': 'Leader'},
                {'name': 'Warlock (Dismounted)', 'type': 'Caster'},
                {'name': 'Marauder (Mounted)'},
                {'name': 'Gadarl'},
                {'name': 'Krang'},
                {'name': 'Bludgeoneer'}
            ]
        }, {
            'name': 'Eclipse Starter Set',
            'faction': 'Eclipse Sisterhood',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Nemesis', 'type': 'Leader'},
                {'name': 'Suneater', 'type': 'Caster'},
                {'name': 'Shadow Dancer'},
                {'name': 'Secret Sister'},
                {'name': 'Rebel Maiden'},
                {'name': 'Throatseeker'}
            ]
        }, {
            'name': 'Falkaaran Starter Set',
            'faction': 'Falkaaran Adventurers',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Jendal Bladeseeker', 'type': 'Leader'},
                {'name': 'Fire Wizard', 'type': 'Caster'},
                {'name': 'Karadal Bladesister'},
                {'name': 'Knight Defender'},
                {'name': 'Pikeman'},
                {'name': 'Sailor'}
            ]
        }, {
            'name': 'Kandoran Starter Set',
            'faction': 'Kandoran Deathmasters',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Oppressor', 'type': 'Leader'},
                {'name': 'Jackal-Priest', 'type': 'Caster'},
                {'name': 'Krayech\'s Reaper'},
                {'name': 'Awakened'},
                {'name': 'Levy Spearman'},
                {'name': 'Wretch'}
            ]
        }, {
            'name': 'Mershael Starter Set',
            'faction': 'Mershael Corsairs',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Shaikan', 'type': 'Leader'},
                {'name': 'Mender', 'type': 'Caster'},
                {'name': 'Reaver\'s Kindred'},
                {'name': 'Kayhar'},
                {'name': 'Sentinel'},
                {'name': 'Seafarer'}
            ]
        }, {
            'name': 'Shakrim Starter Set',
            'faction': 'Shakrim Wavestalkers',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Steel Fang', 'type': 'Leader'},
                {'name': 'Nerodix', 'type': 'Caster'},
                {'name': 'Shellback'},
                {'name': 'Viperon'},
                {'name': 'Spitter'},
                {'name': 'Tilik'}
            ]
        }, {
            'name': 'Trilian Starter Set',
            'faction': 'Trilian Seekers',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Starseeker', 'type': 'Leader'},
                {'name': 'Treespeaker', 'type': 'Caster'},
                {'name': 'Enforcer'},
                {'name': 'Tree Runner'},
                {'name': 'Wanderer'},
                {'name': 'Wanderer'}
            ]
        }, {
            'name': 'Urdaggar Starter Set',
            'faction': 'Urdaggar Tribes of Valor',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Wolfkarl', 'type': 'Leader'},
                {'name': 'Bear Mystic', 'type': 'Caster'},
                {'name': 'Boar Warrior'},
                {'name': 'Berserker'},
                {'name': 'Slinger'},
                {'name': 'Unproven'}
            ]
        }, {
            'name': 'Traazorite Starter Set',
            'faction': 'Traazorite Crusaders',
            'freebandLimit': 150,
            'altLeader': false,
            'models': [
                {'name': 'Keshark (Mounted)', 'type': 'Leader'},
                {'name': 'Sunbringer', 'type': 'Caster'},
                {'name': 'Packmaster'},
                {'name': 'Legionnaire'},
                {'name': 'Vezarin'},
                {'name': 'Vezarin'}
            ]
        }];
        this.prebuiltFreebands.sort((a,b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }

    freebandSelected(freeband: Freeband) {
        this.commService.prebuiltFreeband = freeband;
        this.router.navigate(['/builder']);
    }
}