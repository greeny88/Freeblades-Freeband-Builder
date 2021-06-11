import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { PrebuiltComponent } from './prebuilt.component';
import { PrebuiltRoutingModule } from './prebuilt-routing.module';
import './prebuilt.scss';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        PrebuiltRoutingModule
    ],
    declarations: [
        PrebuiltComponent
    ],
    exports: [
        PrebuiltComponent
    ]
})
export class PrebuiltModule {}