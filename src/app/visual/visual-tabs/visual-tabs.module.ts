import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VisualTabsPage } from './visual-tabs.page';
import { VisualTabsRoutingModule } from './visual-tabs.router.module';

const routes: Routes = [
	{
		path: '',
		component: VisualTabsPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		VisualTabsRoutingModule
	],
	declarations: [VisualTabsPage]
})
export class VisualTabsPageModule { }
