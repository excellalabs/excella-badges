import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapabilityModule } from './capability/capability.module';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { SkilllevelModule } from './skilllevel/skilllevel.module';
import { SkillModule } from './skill/skill.module';
import { BadgeTypeModule } from './badgetype/badgetype.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponentDialog } from './dialog/dialog.component';

import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { MatTableModule } from  '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from  '@angular/material/card';
import { MatInputModule } from  '@angular/material/input';
import { MatButtonModule } from  '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    DialogComponentDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CapabilityModule,
    SkilllevelModule,
    SkillModule,
    BadgeTypeModule,

    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
      MatDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
