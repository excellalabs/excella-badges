import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapabilityModule } from './capability/capability.module';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { CategoryModule } from './category/category.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CapabilityModule,
    CategoryModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
