import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filtro } from 'src/app/modelo/filtro';
import { Receta } from 'src/app/modelo/receta';
import { RecetaServiceService } from 'src/app/services/receta-service.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  public recetas: Receta[];
  public cargando = false;
  public conDatos = false;
  displayedColumns = ['nombre', 'categoria', 'etiquetas'];

  filtro: Filtro = new Filtro();

  constructor(public servicio: RecetaServiceService, private router: Router) { }

  ngOnInit() {
  }

  buscar( ) {
    this.cargando = true;
    this.servicio.buscar(this.filtro).subscribe(
      httpresp => {
        this.cargando = false;
        this.recetas = <Receta[]>httpresp; // casting
        this.conDatos = this.recetas.length > 0;
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
