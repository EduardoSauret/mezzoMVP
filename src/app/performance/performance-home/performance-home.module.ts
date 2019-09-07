import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerformanceHomePage } from './performance-home.page';

const routes: Routes = [
	{
		path: '',
		component: PerformanceHomePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [PerformanceHomePage]
})
export class PerformanceHomePageModule { }
