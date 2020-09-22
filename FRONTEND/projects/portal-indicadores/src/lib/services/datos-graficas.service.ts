import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosGrafica } from '../entities/grafica';
import { Observable } from 'rxjs';

const apiUrl = 'https://serviciosfacturacion.xm.com.co/XM.Portal.Indicadores/api';

@Injectable({
  providedIn: 'root'
})
export class DatosGraficasService {

  constructor(private http: HttpClient) { }

  obtenerDatosGraficaAportesHidricos(resolucion: string) {
    return this.http.get<DatosGrafica>(`${apiUrl}/Oferta/AportesHidricos/${resolucion}`);
  }
}
