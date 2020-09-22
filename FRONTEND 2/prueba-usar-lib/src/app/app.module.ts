import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortalIndicadoresModule } from '../../../portal-indicadores';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortalIndicadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
