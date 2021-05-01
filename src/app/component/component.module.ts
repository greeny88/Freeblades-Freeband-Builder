import { NgModule } from '@angular/core';

// import { BuilderModule } from './builder/builder.module';
import { CommunicatorService } from './communicator.service';
import { ComponentRoutingModule } from './component-routing.module'

// TODO: define routing for each component

@NgModule({
    imports: [
        // BuilderModule,
        ComponentRoutingModule
    ],
    exports: [
        // BuilderModule,
        ComponentRoutingModule
    ],
    providers: [
        CommunicatorService
    ]
})
export class ComponentModule {}