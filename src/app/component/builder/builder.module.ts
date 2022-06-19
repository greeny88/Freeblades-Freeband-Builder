import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BuilderComponent, LoadPreviousDialog, LoadJsonFileDialog } from './builder.component';
import { BuilderRoutingModule } from './builder-routing.module';
import { FreebandSetupModule } from './freeband-setup/freeband-setup.module';
import { ModelSelectorModule } from './model-selector/model-selector.module';
import './builder.scss';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatListModule,
        MatSnackBarModule,
        BuilderRoutingModule,
        FreebandSetupModule,
        ModelSelectorModule
    ],
    declarations: [
        BuilderComponent,
        LoadPreviousDialog,
        LoadJsonFileDialog
    ],
    entryComponents: [
        LoadPreviousDialog,
        LoadJsonFileDialog
    ],
    exports: [
        BuilderComponent,
        LoadPreviousDialog,
        LoadJsonFileDialog
    ]
})
export class BuilderModule {}