import { Component, OnInit } from '@angular/core';
import { Archivo } from '../entidades/archivo';
import { Observable } from 'rxjs';
import { DirectorioService } from '../servicios/directorio-archivos.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-listado-directorio',
  templateUrl: './listado-directorio.component.html',
  styleUrls: ['./listado-directorio.component.css']
})
export class ListadoDirectorioComponent implements OnInit {

  archivos: Observable<Archivo[]>;
  migaDePan: Map<string, string> = new Map();
  directorioActual = 'root';
  selecionTodos = false;

  private readonly ROOT = 'root';

  constructor(private servicioDirectorio: DirectorioService) { }

  ngOnInit() {
    this.consultarArchivosPorDirectorio(this.ROOT);
  }

  obtenerJerarquiaDirectorios() {
    const directoriosPadres = this.migaDePan.get(this.directorioActual);
    const directorioPadresArray = directoriosPadres.substr(0, directoriosPadres.length - 1).split('/');
    if (this.directorioActual === this.ROOT) {
      return [];
    }
    if (this.migaDePan.get(this.directorioActual) === '') {
      return [this.ROOT];
    }
    return [this.ROOT].concat(directorioPadresArray);
  }

  consultarArchivosPorDirectorio(directorio: string) {
    let directoriosPadres = '';
    if (this.directorioActual === this.ROOT) {
      directoriosPadres = '';
    } else {
      directoriosPadres = this.migaDePan.get(this.directorioActual).concat(this.directorioActual).concat('/');
    }
    this.directorioActual = directorio;
    if (!this.migaDePan.has(directorio)) {
      this.migaDePan.set(directorio, directoriosPadres);
    }
    this.archivos = this.servicioDirectorio.consultarArchivosPorDirectorio(
      directorio === this.ROOT ? this.migaDePan.get(directorio) : this.migaDePan.get(directorio).concat(directorio).concat('/')
    );
  }

  seleccionarDeseleccionarTodos() {
    this.archivos = this.archivos.pipe(
      map((archivos: Archivo[]) => {
        archivos.forEach(archivo => {
          archivo.estaSeleccionado = this.selecionTodos;
        });
        return archivos;
      })
    )
  }
}
