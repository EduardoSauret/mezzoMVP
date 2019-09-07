import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SoundTabsPage } from './sound-tabs.page';
import { SoundTabsRoutingModule } from './sound-tabs.router.module';

const routes: Routes = [
	{
		path: '',
		component: SoundTabsPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		SoundTabsRoutingModule
	],
	declarations: [SoundTabsPage]
})
export class SoundTabsPageModule { }
