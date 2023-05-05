import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaustorCreateComponent } from '../exaustor-create/exaustor-create.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'create'
  },
  {
    path: 'create',
    loadChildren: () => 
      import('../exaustor-create/exaustor-create.module').then(
        (m) => m.ExaustorCreateModule
      )
  },
  {
    path: ':id/edit',
    loadChildren: () =>
      import('../exaustor-edit/exaustor-edit.module').then(
        (m) => m.ExaustorEditModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaustorShellRoutingModule { }
