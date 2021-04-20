import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    {
        path: 'builder',
        loadChildren: () => import('./builder/builder.module').then(m => m.BuilderModule)
    },
    {
        path: 'prebuilt',
        loadChildren: () => import('./prebuilt/prebuilt.module').then(m => m.PrebuiltModule)
    },
    {
        path: '',
        redirectTo: 'builder',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        PageNotFoundComponent
    ]
})
export class ComponentRoutingModule {}
