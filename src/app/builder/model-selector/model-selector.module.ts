import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select';

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
    entryComponents: [
        EditModelComponent
    ],
    exports: [
        ModelSelectorComponent
    ]
})
export class ModelSelectorModule {}