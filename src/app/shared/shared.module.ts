import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


// Custom Ionic components
import { AudioListComponent } from './audio-list/audio-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { VideoListComponent } from './video-list/video-list.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { PostComponent } from './components/post/post.component'
import { BioComponent } from './components/bio/bio.component';


@NgModule({
	declarations: [
		AudioListComponent,
		PhotoListComponent,
		VideoListComponent,
		HeaderToolbarComponent,
		PostComponent,
		BioComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		FlexLayoutModule,
		SuperTabsModule,
		MatChipsModule,
		MatInputModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
	],
	exports: [
		CommonModule,
		AudioListComponent,
		PhotoListComponent,
		VideoListComponent,
		FlexLayoutModule,
		SuperTabsModule,
		MatChipsModule,
		HeaderToolbarComponent,
		MatInputModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		PostComponent,
		BioComponent
	]
})
export class SharedModule { }
