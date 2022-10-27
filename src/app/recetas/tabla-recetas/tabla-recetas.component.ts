import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/modelo/receta';

@Component({
  selector: 'app-tabla-recetas',
  templateUrl: './tabla-recetas.component.html'
})
export class TablaRecetasComponent implements OnInit {

  @Input() public recetas: Receta[];

  constructor() { }

  ngOnInit() {
  }

}
