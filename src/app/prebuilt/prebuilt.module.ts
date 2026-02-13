import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';

import { PrebuiltComponent } from './prebuilt.component';
import { PrebuiltRoutingModule } from './prebuilt-routing.module';

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