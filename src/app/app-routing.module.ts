import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    {
        path: 'builder',
        loadChildren: () => import('./builder/builder.module').then(m => m.BuilderModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'prebuilt',
        loadChildren: () => import('./prebuilt/prebuilt.module').then(m => m.PrebuiltModule)
    },
    {
        path: 'custom-model',
        loadChildren: () => import('./custom-model/custom-model.module').then(m => m.CustomModelModule)
    },
    {
        path: '',
        loadChildren: () => import('./builder/builder.module').then(m => m.BuilderModule)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), RouterLinkActive],
    exports: [RouterModule],
    declarations: [
        PageNotFoundComponent
    ]
})
export class AppRoutingModule { }
