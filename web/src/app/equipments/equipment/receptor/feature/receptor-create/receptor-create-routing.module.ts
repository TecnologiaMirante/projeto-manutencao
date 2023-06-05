import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptorCreateComponent } from './receptor-create.component';
import { receptorCreateResolver  } from '../../utils/receptor-create.resolver';

const routes: Routes = [
  {
    path: '',
    component: ReceptorCreateComponent,
    resolve: {
      parabolicas: receptorCreateResolver
    }    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptorCreateRoutingModule { }
