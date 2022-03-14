import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapabilityModule } from './capability/capability.module';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

const routes: Routes = [
  {
    path: '', component: MainmenuComponent
  },
  {
    path: 'capability',
    loadChildren: () => import('./capability/capability.module').then(m => m.CapabilityModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
