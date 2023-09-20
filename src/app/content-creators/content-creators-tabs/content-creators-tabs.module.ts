import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContentCreatorsTabsPage } from './content-creators-tabs.page';
import { ContentCreatorsTabsRoutingModule } from './content-creators-tabs.router.module';

const routes: Routes = [
	{
		path: '',
		component: ContentCreatorsTabsPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		ContentCreatorsTabsRoutingModule
	],
	declarations: [ContentCreatorsTabsPage]
})
export class ContentCreatorsTabsPageModule { }
