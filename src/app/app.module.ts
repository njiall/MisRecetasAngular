import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoComponent } from './recetas/listado/listado.component';
import { DetalleComponent } from './recetas/detalle/detalle.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './recetas/home/home.component';
import { BuscadorComponent } from './recetas/buscador/buscador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaComponent } from './recetas/alta/alta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    HomeComponent,
    BuscadorComponent,
    AltaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
