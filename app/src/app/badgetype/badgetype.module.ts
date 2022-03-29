import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeTypeComponent } from './badgetype.component';
import { BadgeTypeRoutingModule } from './badgetype-routing.module';
import { MatTableModule } from  '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from  '@angular/material/card';
import { MatInputModule } from  '@angular/material/input';
import { MatButtonModule } from  '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    BadgeTypeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    BadgeTypeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class BadgeTypeModule { }
