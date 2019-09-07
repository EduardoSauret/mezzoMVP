import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PerformanceTabsPage } from './performance-tabs.page';
import { PerformanceTabsRoutingModule } from './performance-tabs.router.module';

const routes: Routes = [
	{
		path: '',
		component: PerformanceTabsPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		PerformanceTabsRoutingModule
	],
	declarations: [PerformanceTabsPage]
})
export class PerformanceTabsPageModule { }
