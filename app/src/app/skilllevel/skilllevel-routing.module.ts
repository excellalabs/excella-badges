import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkilllevelComponent } from './skilllevel.component';

const routes: Routes = [
  {
    path: '',
    component: SkilllevelComponent
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
export class SkilllevelRoutingModule {}