import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'app-sound-profile',
	templateUrl: './sound-profile.page.html',
	styleUrls: ['./sound-profile.page.scss'],
})
export class SoundProfilePage implements AfterViewInit {


	constructor(
		// private popoverCtrl: PopoverController
		) {
	}

	ngAfterViewInit() {
		// console.log('Super tabs is ', this.superTabs);
		// this.superTabs.selectTab(1);
	}

}
