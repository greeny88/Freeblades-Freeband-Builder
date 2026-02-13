import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { CustomModelComponent } from './custom-model.component';
import { CustomModelRoutingModule } from './custom-model-routing.module';
import { CostPredictorService } from './custom-model.service';
import { ModelSelectorService } from '../builder/model-selector/model-selector.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CustomModelRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatCardModule,
        MatProgressSpinnerModule
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