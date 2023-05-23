import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaboCreateComponent } from './cabo-create.component';

const routes: Routes = [
  {
    path: '',
    component: CaboCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaboCreateRoutingModule { }
