import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArCondicionadoCreateComponent } from './ar-condicionado-create.component';

const routes: Routes = [
  {
    path: '',
    component: ArCondicionadoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArCondicionadoCreateRoutingModule { }
