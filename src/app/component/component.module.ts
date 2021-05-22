import { NgModule } from '@angular/core';

import { CommunicatorService } from './communicator.service';
import { ComponentRoutingModule } from './component-routing.module'
import { DbService } from './db.service';
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
        DbService,
        LRBService
    ]
})
export class ComponentModule {}