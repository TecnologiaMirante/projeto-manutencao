import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationDetailComponent } from './station-detail.component';

const routes: Routes = [
  {
    path: '',
    component: StationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationDetailRoutingModule { }
