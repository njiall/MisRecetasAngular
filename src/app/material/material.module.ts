import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule, MatChipsModule, MatDatepickerModule, MatFormFieldModule, MatCardModule } from '@angular/material';
import { MatIconModule, MatListModule, MatPaginatorModule } from '@angular/material';
import { MatProgressSpinnerModule, MatTableModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
