import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { EditModelComponent } from './edit-model.component';
import { ModelSelectorComponent } from './model-selector.component';
import { ModelSelectorService } from './model-selector.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule
    ],
    declarations: [
        EditModelComponent,
        ModelSelectorComponent
    ],
    providers: [
        ModelSelectorService
    ],
    entryComponents: [
        EditModelComponent
    ],
    exports: [
        ModelSelectorComponent
    ]
})
export class ModelSelectorModule {}