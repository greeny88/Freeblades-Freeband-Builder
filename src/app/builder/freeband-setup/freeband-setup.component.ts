import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { CommunicatorService } from '../../communicator.service';

@Component({
    selector: 'freeband-setup',
    templateUrl: './freeband-setup.component.html'
})
export class FreebandSetupComponent implements OnInit {
    @Input() selectedOptions : {freebandLimit: number, faction: string, altLeader: boolean} | undefined = undefined;
    @Output() onOptionsSet = new EventEmitter<any>();
    altLeader : boolean;
    factions : string[];
    freebandLimit : number = 0;
    selectedFaction : string = '';
    private options : {freebandLimit: number | undefined, faction: string | undefined, altLeader: boolean};
    disallowedAltLeadersFactions: String[] = [
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
            'The Collective',
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
            'Urdaggar Tribes of Ruin',
            'Urdaggar Tribes of Valor'
        ];
        this.altLeader = false;
        this.options = {
            freebandLimit: undefined,
            faction: undefined,
            altLeader: false
        };
    }
    ngOnInit(): void {
        
    }

    ngOnChanges() {
        if (this.selectedOptions) {
            this.freebandLimit = this.selectedOptions['freebandLimit'];
            this.selectedFaction = this.selectedOptions['faction'];
            this.altLeader = this.selectedOptions['altLeader'];
            this.optionsSet();
        }
    }

    optionsSet() {
        this.options = {
            freebandLimit: this.freebandLimit,
            faction: this.selectedFaction,
            altLeader: this.altLeader && this.disallowedAltLeadersFactions.indexOf(this.selectedFaction) < 0
        };
        this.onOptionsSet.emit(this.options);
    }

    updateDisabled() {
        return ((this.freebandLimit === undefined || this.freebandLimit < 1) || this.selectedFaction === undefined) || (this.options.altLeader === this.altLeader && this.options.faction === this.selectedFaction && this.options.freebandLimit === this.freebandLimit);
    }
}