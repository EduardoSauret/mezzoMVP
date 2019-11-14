import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

// import { SoundProfileAudioPageModule } from './sound-profile-audio/sound-profile-audio.module';
// import { SoundProfilePhotoPageModule } from './sound-profile-photo/sound-profile-photo.module';
// import { SoundProfileVideoPageModule } from './sound-profile-video/sound-profile-video.module';
import { SoundProfilePage } from './sound-profile.page';

const routes: Routes = [
	{
		path: '',
		component: SoundProfilePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		SuperTabsModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		// SoundProfileAudioPageModule,
		// SoundProfilePhotoPageModule,
		// SoundProfileVideoPageModule
	],
	declarations: [SoundProfilePage]
})
export class SoundProfilePageModule { }
