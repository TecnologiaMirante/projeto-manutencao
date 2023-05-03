import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('../equipments-create/equipments-create.module').then(
                (m) => m.EquipmentsCreateModule
            )
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class EquipmentsShellRoutingModule {}