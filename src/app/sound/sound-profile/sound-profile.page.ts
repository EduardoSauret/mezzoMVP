import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { UserProfile, UserService } from 'src/app/user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
	selector: 'app-sound-profile',
	templateUrl: './sound-profile.page.html',
	styleUrls: ['./sound-profile.page.scss'],
})
export class SoundProfilePage implements AfterViewInit {

	userProfile: UserProfile;
  bioData: {};
	photos: any[];
	videos: any[];
	audios: any[];
  headerTitle = 'Username'
  headerMenu = true;
	uid;
	private userProfileSubscription: Subscription;
  

	constructor(
		// private popoverCtrl: PopoverController
		private userService: UserService,
		private afAuth: AngularFireAuth,
		private firestore: AngularFirestore
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
			username: 'TEST',
			posts: '30',
			followers: '1.2M',
			following: '1200'
		};

	}

	ngOnInit(){
		// working for registration
		this.userProfile = this.userService.userProfile;
		// working for login
		this.userProfileSubscription = this.afAuth.authState.subscribe(user => {
			if (user) {
				this.uid = user.uid;
				this.userService.getUserProfile(this.uid).subscribe(profileData => {
					this.userProfile = profileData;
				})
			}
		});
	}


	ngAfterViewInit() {
		// console.log('Super tabs is ', this.superTabs);
		// this.superTabs.selectTab(1);
	}


	ngOnDestroy() {
		if (this.userProfileSubscription) {
			this.userProfileSubscription.unsubscribe();
		}
	}

}
