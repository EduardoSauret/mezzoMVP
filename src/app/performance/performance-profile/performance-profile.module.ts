import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerformanceProfilePage } from './performance-profile.page';

const routes: Routes = [
	{
		path: '',
		component: PerformanceProfilePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [PerformanceProfilePage]
})
export class PerformanceProfilePageModule { }