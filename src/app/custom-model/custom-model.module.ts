import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomModelComponent } from './custom-model.component';
import { CustomModelRoutingModule } from './custom-model-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CustomModelRoutingModule
    ],
    declarations: [
        CustomModelComponent
    ],
    exports: [
        CustomModelComponent
    ]
})
export class CustomModelModule {}