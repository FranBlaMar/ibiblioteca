import { Component, OnInit } from '@angular/core';
import { Libro, listaLibros } from './interface/biblioteca-interface';
import { BibliotecaService } from './service/biblioteca.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  constructor( private servicio: BibliotecaService, private http: HttpClient) { }

  encontrado: boolean = false;
  listaLibros: Libro[];
  ngOnInit() {
    this.mostrarLibros("piano");
  }

  mostrarLibros(busqueda: string){
    this.servicio.listarLibros(busqueda).subscribe(resp =>{
      this.listaLibros = resp.docs;
      this.encontrado = true;
    });
  }
}
