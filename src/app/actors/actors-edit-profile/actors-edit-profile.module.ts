import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActorsEditProfilePage } from './actors-edit-profile.page';

const routes: Routes = [
	{
		path: '',
		component: ActorsEditProfilePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [ActorsEditProfilePage]
})
export class ActorsEditProfilePageModule { }
