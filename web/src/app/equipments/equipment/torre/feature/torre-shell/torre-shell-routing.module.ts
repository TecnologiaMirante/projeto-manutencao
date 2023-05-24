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
      import('../torre-create/torre-create.module').then(
        (m) => m.TorreCreateModule
      )
  },
  {
    path: ':id/edit',
    loadChildren: () =>
      import('../torre-edit/torre-edit.module').then(
        (m) => m.TorreEditModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorreShellRoutingModule { }
