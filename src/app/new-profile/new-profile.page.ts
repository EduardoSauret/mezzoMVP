import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile, UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-new-profile',
	templateUrl: './new-profile.page.html',
	styleUrls: ['./new-profile.page.scss'],
})
export class NewProfilePage implements OnInit, OnDestroy {

	username;
	shouldScroll;
	selectedValues;
	selectedArtistProfile;
	selectedCreativeProfile;
	selectedInfluencerProfile;
	selectedArtistCategories: string[] = [];
	selectedCreativeCategories: string[] = [];
	selectedInfluencerCategories: string[] = [];
	uid;
	private userSubscription: Subscription;

	slideOpts = {
		initialSlide: 0,
		speed: 400
	};

	artistCategories: any[] = ['Guitar', 'Singer', 'Bass', 'DJ', 'Drums', 'Music Producer'];
	creativeCategories: any[] = ['AI Artist', 'Photo', 'Video', 'Illustration', 'Stylist', 'Art Director', 'Creative Director', 'MUA'];
	influencerCategories: any[] = ['Youtube', 'Tiktok', 'Instagram', 'Twitch'];

	constructor(
		private router: Router,
		private userService: UserService,
		private afstore: AngularFirestore,
		private afAuth: AngularFireAuth,) { }

	ngOnInit() {
		this.userSubscription = this.userService.getCurrentUser().subscribe(user => {
			if (user) {
				this.uid = user.uid;
				// Use the uid as needed
			} else {
				// User is not logged in
			}
		});
	}

	onSelectCategories(event, profileType: string){
		const selectedCategories = event.detail.value;
		
		if(profileType === 'artist') {
			this.selectedArtistCategories = selectedCategories;
		} else if(profileType === 'creator') {
			this.selectedCreativeCategories = selectedCategories;
		} else if(profileType === 'influencer') {
			this.selectedInfluencerCategories = selectedCategories;
		}
	}
	
	saveProfile(profileType: string){
		const userProfile: UserProfile = {
			uid: this.uid,
			username: this.username,  // Initialize with empty string
			profileType: profileType,
		};

		userProfile.profileSubTypes = this.selectedArtistCategories;

		// if (profileType === 'artist' && this.selectedArtistCategories.length > 0) {
		// 	userProfile.artist = this.selectedArtistCategories;
		// } else if (profileType === 'creator' && this.selectedCreativeCategories.length > 0) {
		// 	userProfile.creator = this.selectedCreativeCategories;
		// } else if (profileType === 'influencer' && this.selectedInfluencerCategories.length > 0) {
		// 	userProfile.influencer = this.selectedInfluencerCategories;
		// }

		this.userService.updateUserProfile(this.uid, userProfile)
			.then(() => {
				console.log('User profile saved:', userProfile);
				this.userService.setUserProfile(userProfile);
				this.router.navigate([`/${profileType}s`]);
			})
			.catch((error) => {
				console.error('Error saving user profile:', error);
			});
	}

	ngOnDestroy() {
		if (this.userSubscription) {
			this.userSubscription.unsubscribe();
		}
	}

}
