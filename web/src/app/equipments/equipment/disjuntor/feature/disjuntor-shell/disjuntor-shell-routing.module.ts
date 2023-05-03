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
      import('../disjuntor-create/disjuntor-create.module').then(
        (m) => m.DisjuntorCreateModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisjuntorShellRoutingModule { }
