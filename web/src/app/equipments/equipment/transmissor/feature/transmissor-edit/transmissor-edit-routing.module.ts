import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransmissorEditComponent } from './transmissor-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TransmissorEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransmissorEditRoutingModule { }
