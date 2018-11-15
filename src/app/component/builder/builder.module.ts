import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';

import { BuilderComponent } from './builder.component';
import { FreebandSetupModule } from './freeband-setup/freeband-setup.module';
import { FreebandStatsModule } from './freeband-stats/freeband-stats.module';
import { ModelSelectorModule } from './model-selector/model-selector.module';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatListModule,
        MatSidenavModule,
        FreebandSetupModule,
        FreebandStatsModule,
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