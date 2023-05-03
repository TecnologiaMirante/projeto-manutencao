import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisjuntorEditComponent } from './disjuntor-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DisjuntorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisjuntorEditRoutingModule { }
