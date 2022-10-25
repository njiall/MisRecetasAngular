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
  public cargando = false;
  displayedColumns = ['nombre', 'categoria', 'etiquetas'];

  constructor(public servicio: RecetaServiceService, private router: Router) {}

  ngOnInit(): void {

    this.servicio.listarRecetas().subscribe(
      httpresp => {
        this.cargando = true;
        this.recetas = <Receta[]>httpresp.body; // casting
        this.cargando = false;
      }
      , fallo => { alert('Fallo del servidor'); console.error(fallo); });
  }

  detalleReceta(id: Number) {
    this.router.navigate(['/detalle', id]);
  }


}
