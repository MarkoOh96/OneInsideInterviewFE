import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule,
      MatAutocompleteModule,
      MatIconModule
   ],
    exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule,
      MatAutocompleteModule,
      MatIconModule
    ]
  })export class MaterialModule {};