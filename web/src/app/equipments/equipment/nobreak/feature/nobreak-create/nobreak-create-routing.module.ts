import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NobreakCreateComponent } from './nobreak-create.component';

const routes: Routes = [
  {
    path: '',
    component: NobreakCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NobreakCreateRoutingModule { }
