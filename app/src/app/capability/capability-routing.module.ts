import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapabilityComponent } from './capability.component';

// import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CapabilityComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
      ],
  exports: [
    RouterModule
  ]
})
export class CapabilityRoutingModule {}