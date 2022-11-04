import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaEnum } from 'src/app/modelo/categoria-enum';
import { EtiquetaEnum } from 'src/app/modelo/etiqueta.enum';
import { Filtro } from 'src/app/modelo/filtro';
import { Receta } from 'src/app/modelo/receta';
import { RecetaServiceService } from 'src/app/services/receta-service.service';
import { map, startWith} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatSnackBar } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  // Chips
  separatorKeysCodes: number[] = [ENTER, COMMA];
  etiquetaCtrl = new FormControl('');
  filteredEtiquetas: Observable<string[]>;
  etiquetas: string[] = [];
  allEtiquetas: string[] = Object.values(EtiquetaEnum);
  @ViewChild('etiquetaInput') etiquetaInput: ElementRef<HTMLInputElement>;
 // Fin chips

  public recetas: Receta[];
  public cargando = false;
  public conDatos = false;
  displayedColumns = ['nombre', 'categoria', 'etiquetas'];

  filtro: Filtro = new Filtro();
  public categorias = Object.values(CategoriaEnum);

  formularioEnvio: FormGroup = this.fb.group({
    nombre: [],
    categoria: []
  });

  constructor(public servicio: RecetaServiceService, private router: Router, private fb: FormBuilder,
    private _snackBar: MatSnackBar) {
    this.filteredEtiquetas = this.etiquetaCtrl.valueChanges.pipe(
      startWith(null),
      map((etiqueta: string | null) => (etiqueta ? this._filter(etiqueta) : this.allEtiquetas.slice())),
    );
  }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.etiquetas.push(value);
    }

    this.etiquetaCtrl.setValue(null);
  }

  remove(etiq: string): void {
    const index = this.etiquetas.indexOf(etiq);

    if (index >= 0) {
      this.etiquetas.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.etiquetas.push(event.option.viewValue);
    this.etiquetaInput.nativeElement.value = '';
    this.etiquetaCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allEtiquetas.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  buscar( ) {
    this.filtro = this.formularioEnvio.value;
    this.filtro.etiquetas = this.etiquetas.join(', ');
    this.cargando = true;
    this.servicio.buscar(this.filtro).subscribe(
      httpresp => {
        this.cargando = false;
        this.recetas = <Receta[]>httpresp; // casting
        this.conDatos = this.recetas.length > 0;
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
