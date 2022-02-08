import { Component, OnInit } from '@angular/core';
import { Libro } from './interface/biblioteca-interface';
import { BibliotecaService } from './service/biblioteca.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  constructor( private servicio: BibliotecaService) { }

  listaLibros: Libro[];
  ngOnInit() {
    this.mostrarLibros();
  }

  mostrarLibros(){
    this.servicio.listarLibros().subscribe(resp =>{
      this.listaLibros = resp.docs;
    });
  }
}
