import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoundProfileVideoPage } from './sound-profile-video.page';

const routes: Routes = [
	{
		path: '',
		component: SoundProfileVideoPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [SoundProfileVideoPage]
})
export class SoundProfileVideoPageModule { }
