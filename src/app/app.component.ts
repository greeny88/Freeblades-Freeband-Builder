import { Component, NgZone, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { SwUpdate } from '@angular/service-worker';

import { CommunicatorService } from './communicator.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild('sidenav') sidenav: MatSidenav | undefined = undefined;

    constructor(private commService: CommunicatorService, private snackBar: MatSnackBar, private updates: SwUpdate) {
        this.updates.versionUpdates.subscribe(evt => {
            if (evt.type === 'VERSION_READY') {
                const snackRef = this.snackBar.open('New version of app available', 'Refresh', { panelClass: 'refresh-page' });
                snackRef.onAction().subscribe(() => location.reload());
            }
        });
    }

    ngOnInit() {
        this.commService.closeNavTrigger().subscribe(() => {
            if (this.sidenav) {
                this.sidenav.close();
            }
        });
    }
}
