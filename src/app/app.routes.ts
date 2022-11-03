import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './recetas/detalle/detalle.component';
import { ListadoComponent } from './recetas/listado/listado.component';
import { HomeComponent } from './recetas/home/home.component';
import { BuscadorComponent } from './recetas/buscador/buscador.component';
import { AltaComponent } from './recetas/alta/alta.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recetas', component: ListadoComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'detalle/:id', component: DetalleComponent},
  { path: 'alta', component: AltaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
