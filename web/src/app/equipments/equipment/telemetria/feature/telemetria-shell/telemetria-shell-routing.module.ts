import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'create',    
  },
  {
    path: 'create',
    loadChildren: () =>
      import('../telemetria-create/telemetria-create.module').then(
        (m) => m.TelemetriaCreateModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelemetriaShellRoutingModule { }
