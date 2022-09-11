import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import {MatChipsModule} from '@angular/material/chips';

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
		SuperTabsModule,
		MatChipsModule
	],
	exports: [
		AudioListComponent,
		PhotoListComponent,
		VideoListComponent,
		FlexLayoutModule,
		SuperTabsModule,
		MatChipsModule
	]
})
export class SharedModule { }
