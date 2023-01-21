import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { ContentCreatorsHomePage } from './content-creators-home.page';

const routes: Routes = [
	{
		path: '',
		component: ContentCreatorsHomePage
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
	declarations: [ContentCreatorsHomePage]
})
export class ContentCreatorsHomePageModule { }
