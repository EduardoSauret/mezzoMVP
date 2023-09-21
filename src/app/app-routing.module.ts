import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';

// Angular 8 new syntax
// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
// ];

const routes: Routes = [
	{ path: '', redirectTo: 'register', pathMatch: 'full' },
	{ path: 'login', loadChildren: './login/login.module#LoginPageModule' },
	{ path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
	{ path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthService] },
	{ path: 'new-profile', loadChildren: './new-profile/new-profile.module#NewProfilePageModule', canActivate: [AuthService] },
	{ path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
	{ path: 'sound', loadChildren: './sound/sound-tabs/sound-tabs.module#SoundTabsPageModule'},
	{ path: 'influencers', loadChildren: './actors/actors-tabs/actors-tabs.module#ActorsTabsPageModule' },
	{ path: 'content-creators', loadChildren: './content-creators/content-creators-tabs/content-creators-tabs.module#ContentCreatorsTabsPageModule' },
];
@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
