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
      import('../transmissor-create/transmissor-create.module').then(
        (m) => m.TransmissorCreateModule
      )
  },
  {
    path: ':id/edit',
    loadChildren: () => 
      import('../transmissor-edit/transmissor-edit.module').then(
        (m) => m.TransmissorEditModule
      )
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransmissorShellRoutingModule { }
