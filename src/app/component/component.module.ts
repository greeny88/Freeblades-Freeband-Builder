import { NgModule } from '@angular/core';

import { BuilderModule } from './builder/builder.module';

@NgModule({
    imports: [
        BuilderModule
    ],
    exports: [
        BuilderModule
    ]
})
export class ComponentModule {}