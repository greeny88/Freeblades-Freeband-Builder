import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FreebandSetupComponent } from './freeband-setup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [
        FreebandSetupComponent
    ],
    exports: [
        FreebandSetupComponent
    ]
})
export class FreebandSetupModule {}