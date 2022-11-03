import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecetaServiceService } from 'src/app/services/receta-service.service';
import { take, map, startWith} from 'rxjs/operators';
import { Receta } from 'src/app/modelo/receta';
import { CategoriaEnum } from 'src/app/modelo/categoria-enum';
import { EtiquetaEnum } from 'src/app/modelo/etiqueta.enum';
import { Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent  {
  // Chips
  separatorKeysCodes: number[] = [ENTER, COMMA];
  etiquetaCtrl = new FormControl('');
  filteredEtiquetas: Observable<string[]>;
  etiquetas: string[] = [];
  allEtiquetas: string[] = Object.values(EtiquetaEnum);
  @ViewChild('etiquetaInput') etiquetaInput: ElementRef<HTMLInputElement>;
  @ViewChild('listado') listado: ElementRef<HTMLInputElement>;
// Fin chips

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  public cargando = false;
  public listaRecetas: Receta[];
  public nuevaReceta: Receta = new Receta();
  public categorias = Object.values(CategoriaEnum);
  // public listaEtiquetas = Object.values(EtiquetaEnum);

  formularioAlta: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    categoria: ['', Validators.required],
    etiquetas: [],
    ingredientes: ['', Validators.required],
    instrucciones: ['', Validators.required],
    notas: ['', ]
  });


  constructor(public servicio: RecetaServiceService, private fb: FormBuilder, private _ngZone: NgZone,  private router: Router) {
    this.filteredEtiquetas = this.etiquetaCtrl.valueChanges.pipe(
      startWith(null),
      map((etiqueta: string | null) => (etiqueta ? this._filter(etiqueta) : this.allEtiquetas.slice())),
    );
   }


   add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.etiquetas.push(value);
    }

    // Clear the input value
    // tslint:disable-next-line:no-non-null-assertion
    // event.chipInput!.clear();

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


  campoError(campo: string) {
    return this.formularioAlta.controls[campo].errors && this.formularioAlta.controls[campo].touched;
  }

  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  mapearReceta() {
    this.nuevaReceta.nombre = this.formularioAlta.controls['nombre'].value;
    this.nuevaReceta.categoria = this.formularioAlta.controls['categoria'].value;
    this.nuevaReceta.etiquetas = this.etiquetas.join(', ');
    this.nuevaReceta.ingredientes = this.formularioAlta.controls['ingredientes'].value;
    this.nuevaReceta.instrucciones = this.formularioAlta.controls['instrucciones'].value;
    this.nuevaReceta.notas = this.formularioAlta.controls['notas'].value;
    }

  alta( ) {
    this.formularioAlta.markAsTouched();
    this.cargando = true;
    this.mapearReceta();
    this.listaRecetas = [this.nuevaReceta];
    this.servicio .cargarRecetas(this.listaRecetas).subscribe(
      httpresp => {
        this.cargando = false;
        this.listaRecetas = <Receta[]>httpresp;
        console.log('Casteado ');
        console.log(this.listaRecetas[0].id);
        this.router.navigate(['/detalle', this.listaRecetas[0].id]);
      }
      , fallo => {
        this.cargando = false;
        alert('Fallo del servidor'); console.error(fallo);  // TODO Cambiar el mensaje
      });




  }



}
