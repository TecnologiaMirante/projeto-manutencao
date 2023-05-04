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
      import('../ar-condicionado-create/ar-condicionado-create.module').then(
        (m) => m.ArCondicionadoCreateModule
      )
  },
  {
    path: ':id/edit',
    loadChildren: () =>
      import('../ar-condicionado-edit/ar-condicionado-edit.module').then(
        (m) => m.ArCondicionadoEditModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArCondicionadoShellRoutingModule { }
