import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CustomModelComponent } from './custom-model.component';
import { CustomModelRoutingModule } from './custom-model-routing.module';
import { CostPredictorService } from './custom-model.service';
import { ModelSelectorService } from '../builder/model-selector/model-selector.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CustomModelRoutingModule
    ],
    declarations: [
        CustomModelComponent
    ],
    providers: [
        CostPredictorService,
        ModelSelectorService
    ],
    exports: [
        CustomModelComponent
    ]
})
export class CustomModelModule {}