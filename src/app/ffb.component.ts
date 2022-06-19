import { Component, NgZone, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CommunicatorService } from './communicator.service';

import template from './ffb.html';

@Component({
    selector: 'freeband-builder',
    template
})
export class FFBComponent {
    @ViewChild('sidenav') sidenav: MatSidenav;

    constructor(private commService: CommunicatorService, private zone: NgZone, private snackBar: MatSnackBar) {}

    ngOnInit() {
        this.commService.closeNavTrigger().subscribe(() => this.sidenav.close());
        
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.getRegistration('service-worker.js').then(registration => {
                    registration.onupdatefound = (event) => {
                        this.zone.run(() => {
                            const snackRef = this.snackBar.open('New version of app available', 'Refresh', {panelClass:'refresh-page'});
                            snackRef.onAction().subscribe(() => location.reload());
                        });
                    }
                })
            });
        }
    }
}