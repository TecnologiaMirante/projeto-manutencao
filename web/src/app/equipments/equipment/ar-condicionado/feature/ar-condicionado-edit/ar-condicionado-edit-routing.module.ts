import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArCondicionadoEditComponent } from './ar-condicionado-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ArCondicionadoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArCondicionadoEditRoutingModule { }
