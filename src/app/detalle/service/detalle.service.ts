import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listaLibros } from '../../biblioteca/interface/biblioteca-interface';
@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  constructor(private http: HttpClient) {
  }

  //Devuelvo el observable
  obtenerDetallesLibro(isbn:string){
    let url =`http://openlibrary.org/search.json?isbn=${isbn}`;
    return this.http.get<listaLibros>(url);
  };

}


