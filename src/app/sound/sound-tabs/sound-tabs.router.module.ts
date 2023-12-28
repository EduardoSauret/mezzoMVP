import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SoundTabsPage } from './sound-tabs.page';

const routes: Routes = [
	{
		path: '',
		component: SoundTabsPage,
		children: [
			{ path: 'home', loadChildren: () => import('../sound-home/sound-home.module').then(m => m.SoundHomePageModule) },
			{ path: 'upload', loadChildren: () => import('../sound-upload/sound-upload.module').then(m => m.SoundUploadPageModule) },
			{ path: 'profile', loadChildren: () => import('../sound-profile/sound-profile.module').then(m => m.SoundProfilePageModule) },
			{ path: 'post/:id', loadChildren: () => import('../sound-post/sound-post.module').then(m => m.SoundPostPageModule) },
			{ path: 'edit-profile', loadChildren: () => import('../sound-edit-profile/sound-edit-profile.module').then(m => m.SoundEditProfilePageModule) },
		]
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SoundTabsRoutingModule { }
