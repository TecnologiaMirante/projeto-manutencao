import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisjuntorCreateComponent } from './disjuntor-create.component';

const routes: Routes = [
  {
    path: '',
    component: DisjuntorCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisjuntorCreateRoutingModule { }
