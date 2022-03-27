import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkilllevelComponent } from './skilllevel.component';

<<<<<<< HEAD
=======
// import { AuthGuard } from '../auth/auth.guard';

>>>>>>> 386955d702218105a49157e893c7c5f15a1d4013
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