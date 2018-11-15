import { Component, EventEmitter, Output } from '@angular/core';

import template from './freeband-setup.html';

@Component({
    selector: 'freeband-setup',
    template
})
export class FreebandSetupComponent {
    @Output() onFactionChange = new EventEmitter<any>();
    @Output() onLimitChange = new EventEmitter<any>();
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
    }
    factionChanged() {
        console.log('factionChanged');
        this.onFactionChange.emit(this.selectedFaction);
    }
    limitChanged() {
        console.log('limitChanged');
        this.onLimitChange.emit(this.freebandLimit);
    }
}