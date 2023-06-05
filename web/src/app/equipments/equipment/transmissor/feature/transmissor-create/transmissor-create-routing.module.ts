import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransmissorCreateComponent } from './transmissor-create.component';
import { getReceptoresResolver } from '../../utils/get-receptores/get-receptores.resolver';
import { getAntenasResolver } from '../../utils/get-antenas/get-antenas.resolver';

const routes: Routes = [
  {
    path: '',
    component: TransmissorCreateComponent,
    resolve: {
      receptores: getReceptoresResolver,
      antenas: getAntenasResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransmissorCreateRoutingModule { }
