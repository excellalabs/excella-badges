import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapabilityComponent } from './capability.component';
import { CapabilityRoutingModule } from './capability-routing.module';

@NgModule({
  declarations: [
    CapabilityComponent
  ],
  imports: [
    CommonModule,
    CapabilityRoutingModule
  ]
})
export class CapabilityModule { }
