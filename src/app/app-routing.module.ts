import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AuthService } from './auth.service';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
	{ path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
	{ path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule), canActivate: [AuthGuard] },
	{ path: 'new-profile', loadChildren: () => import('./new-profile/new-profile.module').then(m => m.NewProfilePageModule), canActivate: [AuthGuard] },
	{ path: 'edit-profile', loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfilePageModule), canActivate: [AuthGuard] },
	{ path: 'artists', loadChildren: () => import('./sound/sound-tabs/sound-tabs.module').then(m => m.SoundTabsPageModule), canActivate: [AuthGuard] },
	{ path: 'creators', loadChildren: () => import('./content-creators/content-creators-tabs/content-creators-tabs.module').then(m => m.ContentCreatorsTabsPageModule), canActivate: [AuthGuard] },
	{ path: 'influencers', loadChildren: () => import('./actors/actors-tabs/actors-tabs.module').then(m => m.ActorsTabsPageModule), canActivate: [AuthGuard] },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
