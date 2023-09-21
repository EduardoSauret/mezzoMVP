import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile, UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-new-profile',
	templateUrl: './new-profile.page.html',
	styleUrls: ['./new-profile.page.scss'],
})
export class NewProfilePage implements OnInit {

	shouldScroll;
	selectedValues;
	selectedArtistProfile;
	selectedCreativeProfile;
	selectedInfluencerProfile;
	selectedArtistCategories: string[] = [];
	selectedCreativeCategories: string[] = [];
	selectedInfluencerCategories: string[] = [];
	busy;

	slideOpts = {
		initialSlide: 0,
		speed: 400
	};

	artistCategories: any[] = ['Guitar', 'Singer', 'Bass', 'DJ', 'Drums', 'Music Producer'];
	creativeCategories: any[] = ['Video', 'Photo', 'MUA', 'Illustration', 'Stylist', 'Art Director', 'Creative Director', 'Assistant'];
	influencerCategories: any[] = ['Modelo', 'Actor', 'Youtuber', 'Deportista', 'Tiktoker', 'Instagram', 'Twitch'];

	constructor(
		private router: Router,
		private userService: UserService,
		private afstore: AngularFirestore) { }

	ngOnInit() {
	}

	onSelectCategories(event, profileType: string){
		const selectedCategories = event.detail.value;
		
		if(profileType === 'artist') {
			this.selectedArtistCategories = selectedCategories;
		} else if(profileType === 'creative') {
			this.selectedCreativeCategories = selectedCategories;
		} else if(profileType === 'influencer') {
			this.selectedInfluencerCategories = selectedCategories;
		}
	}
	
	saveProfile(profileType: string){
		const userId = this.userService.getUID();
		const userProfile: UserProfile = {
			uid: userId,
			username: '',  // Initialize with empty string
			bio: '',  // Initialize with empty string
			profileType: profileType,
			artist: this.selectedArtistCategories,
			creative: this.selectedCreativeCategories,
			influencer: this.selectedInfluencerCategories
		};
		
		if(profileType === 'artist') {
			this.selectedValues = this.selectedArtistCategories;
		} else if(profileType === 'creative') {
			this.selectedValues = this.selectedCreativeCategories;
		} else if(profileType === 'influencer') {
			this.selectedValues = this.selectedInfluencerCategories;
		}

		this.userService.updateUserProfile(userId, userProfile)
			.then(() => {
				console.log('User profile saved:', userProfile);
				this.router.navigate([`/${profileType}s`]);
			})
			.catch((error) => {
				console.error('Error saving user profile:', error);
			});
	}

}
