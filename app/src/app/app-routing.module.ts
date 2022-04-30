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
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'badge',
    loadChildren: () => import('./badge/badge.module').then(m => m.BadgeModule),
  },
  {
    path: 'badgerequirement',
    loadChildren: () => import('./badgerequirement/badgerequirement.module').then(m => m.BadgeRequirementModule),
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
