import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchCreateComponent } from './switch-create.component';

const routes: Routes = [
  {
    path: '',
    component: SwitchCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchCreateRoutingModule { }
