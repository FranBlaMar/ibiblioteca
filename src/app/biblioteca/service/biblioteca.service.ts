import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listaLibros } from '../interface/biblioteca-interface';
@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {


  private url: string = "http://openlibrary.org/search.json?title=piano&limit=7"

  constructor(private http: HttpClient) {
  }
  //Devuelvo el observable
  listarLibros(): Observable<listaLibros>{
    return this.http.get<listaLibros>(this.url);
  }

}