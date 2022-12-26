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

	music: any[] = ['Bajista', 'Guitarrista', 'Baterista'];
	visual: any[] = ['Fotografo', 'Camarografo', 'Director'];
	actors: any[] = ['Modelo', 'Actor', 'Coreografo'];

	selectedMusicProfile;
	selectedVisualProfile;
	selectedActorsProfile;

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

		this.router.navigate(['/visual']);
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

	async saveNewProfile() {
		this.busy = true;

		// const image = this.imageURL;
		// const activeEffect = this.activeEffect;
		// const desc = this.desc;

		// this.afstore.doc(`users/${this.user.getUID()}`).update({
		// 	posts: firestore.FieldValue.arrayUnion(`${image}/${activeEffect}`)
		// });

		// this.afstore.doc(`posts/${image}`).set({
		// 	desc,
		// 	author: this.user.getUsername(),
		// 	likes: [],
		// 	effect: activeEffect
		// });

		// this.busy = false;
		// this.imageURL = '';
		// this.desc = '';



		// const alert = await this.alertController.create({
		// 	header: 'Done',
		// 	message: 'Your post was created!',
		// 	buttons: ['Cool!']
		// });

		// await alert.present();

		this.router.navigate(['/tabs/home']);
	}

// Ionic change detection method for select
	ionChangeFn(event) {
		console.log(event.detail.value);
	}

}
