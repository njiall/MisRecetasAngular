import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material';
import { MatIconModule, MatListModule, MatPaginatorModule, MatChipsModule, MatDatepickerModule } from '@angular/material';
import { MatProgressSpinnerModule, MatTableModule, MatToolbarModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule } from '@angular/material';

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
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class MaterialModule { }
