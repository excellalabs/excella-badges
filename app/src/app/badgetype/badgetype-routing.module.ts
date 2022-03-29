import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgeTypeComponent } from './badgetype.component';

const routes: Routes = [
  {
    path: '',
    component: BadgeTypeComponent
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
export class BadgeTypeRoutingModule {}