import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomModelComponent } from './custom-model.component';


const routes: Routes = [
  {
    path: '',
    component: CustomModelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomModelRoutingModule { }
