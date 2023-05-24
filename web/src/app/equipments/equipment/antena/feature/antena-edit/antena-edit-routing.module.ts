import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntenaEditComponent } from './antena-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AntenaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntenaEditRoutingModule { }
