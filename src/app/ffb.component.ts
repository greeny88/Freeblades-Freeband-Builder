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
                    if (registration) {
                        registration.onupdatefound = (event) => {
                            this.showRefresh();
                        }
                    }
                });
                navigator.serviceWorker.getRegistrations().then(registrations => {
                    for (let registration of registrations) {
                        if (!registration || !registration.active) {
                            return;
                        }
                        if (!registration.active.scriptURL.includes('service-worker.js')) {
                            console.log('Found other service worker.');
                            registration.unregister();
                            this.showRefresh();
                        }
                    }
                });
            });
        }
    }

    private showRefresh() {
        this.zone.run(() => {
            const snackRef = this.snackBar.open('New version of app available', 'Refresh', {panelClass:'refresh-page'});
            snackRef.onAction().subscribe(() => location.reload());
        });
    }
}