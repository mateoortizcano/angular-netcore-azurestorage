import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Archivo } from '../entidades/archivo';

@Injectable({
  providedIn: 'root'
})
export class DirectorioService {

  constructor(private http: HttpClient) { }

  consultarArchivosPorDirectorio(directorio: string) {
    return this.http.get<Archivo[]>(`/api/archivos?directorio=${directorio}`);
  }

}
