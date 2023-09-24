import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditProfilePage } from './edit-profile.page';
import { ShareModule } from '../share.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
	{
		path: '',
		component: EditProfilePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		ShareModule,
		SharedModule
	],
	declarations: [EditProfilePage]
})
export class EditProfilePageModule { }
