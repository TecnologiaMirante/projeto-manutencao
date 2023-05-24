import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntenaCreateComponent } from './antena-create.component';

const routes: Routes = [
  {
    path: '',
    component: AntenaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntenaCreateRoutingModule { }
