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
      import('../combinador-create/combinador-create.module').then(
        (m) => m.CombinadorCreateModule
      )
  },
  {
    path: ':id/edit',
    loadChildren: () => 
      import('../combinador-edit/combinador-edit.module').then(
        (m) => m.CombinadorEditModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombinadorShellRoutingModule { }
