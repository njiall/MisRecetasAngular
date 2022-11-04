import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
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

  constructor(public servicio: RecetaServiceService, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {

    this.servicio.listarRecetas().subscribe(
      httpresp => {
        this.cargando = false;
        this.recetas = <Receta[]>httpresp.body;
      }
      , fallo => {
        this.cargando = false;
       this.procesarError(fallo);
      });
  }

  detalleReceta(id: Number) {
    this.router.navigate(['/detalle', id]);
  }

  openSnackBar(mensaje: string, tipo: string) {
    this._snackBar.open(mensaje, tipo, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  procesarError(fallo: any) {
    console.error(fallo);
    const mensaje = `${fallo.status} : ${fallo.name} - ${fallo.message}`;
    this.openSnackBar(mensaje, 'Error');
  }

}
