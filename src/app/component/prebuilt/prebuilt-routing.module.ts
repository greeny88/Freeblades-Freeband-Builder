import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrebuiltComponent } from './prebuilt.component';


const routes: Routes = [
  {
    path: '',
    component: PrebuiltComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrebuiltRoutingModule { }
