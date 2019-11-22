import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

// Custom Ionic components
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
		IonicModule,
		FlexLayoutModule,
		SuperTabsModule
	],
	exports: [
		AudioListComponent,
		PhotoListComponent,
		VideoListComponent,
		FlexLayoutModule,
		SuperTabsModule
	]
})
export class SharedModule { }
