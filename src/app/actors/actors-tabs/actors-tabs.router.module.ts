import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ActorsTabsPage } from './actors-tabs.page';

const routes: Routes = [
	{
		path: '',
		component: ActorsTabsPage,
		children: [
			{ path: 'home', loadChildren: '../actors-home/actors-home.module#ActorsHomePageModule' },
			{ path: 'upload', loadChildren: '../actors-upload/actors-upload.module#ActorsUploadPageModule' },
			{ path: 'profile', loadChildren: '../actors-profile/actors-profile.module#ActorsProfilePageModule' },
			{ path: 'post/:id', loadChildren: '../actors-post/actors-post.module#ActorsPostPageModule' },
			{ path: 'edit-profile', loadChildren: '../actors-edit-profile/actors-edit-profile.module#ActorsEditProfilePageModule' },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ActorsTabsRoutingModule { }
