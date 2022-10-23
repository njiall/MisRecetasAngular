import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receta } from 'src/app/modelo/receta';
import { RecetaServiceService } from 'src/app/services/receta-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  public receta: Receta = new Receta();

  constructor(private route: ActivatedRoute, private recetaService: RecetaServiceService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const idNumber = +id;
    this.recetaService.detalleReceta(idNumber).subscribe(
      httpresp => {
      this.receta = <Receta>httpresp.body; // casting
      // console.log(httpresp.body);
      }
      , fallo => { alert('Fallo del servidor'); console.error(fallo); });
  }

}
