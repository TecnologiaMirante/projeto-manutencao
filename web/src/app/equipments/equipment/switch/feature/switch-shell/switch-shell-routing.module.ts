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
      import('../switch-create/switch-create.module').then(
        (m) => m.SwitchCreateModule
      )
  },
  {
    path: ':id/edit',
    loadChildren: () =>
      import('../switch-edit/switch-edit.module').then(
        (m) => m.SwitchEditModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchShellRoutingModule { }
