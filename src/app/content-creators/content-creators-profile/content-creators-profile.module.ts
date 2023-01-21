import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContentCreatorsProfilePage } from './content-creators-profile.page';

const routes: Routes = [
	{
		path: '',
		component: ContentCreatorsProfilePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [ContentCreatorsProfilePage]
})
export class ContentCreatorsProfilePageModule { }
