import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FreebandSetupComponent } from './freeband-setup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
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