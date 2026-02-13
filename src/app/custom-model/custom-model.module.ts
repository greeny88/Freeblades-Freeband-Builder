import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';


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