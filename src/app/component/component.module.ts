import { NgModule } from '@angular/core';

// import { BuilderModule } from './builder/builder.module';
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
    ]
})
export class ComponentModule {}