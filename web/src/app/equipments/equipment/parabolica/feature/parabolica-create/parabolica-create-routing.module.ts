import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParabolicaCreateComponent } from './parabolica-create.component';

const routes: Routes = [
  {
    path: '',
    component: ParabolicaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParabolicaCreateRoutingModule { }
