import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptorCreateComponent } from './receptor-create.component';
import { receptorGetParabolicasResolver } from '../../utils/receptor-get-parabolicas/receptor-get-parabolicas.resolver';

const routes: Routes = [
  {
    path: '',
    component: ReceptorCreateComponent,
    resolve: {
      parabolicas: receptorGetParabolicasResolver
    }    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptorCreateRoutingModule { }
