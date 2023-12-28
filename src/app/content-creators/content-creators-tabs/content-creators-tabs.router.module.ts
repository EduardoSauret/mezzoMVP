import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContentCreatorsTabsPage } from './content-creators-tabs.page';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '',
		component: ContentCreatorsTabsPage,
		children: [
			{ path: 'home', loadChildren: () => import('../content-creators-home/content-creators-home.module').then(m => m.ContentCreatorsHomePageModule) },
			{ path: 'upload', loadChildren: () => import('../content-creators-upload/content-creators-upload.module').then(m => m.ContentCreatorsUploadPageModule) },
			{ path: 'profile', loadChildren: () => import('../content-creators-profile/content-creators-profile.module').then(m => m.ContentCreatorsProfilePageModule) },
			{ path: 'post/:id', loadChildren: () => import('../content-creators-post/content-creators-post.module').then(m => m.ContentCreatorsPostPageModule) },
			{ path: 'edit-profile', loadChildren: () => import('../content-creators-edit-profile/content-creators-edit-profile.module').then(m => m.ContentCreatorsEditProfilePageModule) },
		]
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ContentCreatorsTabsRoutingModule { }
