import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Receta } from '../modelo/receta';
import { Filtro } from '../modelo/filtro';



@Injectable({
  providedIn: 'root'
})
export class RecetaServiceService {

  // rutaServidor = 'http://msrecetario.herokuapp.com';
  rutaServidor = 'http://localhost:8081';


  constructor(private httpClient: HttpClient) { }

   public listarRecetas (): Observable<HttpResponse<Receta[]>> {
     return this.httpClient.get<Receta[]>(`${this.rutaServidor}/receta`, { observe: 'response' });
   }

   public detalleReceta (id: number): Observable<HttpResponse<Receta>> {
    return this.httpClient.get<Receta>(`${this.rutaServidor}/receta/detalle/${id}`, { observe: 'response' });
  }

   public buscar( filtro: Filtro ): Observable<Receta[]> {
    return this.httpClient.post<Receta[]>(`${this.rutaServidor}/receta/buscador`, filtro );
  }



}
