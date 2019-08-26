import { Component, EventEmitter, Output } from '@angular/core';

import template from './freeband-setup.html';

@Component({
    selector: 'freeband-setup',
    template
})
export class FreebandSetupComponent {
    @Output() onOptionsSet = new EventEmitter<any>();
    altLeader : boolean;
    factions : string[];
    freebandLimit : number;
    selectedFaction : string;
    private options : {freebandLimit: number, faction: string, altLeader: boolean};

    constructor() {
        // TODO: change to list based on available factions in model file
        this.factions = [
            'Black Rose Bandits', 
            'Black Thorn Bandits',
            'Demons of Karelon',
            'Eclipse Sisterhood',
            'Falkaaran Adventurers',
            'Grular Invaders',
            'Haradelan Questers',
            'Kandoran Deathmasters',
            'Kuzaarik Forgers',
            'Mershael Corsairs',
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

    optionsSet() {
        this.options = {
            freebandLimit: this.freebandLimit,
            faction: this.selectedFaction,
            altLeader: this.altLeader
        };
        this.onOptionsSet.emit(this.options);
    }

    updateDisabled() {
        return ((this.freebandLimit === undefined || this.freebandLimit < 1) || this.selectedFaction === undefined) || (this.options.altLeader === this.altLeader && this.options.faction === this.selectedFaction && this.options.freebandLimit === this.freebandLimit);
    }
}