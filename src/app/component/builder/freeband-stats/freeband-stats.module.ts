import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FreebandStatsComponent } from './freeband-stats.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        FreebandStatsComponent
    ],
    exports: [
        FreebandStatsComponent
    ]
})
export class FreebandStatsModule {}