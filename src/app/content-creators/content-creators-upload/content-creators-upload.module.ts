import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContentCreatorsUploadPage } from './content-creators-upload.page';

const routes: Routes = [
	{
		path: '',
		component: ContentCreatorsUploadPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [ContentCreatorsUploadPage]
})
export class ContentCreatorsUploadPageModule { }
