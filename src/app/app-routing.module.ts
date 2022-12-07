import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';

// Angular 8 new syntax
// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
// ];

const routes: Routes = [
	{ path: '', redirectTo: 'sound', pathMatch: 'full' },
	{ path: 'login', loadChildren: './login/login.module#LoginPageModule' },
	{ path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
	{ path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthService] },
	{ path: 'new-profile', loadChildren: './new-profile/new-profile.module#NewProfilePageModule', canActivate: [AuthService] },
	{ path: 'sound', loadChildren: './sound/sound-tabs/sound-tabs.module#SoundTabsPageModule', canActivate: [AuthService] },
	{ path: 'visual', loadChildren: './visual/visual-tabs/visual-tabs.module#VisualTabsPageModule' },
	{ path: 'performance', loadChildren: './performance/performance-tabs/performance-tabs.module#PerformanceTabsPageModule' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }