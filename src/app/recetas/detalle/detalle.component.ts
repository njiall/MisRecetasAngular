import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Receta } from 'src/app/modelo/receta';
import { RecetaServiceService } from 'src/app/services/receta-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  public receta: Receta = new Receta();

  constructor(private route: ActivatedRoute, private recetaService: RecetaServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const idNumber = +id;
    this.recetaService.detalleReceta(idNumber).subscribe(
      httpresp => {
      this.receta = <Receta>httpresp.body; // casting
      // console.log(httpresp.body);
      }
      , fallo => { this.procesarError(fallo); });
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
