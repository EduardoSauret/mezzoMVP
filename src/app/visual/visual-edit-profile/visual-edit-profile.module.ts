import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisualEditProfilePage } from './visual-edit-profile.page';

const routes: Routes = [
	{
		path: '',
		component: VisualEditProfilePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [VisualEditProfilePage]
})
export class VisualEditProfilePageModule { }
