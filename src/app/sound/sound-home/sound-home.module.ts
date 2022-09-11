import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { SoundHomePage } from './sound-home.page';

const routes: Routes = [
	{
		path: '',
		component: SoundHomePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SharedModule,
		RouterModule.forChild(routes)
	],
	declarations: [SoundHomePage]
})
export class SoundHomePageModule { }
