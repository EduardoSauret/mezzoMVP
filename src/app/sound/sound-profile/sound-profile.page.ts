import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'app-sound-profile',
	templateUrl: './sound-profile.page.html',
	styleUrls: ['./sound-profile.page.scss'],
})
export class SoundProfilePage implements AfterViewInit {

	photos: any[];
	videos: any[];
	audioThumbnails: any[];

	constructor(
		// private popoverCtrl: PopoverController
	) {
		this.photos = [];
		this.videos = [];
		this.audioThumbnails = [];

		// Photos
		this.photos.push({
			src: '../../assets/images/profile/profile-01.jpg',
		});
		this.photos.push({
			src: '../../assets/images/profile/profile-02.jpg',
		});
		this.photos.push({
			src: '../../assets/images/profile/profile-03.jpg',
		});
		this.photos.push({
			src: '../../assets/images/profile/profile-04.jpg',
		});
		this.photos.push({
			src: '../../assets/images/profile/profile-05.jpg',
		});
		this.photos.push({
			src: '../../assets/images/profile/profile-06.jpg',
		});
		this.photos.push({
			src: '../../assets/images/profile/profile-07.jpg',
		});
		this.photos.push({
			src: '../../assets/images/profile/profile-08.jpg',
		});
    
		// Videos
		this.videos.push({
			src: '../../assets/images/profile/profile-09.jpg',
		});
		this.videos.push({
			src: '../../assets/images/profile/profile-10.jpg',
		});
		this.videos.push({
			src: '../../assets/images/profile/profile-11.jpg',
		});
		this.videos.push({
			src: '../../assets/images/profile/profile-12.jpg',
		});
		this.videos.push({
			src: '../../assets/images/profile/profile-13.jpg',
		});
		this.videos.push({
			src: '../../assets/images/profile/profile-14.jpg',
		});

		// Audios
		this.audioThumbnails.push({
			src: '../../assets/images/profile/profile-12.jpg',
		});
		this.audioThumbnails.push({
			src: '../../assets/images/profile/profile-13.jpg',
		});
		this.audioThumbnails.push({
			src: '../../assets/images/profile/profile-14.jpg',
		});
	}

	ngAfterViewInit() {
		// console.log('Super tabs is ', this.superTabs);
		// this.superTabs.selectTab(1);
	}

}
