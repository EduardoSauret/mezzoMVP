import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PerformanceTabsPage } from './performance-tabs.page';

const routes: Routes = [
	{
		path: '',
		component: PerformanceTabsPage,
		children: [
			{ path: 'home', loadChildren: '../performance-home/performance-home.module#PerformanceHomePageModule' },
			{ path: 'upload', loadChildren: '../performance-upload/performance-upload.module#PerformanceUploadPageModule' },
			{ path: 'profile', loadChildren: '../performance-profile/performance-profile.module#PerformanceProfilePageModule' },
			{ path: 'post/:id', loadChildren: '../performance-post/performance-post.module#PerformancePostPageModule' },
			{ path: 'edit-profile', loadChildren: '../performance-edit-profile/performance-edit-profile.module#PerformanceEditProfilePageModule' },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PerformanceTabsRoutingModule { }
