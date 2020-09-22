import { HttpClient } from '@angular/common/http';
import { DatosGrafica } from '../entities/grafica';
import { Observable } from 'rxjs';
export declare class DatosGraficasService {
    private http;
    constructor(http: HttpClient);
    obtenerDatosGraficaAportesHidricos(resolucion: string): Observable<DatosGrafica>;
}
