import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html'
})
export class CabeceraComponent  {

  constructor() { }

  public titulo: String = 'Mis recetas';

  get tituloPagina() {
    return this.titulo.toUpperCase();
  }

}
