import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

import { BuilderComponent, LoadPreviousDialog } from './builder.component';
import { BuilderRoutingModule } from './builder-routing.module';
import { FreebandSetupModule } from './freeband-setup/freeband-setup.module';
import { ModelSelectorModule } from './model-selector/model-selector.module';
import './builder.scss';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatListModule,
        BuilderRoutingModule,
        FreebandSetupModule,
        ModelSelectorModule
    ],
    declarations: [
        BuilderComponent,
        LoadPreviousDialog
    ],
    entryComponents: [
        LoadPreviousDialog
    ],
    exports: [
        BuilderComponent,
        LoadPreviousDialog
    ]
})
export class BuilderModule {}