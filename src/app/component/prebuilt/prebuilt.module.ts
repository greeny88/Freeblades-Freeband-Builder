import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { PrebuiltComponent } from './prebuilt.component';
import { PrebuiltRoutingModule } from './prebuilt-routing.module';
import './prebuilt.scss';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
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