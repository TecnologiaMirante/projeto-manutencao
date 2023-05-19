import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinadorCreateComponent } from './combinador-create.component';

const routes: Routes = [
  {
    path: '',
    component: CombinadorCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombinadorCreateRoutingModule { }
