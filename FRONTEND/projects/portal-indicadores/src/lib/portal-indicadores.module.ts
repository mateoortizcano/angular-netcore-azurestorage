import { LOCALE_ID, NgModule } from '@angular/core';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { CommonModule, DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeCo from '@angular/common/locales/es-CO';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { AportesHidricosComponent } from './aportes-hidricos/aportes-hidricos.component';

registerLocaleData(localeCo, 'es-Co');

@NgModule({
  declarations: [AportesHidricosComponent, HomeComponent],
  imports: [
    CommonModule,
    ChartsModule,
    HttpClientModule

  ],
  exports: [HomeComponent],
  providers: [ThemeService, DatePipe, { provide: LOCALE_ID, useValue: 'es-Co' }],
})
export class PortalIndicadoresModule { }
