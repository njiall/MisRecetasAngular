import { Component } from '@angular/core';
//import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo: String = 'Mis Recetas';
  public version: String = 'Versión 0.2';
 //public version: String = version;

}
