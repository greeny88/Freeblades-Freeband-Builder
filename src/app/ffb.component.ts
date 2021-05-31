import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { CommunicatorService } from './communicator.service';

import template from './ffb.html';

@Component({
    selector: 'freeband-builder',
    template
})
export class FFBComponent {
    @ViewChild('sidenav') sidenav: MatSidenav;

    constructor(private commService: CommunicatorService) {}

    ngOnInit() {
        this.commService.closeNavTrigger().subscribe(() => this.sidenav.close());
    }
}