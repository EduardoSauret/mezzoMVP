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
			{ path: 'home', loadChildren: '../content-creators-home/content-creators-home.module#ContentCreatorsHomePageModule' },
			{ path: 'upload', loadChildren: '../content-creators-upload/content-creators-upload.module#ContentCreatorsUploadPageModule' },
			{ path: 'profile', loadChildren: '../content-creators-profile/content-creators-profile.module#ContentCreatorsProfilePageModule' },
			{ path: 'post/:id', loadChildren: '../content-creators-post/content-creators-post.module#ContentCreatorsPostPageModule' },
			{ path: 'edit-profile', loadChildren: '../content-creators-edit-profile/content-creators-edit-profile.module#ContentCreatorsEditProfilePageModule' },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ContentCreatorsTabsRoutingModule { }
