import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TorreEditComponent } from './torre-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TorreEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorreEditRoutingModule { }
