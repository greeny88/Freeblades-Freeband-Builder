import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

// import { Model } from '../model';
import template from './prebuilt.html';

@Component({
    selector: 'prebuilt',
    template
})
export class PrebuiltComponent {
    // TODO: When freeband is selected, route to builder page and pass along the freeband as a variable
    exampleFreeband: {type: String, models: Object[]};

    constructor(private router: Router) {
        this.exampleFreeband = {
            'type': 'Kuzaarik Forgers',
            'models': [
                {'name': 'Forge Warden'},
                {'name': 'Kyromancer'},
                {'name': 'Hinterguard'},
                {'name': 'Field Agent'},
                {'name': 'Quarreler'},
                {'name': 'Explorer'}
            ]
        };
    }

    freebandSelected() {
        this.router.navigate(['/builder', { freeband: window.btoa(JSON.stringify(this.exampleFreeband)) }]);
    }
}