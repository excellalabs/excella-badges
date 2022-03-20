import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkilllevelComponent } from './skilllevel.component';
import { SkilllevelRoutingModule } from './skilllevel-routing.module';
import { MatTableModule } from  '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from  '@angular/material/card';
import { MatInputModule } from  '@angular/material/input';
import { MatButtonModule } from  '@angular/material/button';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    SkilllevelComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    SkilllevelRoutingModule,
    HttpClientModule
  ]
})
export class SkilllevelModule { }
