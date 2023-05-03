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
      import('../nobreak-create/nobreak-create.module').then(
        (m) => m.NobreakCreateModule
      )
  },
  {
    path: ':id/edit',
    loadChildren: () =>
    import('../nobreak-edit/nobreak-edit.module').then(
      (m) => m.NobreakEditModule
    )
  },
  {
    path: 'edit',
    loadChildren: () =>
    import('../nobreak-edit/nobreak-edit.module').then(
      (m) => m.NobreakEditModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NobreakShellRoutingModule { }
