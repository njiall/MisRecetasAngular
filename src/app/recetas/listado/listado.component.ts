import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/modelo/receta';
import { RecetaServiceService } from '../../services/receta-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  implements OnInit  {

  public tituloPagina: String = 'Listado de recetas';

  // public recetas: Receta[] = [
  //     new Receta(1, 'Primera', 'No', 'Ninguna', 'Ninguno', 'Nada', '', ''),
  //     new Receta(2, 'Segunda', 'No', 'Ninguna', 'Ninguno', 'Nada', '', '')
  // ];

  public recetas: Receta[];

  constructor(public servicio: RecetaServiceService) {}

  ngOnInit(): void {
    this.servicio.listarRecetas().subscribe(
      httpresp => {
        this.recetas = <Receta[]>httpresp.body; // casting
        this.recetas.forEach(al => console.log(al)); // llama a toString automáticamente otra fomra sería usar JSON stringify

      }
      , fallo => { alert('Fallo del servidor'); console.error(fallo); });
  }
}
