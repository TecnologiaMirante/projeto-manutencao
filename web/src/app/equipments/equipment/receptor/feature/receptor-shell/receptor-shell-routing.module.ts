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
      import('../receptor-create/receptor-create.module').then(
        (m) => m.ReceptorCreateModule
      )
  },
  {
    path: ':id/edit',
    loadChildren: () => 
      import('../receptor-edit/receptor-edit.module').then(
        (m) => m.ReceptorEditModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptorShellRoutingModule { }
