import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-actors-profile',
	templateUrl: './actors-profile.page.html',
	styleUrls: ['./actors-profile.page.scss'],
})
export class ActorsProfilePage implements OnInit {



  bioData: {};
	photos: any[];
	videos: any[];
	audios: any[];
  headerTitle = 'Username'
  headerMenu = true;
  

	constructor(
		// private popoverCtrl: PopoverController
	) {
    this.bioData;
		this.photos = [];
		this.videos = [];
		this.audios = [];

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
		this.audios.push({
			src: '../../assets/images/profile/profile-12.jpg',
			title: 'No Teniamos Nada Pero Eramos Felices'
		});
		this.audios.push({
			src: '../../assets/images/profile/profile-13.jpg',
			title: 'One Love'
		});
		this.audios.push({
			src: '../../assets/images/profile/profile-14.jpg',
			title: 'En Llamas'
		});
		this.audios.push({
			src: '../../assets/images/profile/profile-12.jpg',
			title: 'No Teniamos Nada Pero Eramos Felices'
		});
		this.audios.push({
			src: '../../assets/images/profile/profile-13.jpg',
			title: 'One Love'
		});
		this.audios.push({
			src: '../../assets/images/profile/profile-14.jpg',
			title: 'En Llamas'
		});

    //BioData
    this.bioData = {
			avatar: '../../assets/images/avatar-highost.png',
			username: 'HiGhost',
			posts: '30',
			followers: '1.2M',
			following: '1200'
		};

	}

	ngOnInit() {
	}

}
