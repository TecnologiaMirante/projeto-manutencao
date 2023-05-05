import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchEditComponent } from './switch-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SwitchEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchEditRoutingModule { }
