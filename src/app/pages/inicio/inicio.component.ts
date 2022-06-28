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


}
