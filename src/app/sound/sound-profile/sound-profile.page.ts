import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
// import { SuperTabs } from '@ionic-super-tabs/angular';
// import { SuperTabsConfig } from '@ionic-super-tabs/core';
// import { PopoverController } from '@ionic/angular';

// import { SoundProfileAudioPage } from './sound-profile-audio/sound-profile-audio.page';
// import { SoundProfilePhotoPage } from './sound-profile-photo/sound-profile-photo.page';
// import { SoundProfileVideoPage } from './sound-profile-video/sound-profile-video.page';

@Component({
	selector: 'app-sound-profile',
	templateUrl: './sound-profile.page.html',
	styleUrls: ['./sound-profile.page.scss'],
})
export class SoundProfilePage implements AfterViewInit {

	// @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

	// soundProfileAudioPage = SoundProfileAudioPage;
	// soundProfilePhotoPage = SoundProfilePhotoPage;
	// soundProfileVideoPage = SoundProfileVideoPage;


	constructor(
		// private popoverCtrl: PopoverController
		) {
	}

	ngAfterViewInit() {
		// console.log('Super tabs is ', this.superTabs);
		// this.superTabs.selectTab(1);
	}

	// async showPreferences(event: any) {
	// 	const p = await this.popoverCtrl.create({
	// 		component: PreferencesPopover,
	// 		event,
	// 		componentProps: {
	// 			opts: this.opts,
	// 		},
	// 	});
	// 	p.present();
	// }


}
