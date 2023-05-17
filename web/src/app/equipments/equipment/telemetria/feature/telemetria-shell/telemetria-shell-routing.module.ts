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
  },
  {
    path: ':id/edit',
    loadChildren: () => 
    import('../telemetria-edit/telemetria-edit.module').then(
      (m) => m.TelemetriaEditModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelemetriaShellRoutingModule { }
