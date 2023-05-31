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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptorShellRoutingModule { }
