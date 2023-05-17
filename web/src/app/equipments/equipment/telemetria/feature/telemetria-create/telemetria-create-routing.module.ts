import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelemetriaCreateComponent } from './telemetria-create.component';

const routes: Routes = [
  {
    path: '',
    component: TelemetriaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelemetriaCreateRoutingModule { }
