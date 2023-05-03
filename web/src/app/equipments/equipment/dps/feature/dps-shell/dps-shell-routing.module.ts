import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'create'
  },
  {
    path: 'create',
    loadChildren: () =>
      import('../dps-create/dps-create.module').then(
        (m) => m.DpsCreateModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DpsShellRoutingModule { }
