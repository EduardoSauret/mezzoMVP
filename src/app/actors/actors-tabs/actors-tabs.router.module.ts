import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ActorsTabsPage } from './actors-tabs.page';

const routes: Routes = [
	{
		path: '',
		component: ActorsTabsPage,
		children: [
			{ path: 'home', loadChildren: () => import('../actors-home/actors-home.module').then(m => m.ActorsHomePageModule) },
			{ path: 'upload', loadChildren: () => import('../actors-upload/actors-upload.module').then(m => m.ActorsUploadPageModule) },
			{ path: 'profile', loadChildren: () => import('../actors-profile/actors-profile.module').then(m => m.ActorsProfilePageModule) },
			{ path: 'post/:id', loadChildren: () => import('../actors-post/actors-post.module').then(m => m.ActorsPostPageModule) },
			{ path: 'edit-profile', loadChildren: () => import('../actors-edit-profile/actors-edit-profile.module').then(m => m.ActorsEditProfilePageModule) },
		]
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ActorsTabsRoutingModule { }
