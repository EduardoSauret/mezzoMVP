import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoundProfilePhotoPage } from './sound-profile-photo.page';

const routes: Routes = [
	{
		path: '',
		component: SoundProfilePhotoPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [SoundProfilePhotoPage]
})
export class SoundProfilePhotoPageModule { }
