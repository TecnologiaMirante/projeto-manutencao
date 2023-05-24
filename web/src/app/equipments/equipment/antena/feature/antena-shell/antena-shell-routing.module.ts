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
      import('../antena-create/antena-create.module').then(
        (m) => m.AntenaCreateModule
      )
  },
  {
    path: ':id/edit',
    loadChildren: () =>
      import('../antena-edit/antena-edit.module').then(
        (m) => m.AntenaEditModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntenaShellRoutingModule { }
