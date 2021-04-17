import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

import { BuilderComponent } from './builder.component';
import { FreebandSetupModule } from './freeband-setup/freeband-setup.module';
import { ModelSelectorModule } from './model-selector/model-selector.module';
import './builder.scss';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatListModule,
        FreebandSetupModule,
        ModelSelectorModule
    ],
    declarations: [
        BuilderComponent
    ],
    exports: [
        BuilderComponent
    ]
})
export class BuilderModule {}