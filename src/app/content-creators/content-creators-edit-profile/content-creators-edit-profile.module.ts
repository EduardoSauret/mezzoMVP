import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContentCreatorsEditProfilePage } from './content-creators-edit-profile.page';

const routes: Routes = [
	{
		path: '',
		component: ContentCreatorsEditProfilePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [ContentCreatorsEditProfilePage]
})
export class ContentCreatorsEditProfilePageModule { }
