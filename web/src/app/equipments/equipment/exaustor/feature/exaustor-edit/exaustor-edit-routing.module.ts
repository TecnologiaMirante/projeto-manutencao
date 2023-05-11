import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaustorEditComponent } from './exaustor-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ExaustorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaustorEditRoutingModule { }
