import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { NewProfilePage } from './new-profile.page';

const routes: Routes = [
	{
		path: '',
		component: NewProfilePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		FlexLayoutModule,
		SharedModule
	],
	declarations: [NewProfilePage]
})
export class NewProfilePageModule { }
