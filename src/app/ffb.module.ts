import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CommunicatorService } from './communicator.service';
import { ComponentModule } from './component/component.module';
import { FFBComponent } from './ffb.component';
import './ffb.scss';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        ComponentModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    declarations: [
        FFBComponent
    ],
    bootstrap: [
        FFBComponent
    ],
    providers: [
        CommunicatorService
    ]
})
export class AppModule {}