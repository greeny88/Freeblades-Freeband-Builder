import { NgModule } from '@angular/core';

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
        DbService,
        LRBService
    ]
})
export class ComponentModule {}