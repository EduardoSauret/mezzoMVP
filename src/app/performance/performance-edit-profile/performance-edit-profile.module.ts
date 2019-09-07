import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerformanceEditProfilePage } from './performance-edit-profile.page';

const routes: Routes = [
	{
		path: '',
		component: PerformanceEditProfilePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [PerformanceEditProfilePage]
})
export class PerformanceEditProfilePageModule { }
