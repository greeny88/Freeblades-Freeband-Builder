import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';

import { BuilderComponent, LoadPreviousDialog, LoadJsonFileDialog } from './builder.component';
import { FreebandSetupModule } from './freeband-setup/freeband-setup.module';
import { ModelSelectorModule } from './model-selector/model-selector.module';
import { BuilderRoutingModule } from './builder-routing.module';

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
    exports: [
        BuilderComponent,
        LoadPreviousDialog,
        LoadJsonFileDialog
    ]
})
export class BuilderModule {}