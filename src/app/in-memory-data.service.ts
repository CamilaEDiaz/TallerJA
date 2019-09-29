import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Libro } from './models/libro';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements  InMemoryDbService{


  createDb() {
    const libros = [
      {id :null, title: 'jose angel', description: 'Se requiere visualizar...', priority: true},
      {id: null, title: 'coronel', description: 'Se requiere visualizar diseño...', priority: true}
    ];

    return {libros};
  }
  genId(libros: Libro[]): number {
    return libros.length > 0 ? Math.max(...libros.map(Libro => Libro.id)) + 1 : 11;
  }

}
