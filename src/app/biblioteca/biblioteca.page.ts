import { Component, OnInit } from '@angular/core';
import { Libro, listaLibros } from './interface/biblioteca-interface';
import { BibliotecaService } from './service/biblioteca.service';
import { HttpClient } from '@angular/common/http';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner/ngx";
import { Router } from '@angular/router';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  encodedData: any;
    scannedBarCode: {};
    barcodeScannerOptions: BarcodeScannerOptions;
  constructor( private servicio: BibliotecaService, private http: HttpClient, private scanner: BarcodeScanner, private ruta: Router) {
    this.encodedData = "texto prueba";

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
   }

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
  scanBRcode() {
    this.scanner.scan().then(res => {
        this.scannedBarCode = res.text;
        this.ruta.navigateByUrl("/detalle/" + this.scannedBarCode);
      }).catch(err => {
        alert(err);
      });
  }
  
}
