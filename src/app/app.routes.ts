import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './recetas/detalle/detalle.component';
import { ListadoComponent } from './recetas/listado/listado.component';


const APP_ROUTES: Routes = [
  { path: 'recetas', component: ListadoComponent },
  { path: 'detalle/:id', component: DetalleComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'recetas' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
