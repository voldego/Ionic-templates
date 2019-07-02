import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'introa', loadChildren: './intros/introa/introa.module#IntroaPageModule' },
  { path: 'introb', loadChildren: './intros/introb/introb.module#IntrobPageModule' },
  { path: 'introc', loadChildren: './intros/introc/introc.module#IntrocPageModule' },
  { path: 'introd', loadChildren: './intros/introd/introd.module#IntrodPageModule' },
  { path: 'introe', loadChildren: './intros/introe/introe.module#IntroePageModule' },
  { path: 'introf', loadChildren: './intros/introf/introf.module#IntrofPageModule' },
  { path: 'introg', loadChildren: './intros/introg/introg.module#IntrogPageModule' },
  { path: 'introh', loadChildren: './intros/introh/introh.module#IntrohPageModule' },
  { path: 'menua', loadChildren: './menus/menua/menua.module#MenuaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
