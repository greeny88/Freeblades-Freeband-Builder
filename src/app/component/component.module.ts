import { NgModule } from '@angular/core';

import { CommunicatorService } from './communicator.service';
import { ComponentRoutingModule } from './component-routing.module'
import { LRBService } from './lrb.service';

@NgModule({
    imports: [
        ComponentRoutingModule
    ],
    exports: [
        ComponentRoutingModule
    ],
    providers: [
        CommunicatorService,
        LRBService
    ]
})
export class ComponentModule {}