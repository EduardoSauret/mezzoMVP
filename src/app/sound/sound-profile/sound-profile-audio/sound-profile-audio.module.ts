import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoundProfileAudioPage } from './sound-profile-audio.page';

const routes: Routes = [
	{
		path: '',
		component: SoundProfileAudioPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [SoundProfileAudioPage]
})
export class SoundProfileAudioPageModule { }
