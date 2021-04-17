import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrebuiltComponent } from './prebuilt.component';
import './prebuilt.scss';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PrebuiltComponent
    ],
    exports: [
        PrebuiltComponent
    ]
})
export class PrebuiltModule {}