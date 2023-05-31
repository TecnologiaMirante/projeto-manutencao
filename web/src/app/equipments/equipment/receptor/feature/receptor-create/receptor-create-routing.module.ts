import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptorCreateComponent } from './receptor-create.component';

const routes: Routes = [
  {
    path: '',
    component: ReceptorCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptorCreateRoutingModule { }
