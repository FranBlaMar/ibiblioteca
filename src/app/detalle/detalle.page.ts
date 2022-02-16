import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listaLibros } from '../biblioteca/interface/biblioteca-interface';
import { DetalleService } from './service/detalle.service';
import { StorageService } from '../favoritos/service/storage.Service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  encontrado: boolean = false;
  detallesLibro: listaLibros;
  constructor(private servicioDetalle: DetalleService, private route:ActivatedRoute, private storage: StorageService) { }

  async ngOnInit() {
    this.getLibro()
  }
  async getLibro(){
    //snapshot.params para obtener parametros de la url
    this.servicioDetalle.obtenerDetallesLibro(this.route.snapshot.params["isbn"])
    .subscribe(resp=>{
      this.detallesLibro= resp;
      this.encontrado = true;
    })
    await this.storage.set('libro', 'hola');
    await console.log(this.storage.get('libro'));
    };
}
