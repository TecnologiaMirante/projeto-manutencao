import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NobreakEditComponent } from './nobreak-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NobreakEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NobreakEditRoutingModule { }
