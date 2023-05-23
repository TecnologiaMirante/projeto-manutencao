import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaboEditComponent } from './cabo-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CaboEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaboEditRoutingModule { }
