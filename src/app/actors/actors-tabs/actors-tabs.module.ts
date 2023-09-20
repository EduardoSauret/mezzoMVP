import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActorsTabsPage } from './actors-tabs.page';
import { ActorsTabsRoutingModule } from './actors-tabs.router.module';

const routes: Routes = [
	{
		path: '',
		component: ActorsTabsPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		ActorsTabsRoutingModule
	],
	declarations: [ActorsTabsPage]
})
export class ActorsTabsPageModule { }
