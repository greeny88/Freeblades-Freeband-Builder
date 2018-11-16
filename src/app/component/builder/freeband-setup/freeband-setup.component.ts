import { Component, EventEmitter, Output } from '@angular/core';

import template from './freeband-setup.html';

@Component({
    selector: 'freeband-setup',
    template
})
export class FreebandSetupComponent {
    @Output() onAltLeaderChange = new EventEmitter<any>();
    @Output() onFactionChange = new EventEmitter<any>();
    @Output() onLimitChange = new EventEmitter<any>();
    altLeader : boolean;
    factions : string[];
    freebandLimit : number;
    selectedFaction : string;

    constructor() {
        this.factions = [
            'Black Rose Bandits', 
            'Black Thorn Bandits',
            'Kuzaarik',
            'Traazorite'
        ];
        this.altLeader = false;
    }

    enableAlternateLeader() {
        this.onAltLeaderChange.emit(this.altLeader);
    }

    factionChanged() {
        this.onFactionChange.emit(this.selectedFaction);
    }

    limitChanged() {
        this.onLimitChange.emit(this.freebandLimit);
    }
}