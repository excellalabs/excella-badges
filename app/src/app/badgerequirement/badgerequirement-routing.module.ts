import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgeRequirementComponent } from './badgerequirement.component';

const routes: Routes = [
  {
    path: '',
    component: BadgeRequirementComponent
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
export class BadgeRequirementRoutingModule {}