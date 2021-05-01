import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommunicatorService } from '../../communicator.service';
import template from './freeband-setup.html';

@Component({
    selector: 'freeband-setup',
    template
})
export class FreebandSetupComponent {
    @Input() selectedOptions : Object;
    @Output() onOptionsSet = new EventEmitter<any>();
    altLeader : boolean;
    factions : string[];
    freebandLimit : number;
    selectedFaction : string;
    private options : {freebandLimit: number, faction: string, altLeader: boolean};
    private disallowedAltLeadersFactions: String[] = [
        'Darkgrove Demons',
        'Demons of Karelon',
        'Haradelan Questers',
        'Koronnan Moonsworn',
        'Ravenblade Mercenaries'
    ];
    commSubscription: any;

    constructor(private commService: CommunicatorService) {
        // TODO: change to list based on available factions in model file
        this.factions = [
            'Black Rose Bandits', 
            'Black Thorn Bandits',
            'Darkgrove Demons',
            'Demons of Karelon',
            'Eclipse Sisterhood',
            'Falkaaran Adventurers',
            'Grular Invaders',
            'Haradelan Questers',
            'Kandoran Deathmasters',
            'Koronnan Moonsworn',
            'Kuzaarik Forgers',
            'Mershael Corsairs',
            'Ravenblade Mercenaries',
            'Shakrim Wavestalkers',
            'Traazorite Crusaders',
            'Trilian Seekers',
            'Urdaggar Tribes of Valor'
        ];
        this.altLeader = false;
        this.options = {
            freebandLimit: undefined,
            faction: undefined,
            altLeader: false
        };
    }

    ngOnChanges() {
        // console.log('setup-ngOnChanges');
        if (this.selectedOptions) {
            this.freebandLimit = this.selectedOptions['freebandLimit'];
            this.selectedFaction = this.selectedOptions['faction'];
            this.altLeader = this.selectedOptions['altLeader'];
            this.optionsSet();
        }
    }

    optionsSet() {
        // console.log('setup-optionsSet');
        this.options = {
            freebandLimit: this.freebandLimit,
            faction: this.selectedFaction,
            altLeader: this.altLeader && this.disallowedAltLeadersFactions.indexOf(this.selectedFaction) < 0
        };
        // console.log(this.options);
        // console.log(this.onOptionsSet);
        this.onOptionsSet.emit(this.options);
    }

    updateDisabled() {
        return ((this.freebandLimit === undefined || this.freebandLimit < 1) || this.selectedFaction === undefined) || (this.options.altLeader === this.altLeader && this.options.faction === this.selectedFaction && this.options.freebandLimit === this.freebandLimit);
    }
}