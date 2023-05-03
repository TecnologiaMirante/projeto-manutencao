import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DpsCreateComponent } from './dps-create.component';

const routes: Routes = [
  {
    path: '',
    component: DpsCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DpsCreateRoutingModule { }
