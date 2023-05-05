import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaustorCreateComponent } from './exaustor-create.component';

const routes: Routes = [
  {
    path: '',
    component: ExaustorCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaustorCreateRoutingModule { }
