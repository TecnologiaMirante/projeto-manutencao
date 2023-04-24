import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { DeleteButtonComponent } from './shared/ui/delete-button/delete-button.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    EquipmentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
