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

  public recetas: Receta[];
  public cargando = true;
  displayedColumns = ['nombre', 'categoria', 'etiquetas'];

  constructor(public servicio: RecetaServiceService, private router: Router) {}

  ngOnInit(): void {

    this.servicio.listarRecetas().subscribe(
      httpresp => {
        this.cargando = false;
        this.recetas = <Receta[]>httpresp.body; // casting
      }
      , fallo => {
        this.cargando = false;
        alert('Fallo del servidor'); console.error(fallo);  // TODO Cambiar el mensaje
      });
  }

  detalleReceta(id: Number) {
    this.router.navigate(['/detalle', id]);
  }


}
