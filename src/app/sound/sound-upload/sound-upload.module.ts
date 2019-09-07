import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoundUploadPage } from './sound-upload.page';

const routes: Routes = [
	{
		path: '',
		component: SoundUploadPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [SoundUploadPage]
})
export class SoundUploadPageModule { }
