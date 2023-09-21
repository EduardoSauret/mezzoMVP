import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-new-profile',
	templateUrl: './new-profile.page.html',
	styleUrls: ['./new-profile.page.scss'],
})
export class NewProfilePage implements OnInit {

	shouldScroll;

	slideOpts = {
		initialSlide: 0,
		speed: 400
	};

	artists: any[] = ['Guitar', 'Singer', 'Bass', 'DJ', 'Drums', 'Music Producer'];
	creatives: any[] = ['Video', 'Photo', 'MUA', 'Illustration', 'Stylist', 'Art Director', 'Creative Director', 'Assistant'];
	influencers: any[] = ['Modelo', 'Actor', 'Youtuber', 'Deportista', 'Tiktoker', 'Instagram', 'Twitch'];

	selectedArtistProfile;
	selectedCreativeProfile;
	selectedInfluencerProfile;

	busy;

	constructor(
		private router: Router,
		private user: UserService,
		private afstore: AngularFirestore) { }

	ngOnInit() {
	}

	saveSoundProfile() {
		// console.log(this.selectedMusicProfile);
		// const selectedMusicProfile = this.selectedMusicProfile;

		// this.afstore.doc(`users/${this.user.getUID()}`).update({
		// 	branch: 'sound',
		// 	profile: selectedMusicProfile
		// });

		this.router.navigate(['/sound']);
	}

	saveVisualProfile() {
		// console.log(this.selectedVisualProfile);
		// const selectedVisualProfile = this.selectedVisualProfile;

		// this.afstore.doc(`users/${this.user.getUID()}`).update({
		// 	branch: 'visual',
		// 	profile: selectedVisualProfile
		// });

		this.router.navigate(['/content-creators']);
	}

	saveActorsProfile() {
		// console.log(this.selectedPerformanceProfile);
		// const selectedPerformanceProfile = this.selectedPerformanceProfile;

		// this.afstore.doc(`users/${this.user.getUID()}`).update({
		// 	branch: 'performance',
		// 	profile: selectedPerformanceProfile
		// });

		this.router.navigate(['/actors']);
	}


// Ionic change detection method for select
	ionChangeFn(event) {
		console.log(event.detail.value);

	}

}
