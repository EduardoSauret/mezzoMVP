import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContentCreatorsPostPage } from './content-creators-post.page';

const routes: Routes = [
	{
		path: '',
		component: ContentCreatorsPostPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [ContentCreatorsPostPage]
})
export class ContentCreatorsPostPageModule { }
