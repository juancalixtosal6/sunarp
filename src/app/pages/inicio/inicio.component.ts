import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {

  landingPageEleccion = 'https://www.onpe.gob.pe/modElecciones/elecciones/2021/EEGG/ ';

  constructor() {
  }

  ngOnInit() {

  }

  mostrarPaso1 = true;
  mostrarPaso2 = false;
  mostrarPaso3 = false;

  mostrarOcultar(paso: number){
   switch(paso){
case 1:
  this.mostrarPaso1 = true;
  this.mostrarPaso2 = false;
  this.mostrarPaso3 = false;
  break;
  case 2: 
  this.mostrarPaso1 = false;
  this.mostrarPaso2 = true;
  this.mostrarPaso3 = false;
  break;
  case 3: 
  this.mostrarPaso1 = false;
  this.mostrarPaso2 = false;
  this.mostrarPaso3 = true;
  break;
  default:
    this.mostrarPaso1 = true;
   }
  }
}

