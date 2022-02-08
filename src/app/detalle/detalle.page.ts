import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listaLibros } from '../biblioteca/interface/biblioteca-interface';
import { DetalleService } from './service/detalle.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  detallesLibro: listaLibros;
  constructor(private servicioDetalle: DetalleService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getLibro()
  }
  getLibro(){
    //snapshot.params para obtener parametros de la url
    this.servicioDetalle.obtenerDetallesLibro(this.route.snapshot.params["isbn"])
    .subscribe(resp=>{
      this.detallesLibro= resp;
    })
    };
}
