import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Receta } from '../modelo/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaServiceService {

  // rutaServidor = 'http://msrecetario.herokuapp.com';
  rutaServidor = 'http://localhost:8081';

  public defaultHeaders = new HttpHeaders();



  constructor(private httpClient: HttpClient) { }

   public listarRecetas (): Observable<HttpResponse<Receta[]>> {
     return this.httpClient.get<Receta[]>(`${this.rutaServidor}/receta`, { observe: 'response' });
   }

    public detalleReceta(id: String): Observable<HttpResponse<Receta>> {
      return this.httpClient.get<Receta>(`${this.rutaServidor}/receta/detalle/${id}`, { observe: 'response' });
    }
}
