import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SoundProfilePage } from './sound-profile.page';
import { SharedModule } from '../../shared/shared.module';


const routes: Routes = [
	{
		path: '',
		component: SoundProfilePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		SharedModule,
		FlexLayoutModule
	],
	declarations: [SoundProfilePage]
})
export class SoundProfilePageModule { }
