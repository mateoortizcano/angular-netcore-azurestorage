import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoDirectorioComponent } from './listado-directorio/listado-directorio.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { GraficaComponent } from './grafica/grafica.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeCo from '@angular/common/locales/es-CO';

registerLocaleData(localeCo, 'es-Co');

@NgModule({
  declarations: [
    AppComponent,
    ListadoDirectorioComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [ThemeService, DatePipe, { provide: LOCALE_ID, useValue: 'es-Co' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
