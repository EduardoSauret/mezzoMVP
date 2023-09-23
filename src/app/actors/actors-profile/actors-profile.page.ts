import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { UserProfile } from 'src/app/shared/interfaces/user.interface';
import { UserService } from 'src/app/user.service';

@Component({
	selector: 'app-actors-profile',
	templateUrl: './actors-profile.page.html',
	styleUrls: ['./actors-profile.page.scss'],
})
export class ActorsProfilePage implements OnInit {

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
			username: 'HiGhost',
			posts: '30',
			followers: '1.2M',
			following: '1200'
		};

	}

	ngOnInit() {
		// working for registration
		this.userProfile = this.userService.userProfile;
		// working for login
		this.userProfileSubscription = this.afAuth.authState.subscribe(user => {
			if (user) {
				this.uid = user.uid;
				console.log('UID ' + this.uid)
				this.userService.getUserProfile(this.uid).subscribe(profileData => {
					this.userProfile = profileData;
				})
			}
		});
	}

	ngOnDestroy() {
		if (this.userProfileSubscription) {
			this.userProfileSubscription.unsubscribe();
		}
	}

}
