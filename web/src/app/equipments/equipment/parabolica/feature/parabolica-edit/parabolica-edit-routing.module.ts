import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParabolicaEditComponent } from './parabolica-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ParabolicaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParabolicaEditRoutingModule { }
