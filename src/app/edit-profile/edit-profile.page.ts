import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileService } from '../services/profile.service';
import { UserProfile } from '../shared/interfaces/user.interface';
import { NavController } from '@ionic/angular';
import { GlobalConstants } from '../shared/constants/global.constants';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.page.html',
	styleUrls: ['./edit-profile.page.scss']
})
export class EditProfilePage implements OnInit, OnDestroy {

	mainuser: AngularFirestoreDocument;
	sub;
	username: string;
	profilePic: string;
	uid;
	password: string;
	newpassword: string;
	busy = false;
	displayName: string;
	private userSubscription: Subscription;
	userProfileSubscription: Subscription;
	user;
	userProfile;
	profileTypes: string[] = GlobalConstants.profileTypes;
	selectedProfileType;
	selectedProfileSubTypes;
	profileSubTypes;
	profileSelected: boolean = false;

	@ViewChild('fileBtn', { static: false }) fileBtn: {
		nativeElement: HTMLInputElement
	};
	// userService: any;

	constructor(
		private http: Http,
		private afs: AngularFirestore,
		private afAuth: AngularFireAuth,
		private router: Router,
		private alertController: AlertController,
		private userService: UserService,
		private profileService: ProfileService,
		private navCtrl: NavController) {
		// this.mainuser = afs.doc(`userProfiles/${this.uid}`);
		// this.sub = this.mainuser.valueChanges().subscribe(event => {
		// 	this.username = event.username;
		// 	this.profilePic = event.profilePic;
		// });
		// this.user = this.profileService.getUser();
	}

	ngOnInit() {
		this.userSubscription = this.profileService.getUser().subscribe(
			(user) => {
				this.user = user;
				console.log(this.user);
			},
			(error) => {
				console.log(error)
			}
		);
	
		this.userProfile = this.userService.userProfile;
		// working for login
		this.userProfileSubscription = this.afAuth.authState.subscribe(user => {
			if (user) {
				this.uid = user.uid;
				this.userService.getUserProfile(this.uid).subscribe(profileData => {
					this.userProfile = profileData;
					this.username = this.userProfile.username;
				})
			}
		});

	}

	onSelectProfileType(event){
		this.selectedProfileType = event.detail.value;
		if(event.detail.value === 'artist') {
			this.profileSubTypes = GlobalConstants.profileArtistSubTypes;
			this.profileSelected = true;
		} else if (event.detail.value === 'creator') {
			this.profileSubTypes = GlobalConstants.profileCreatorSubTypes;
			this.profileSelected = true;
		} else if (event.detail.value === 'influencer'){
			this.profileSubTypes = GlobalConstants.profileInfluencerSubTypes;
			this.profileSelected = true;
		}
	}

	onSelectProfileSubType(event) {
		const selectedCategories = event.detail.value;
		if(this.selectedProfileType === 'artist') {
			this.selectedProfileSubTypes = selectedCategories;
		} else if(this.selectedProfileType === 'creator') {
			this.selectedProfileSubTypes = selectedCategories;
		} else if(this.selectedProfileType === 'influencer') {
			this.selectedProfileSubTypes = selectedCategories;
		}
	}

	updateProfile(){
		const userProfilePayload: UserProfile = {
			uid: this.user.uid,
			username: this.username,  // Initialize with empty string
			profileType: this.selectedProfileType,
			profileSubTypes: this.selectedProfileSubTypes
		};

		this.userService.updateUserProfile(this.user.uid, userProfilePayload)
		.then(() => {
			console.log('User profile saved:', userProfilePayload);
			this.userService.setUserProfile(userProfilePayload);
			this.navCtrl.back();
		})
		.catch((error) => {
			console.error('Error saving user profile:', error);
		});
	}

	ngOnDestroy() {
		this.userSubscription.unsubscribe();
		this.userProfileSubscription.unsubscribe();
	}
	
	// updateProfilePic() {
	// 	this.fileBtn.nativeElement.click();
	// }

	// uploadPic(event) {
	// 	const files = event.target.files;

	// 	const data = new FormData();
	// 	data.append('file', files[0]);
	// 	data.append('UPLOADCARE_STORE', '1');
	// 	data.append('UPLOADCARE_PUB_KEY', '76d6cf8c49b5480b9df5');
	// 	this.http.post('https://upload.uploadcare.com/base/', data)
	// 	.subscribe(res => {
	// 		const uuid = res.json().file;
	// 		this.mainuser.update({
	// 			profilePic: uuid
	// 		});
	// 	});
	// }

	// async presentAlert(title: string, content: string) {
	// 	const alert = await this.alertController.create({
	// 		header: title,
	// 		message: content,
	// 		buttons: ['OK']
	// 	});

	// 	await alert.present();
	// }

	// async updateDetails() {
	// 	this.busy = true;

	// 	if (!this.password) {
	// 		this.busy = false;
	// 		return this.presentAlert('Error!', 'You have to enter a password');
	// 	}

	// 	try {
	// 		await this.user.reAuth(this.user.getUsername(), this.password);
	// 	} catch (error) {
	// 		this.busy = false;
	// 		return this.presentAlert('Error!', 'Wrong password!');
	// 	}

	// 	if (this.newpassword) {
	// 		await this.user.updatePassword(this.newpassword);
	// 	}

	// 	if ( this.username !== this.user.getUsername()) {
	// 		await this.user.updateEmail(this.username);
	// 		this.mainuser.update({
	// 			username: this.username
	// 		});
	// 	}

	// 	this.password = '';
	// 	this.newpassword = '';
	// 	this.busy = false;

	// 	await this.presentAlert('Done!', 'Your profile was updated!');

	// 	this.router.navigate(['/tabs/feed']);
	// }

}
