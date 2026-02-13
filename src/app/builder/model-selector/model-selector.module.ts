import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio'
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';

import { EditModelComponent } from './edit-model.component';
import { ModelSelectorComponent } from './model-selector.component';
import { ModelSelectorService } from './model-selector.service';
// TODO: move to shared module
import { SimpleListPipe } from 'src/app/simplelist.pipe';
import { ComplexListPipe } from 'src/app/complexlist.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule
    ],
    declarations: [
        EditModelComponent,
        ModelSelectorComponent,
        SimpleListPipe,
        ComplexListPipe
    ],
    providers: [
        ModelSelectorService
    ],
    exports: [
        ModelSelectorComponent
    ]
})
export class ModelSelectorModule {}