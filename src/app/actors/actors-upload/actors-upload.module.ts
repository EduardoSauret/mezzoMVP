import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActorsUploadPage } from './actors-upload.page';

const routes: Routes = [
	{
		path: '',
		component: ActorsUploadPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [ActorsUploadPage]
})
export class ActorsUploadPageModule { }
