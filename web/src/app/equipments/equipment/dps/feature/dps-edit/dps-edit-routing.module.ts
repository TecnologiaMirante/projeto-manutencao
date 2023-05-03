import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DpsEditComponent } from './dps-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DpsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DpsEditRoutingModule { }
