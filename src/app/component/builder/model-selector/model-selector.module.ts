import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { ModelSelectorComponent } from './model-selector.component';
import { ModelSelectorService } from './model-selector.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatSelectModule
    ],
    declarations: [
        ModelSelectorComponent
    ],
    providers: [
        ModelSelectorService
    ],
    exports: [
        ModelSelectorComponent
    ]
})
export class ModelSelectorModule {}