import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoComponent } from './recetas/listado/listado.component';
import { DetalleComponent } from './recetas/detalle/detalle.component';
import { CabeceraComponent } from './layout/cabecera/cabecera.component';
import { PieComponent } from './layout/pie/pie.component';
import {HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    CabeceraComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
