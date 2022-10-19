import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html'
})
export class PieComponent  {

  anio: number;
  // version: string = version;

  constructor() {
    this.anio = new Date().getFullYear();
  }

}
