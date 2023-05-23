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
      import('../cabo-create/cabo-create.module').then(
        (m) => m.CaboCreateModule
      )
  },  
  {
    path: ':id/edit',
    loadChildren: () =>
      import('../cabo-edit/cabo-edit.module').then(
        (m) => m.CaboEditModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaboShellRoutingModule { }
