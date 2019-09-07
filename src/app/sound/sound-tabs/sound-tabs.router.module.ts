import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SoundTabsPage } from './sound-tabs.page';

const routes: Routes = [
	{
		path: '',
		component: SoundTabsPage,
		children: [
			{ path: 'home', loadChildren: '../sound-home/sound-home.module#SoundHomePageModule' },
			{ path: 'upload', loadChildren: '../sound-upload/sound-upload.module#SoundUploadPageModule' },
			{ path: 'profile', loadChildren: '../sound-profile/sound-profile.module#SoundProfilePageModule' },
			{ path: 'post/:id', loadChildren: '../sound-post/sound-post.module#SoundPostPageModule' },
			{ path: 'edit-profile', loadChildren: '../sound-edit-profile/sound-edit-profile.module#SoundEditProfilePageModule' },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SoundTabsRoutingModule { }
