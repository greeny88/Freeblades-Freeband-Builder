import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BuilderComponent } from './builder.component';
import { FreebandSetupModule } from './freeband-setup/freeband-setup.module';
import { FreebandStatsModule } from './freeband-stats/freeband-stats.module';
import { ModelSelectorModule } from './model-selector/model-selector.module';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
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