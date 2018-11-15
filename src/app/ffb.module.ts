import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentModule } from './component/component.module';
import { FFBComponent } from './ffb.component';
import './ffb.scss';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ComponentModule
    ],
    declarations: [
        FFBComponent
    ],
    bootstrap: [
        FFBComponent
    ]
})
export class AppModule {}