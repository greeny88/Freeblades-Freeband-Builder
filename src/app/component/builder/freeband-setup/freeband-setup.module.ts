import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FreebandSetupComponent } from './freeband-setup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatCheckboxModule,
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