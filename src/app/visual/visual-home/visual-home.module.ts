import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { VisualHomePage } from './visual-home.page';

const routes: Routes = [
	{
		path: '',
		component: VisualHomePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		SharedModule,
	],
	declarations: [VisualHomePage]
})
export class VisualHomePageModule { }
