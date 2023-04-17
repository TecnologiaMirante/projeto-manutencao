import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { TextButtonComponent } from './shared/ui/text-button/text-button.component';


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
