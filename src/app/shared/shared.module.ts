import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AudioListComponent } from './audio-list/audio-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { VideoListComponent } from './video-list/video-list.component';

@NgModule({
	declarations: [
		AudioListComponent,
		PhotoListComponent,
		VideoListComponent
	],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [
		AudioListComponent,
		PhotoListComponent,
		VideoListComponent
	]
})
export class SharedModule { }
