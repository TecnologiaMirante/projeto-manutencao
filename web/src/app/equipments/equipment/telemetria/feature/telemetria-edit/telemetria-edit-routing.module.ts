import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelemetriaEditComponent } from './telemetria-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TelemetriaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelemetriaEditRoutingModule { }
