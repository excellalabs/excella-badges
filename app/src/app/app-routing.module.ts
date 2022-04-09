import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

const routes: Routes = [
  {
    path: '', component: MainmenuComponent
  },
  {
    path: 'capability',
    loadChildren: () => import('./capability/capability.module').then(m => m.CapabilityModule),
  },
  {
    path: 'skilllevel',
    loadChildren: () => import('./skilllevel/skilllevel.module').then(m => m.SkilllevelModule),
  },
  {
    path: 'badgetype',
    loadChildren: () => import('./badgetype/badgetype.module').then(m => m.BadgeTypeModule),
  },
  {
    path: 'skill',
    loadChildren: () => import('./skill/skill.module').then(m => m.SkillModule),
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
