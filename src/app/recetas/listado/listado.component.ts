import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public servicio: RecetaServiceService, private router: Router) {}

  ngOnInit(): void {

    this.servicio.listarRecetas().subscribe(
      httpresp => {
        this.recetas = <Receta[]>httpresp.body; // casting
       // this.recetas.forEach(al => console.log(al));

      }
      , fallo => { alert('Fallo del servidor'); console.error(fallo); });

  }

  detalleReceta(id: String) {
    this.router.navigate(['/detalle', id]);
  }


}
