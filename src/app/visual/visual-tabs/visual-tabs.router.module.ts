import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { VisualTabsPage } from './visual-tabs.page';

const routes: Routes = [
	{
		path: '',
		component: VisualTabsPage,
		children: [
			{ path: 'home', loadChildren: '../visual-home/visual-home.module#VisualHomePageModule' },
			{ path: 'upload', loadChildren: '../visual-upload/visual-upload.module#VisualUploadPageModule' },
			{ path: 'profile', loadChildren: '../visual-profile/visual-profile.module#VisualProfilePageModule' },
			{ path: 'post/:id', loadChildren: '../visual-post/visual-post.module#VisualPostPageModule' },
			{ path: 'edit-profile', loadChildren: '../visual-edit-profile/visual-edit-profile.module#VisualEditProfilePageModule' },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class VisualTabsRoutingModule { }
