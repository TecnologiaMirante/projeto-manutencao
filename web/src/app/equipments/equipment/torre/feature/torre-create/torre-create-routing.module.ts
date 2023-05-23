import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TorreCreateComponent } from './torre-create.component';

const routes: Routes = [
  {
    path: '',
    component: TorreCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorreCreateRoutingModule { }
