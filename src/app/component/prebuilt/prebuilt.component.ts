import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { CommunicatorService } from '../communicator.service';
import template from './prebuilt.html';

@Component({
    selector: 'prebuilt',
    template
})
export class PrebuiltComponent {
    // TODO: When freeband is selected, route to builder page and pass along the freeband as a variable
    exampleFreeband: {faction: String, freebandLimit: number, altLeader: boolean, models: Object[]};
    commSubscription: any;

    constructor(private router: Router, private commService: CommunicatorService) {
        this.exampleFreeband = {
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
        };
    }

    freebandSelected() {
        this.commService.prebuiltFreeband = this.exampleFreeband;
        // this.commService.sendMessage('builder', this.exampleFreeband);
        // this.commService.messageEvent.next({'to': 'builder', 'content': this.exampleFreeband});
        this.router.navigate(['/builder']);
    }
}