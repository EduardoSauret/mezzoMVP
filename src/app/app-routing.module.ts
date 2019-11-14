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
	{ path: 'performance', loadChildren: './performance/performance-tabs/performance-tabs.module#PerformanceTabsPageModule' },
	{ path: 'sound-profile-video', loadChildren: './sound/sound-profile/sound-profile-video/sound-profile-video.module#SoundProfileVideoPageModule' },
	{ path: 'sound-profile-photo', loadChildren: './sound/sound-profile/sound-profile-photo/sound-profile-photo.module#SoundProfilePhotoPageModule' },
	{ path: 'sound-profile-audio', loadChildren: './sound/sound-profile/sound-profile-audio/sound-profile-audio.module#SoundProfileAudioPageModule' },
	// { path: 'sound-profile-home',
	// 	loadChildren: './sound/sound-profile/sound-profile-home/sound-profile-home.module#SoundProfileHomePageModule'},
	// { path: 'sound-profile-photo',
	// 	loadChildren: './sound/sound-profile/sound-profile-photo/sound-profile-photo.module#SoundProfilePhotoPageModule'},
	// { path: 'sound-profile-video',
	// 	loadChildren: './sound/sound-profile/sound-profile-video/sound-profile-video.module#SoundProfileVideoPageModule'},
	// { path: 'sound-profile-audio',
	// 	loadChildren: './sound/sound-profile/sound-profile-audio/sound-profile-audio.module#SoundProfileAudioPageModule'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
