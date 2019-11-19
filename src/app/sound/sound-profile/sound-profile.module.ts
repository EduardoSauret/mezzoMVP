import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { SoundProfilePage } from './sound-profile.page';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
	{
		path: '',
		component: SoundProfilePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		SuperTabsModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		SharedModule
	],
	declarations: [SoundProfilePage]
})
export class SoundProfilePageModule { }
