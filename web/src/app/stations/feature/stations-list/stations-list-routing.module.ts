import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationsListComponent } from './stations-list.component';

const routes: Routes = [
  {
    path: '',
    component: StationsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationsListRoutingModule { }
