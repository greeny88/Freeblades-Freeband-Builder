import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    {
        path: 'builder',
        loadChildren: () => import(/* webpackPrefetch: true *//* webpackChunkName: "builder" */'./builder/builder.module').then(m => m.BuilderModule)
    },
    {
        path: 'prebuilt',
        loadChildren: () => import(/* webpackPrefetch: true *//* webpackChunkName: "prebuilt" */'./prebuilt/prebuilt.module').then(m => m.PrebuiltModule)
    },
    {
        path: '',
        loadChildren: () => import(/* webpackPrefetch: true *//* webpackChunkName: "builder" */'./builder/builder.module').then(m => m.BuilderModule)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
    declarations: [
        PageNotFoundComponent
    ]
})
export class AppRoutingModule { }
