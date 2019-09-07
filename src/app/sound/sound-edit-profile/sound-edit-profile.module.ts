import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoundEditProfilePage } from './sound-edit-profile.page';

const routes: Routes = [
	{
		path: '',
		component: SoundEditProfilePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [SoundEditProfilePage]
})
export class SoundEditProfilePageModule { }
