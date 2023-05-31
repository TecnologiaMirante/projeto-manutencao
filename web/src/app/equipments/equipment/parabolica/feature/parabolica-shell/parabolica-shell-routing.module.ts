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
      import('../parabolica-create/parabolica-create.module').then(
        (m) => m.ParabolicaCreateModule
      )
  },
  {
    path: ':id/edit',
    loadChildren: () => 
      import('../parabolica-edit/parabolica-edit.module').then(
        (m) => m.ParabolicaEditModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParabolicaShellRoutingModule { }
