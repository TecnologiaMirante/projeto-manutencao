import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinadorEditComponent } from './combinador-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CombinadorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombinadorEditRoutingModule { }
