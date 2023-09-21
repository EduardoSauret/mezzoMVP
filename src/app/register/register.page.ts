import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AngularFirestore } from '@angular/fire/firestore';
import { User, UserProfile, UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	email: string;
  password: string;
  confirmPassword: string;
  username: string;
  errorMessage: string;
	registrationForm: FormGroup;

	constructor(
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
		public router: Router,
		private fb: FormBuilder,
	) {
		this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
	 }

	ngOnInit() {
	}

	onSubmit() {
		console.log('register clicked')
    if (this.registrationForm.valid) {
      const { email, password } = this.registrationForm.value;
      // Call a function to register the user using Firebase Authentication
      this.registerUserWithEmail(email, password);
    }
  }

	registerUserWithEmail(email: string, password: string) {
		this.afAuth.auth.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
			this.router.navigate(['/new-profile']);
      // Assume you have the user's UID obtained during registration/authentication
      // Replace 'user123' with the actual UID
      const uid = userCredential.user.uid;


			const userProfile: UserProfile = {
				uid: uid,
				username: '',  // Initialize with empty string
				bio: '',  // Initialize with empty string
				artist: [],
				creative: [],
				influencer: []
			};

			this.user.addUserProfile(userProfile)
				.then(() => {
					console.log('User registered and profile created:', userProfile);
				})
				.catch((error) => {
					console.error('Error creating user profile:', error);
				});
		})
		.catch((error) => {
			// Handle registration error
			console.error('Error registering user:', error);
		});
  }

	// async presentAlert(title: string, content: string) {
	// 	const alert = await this.alertController.create({
	// 		header: title,
	// 		message: content,
	// 		buttons: ['OK']
	// 	});
	// 	await alert.present();
	// }

	// async register() {
	// 	this.router.navigate(['/new-profile']);
	// 	const { username, password, confirmPassword } = this;
	// 	// if (password !== confirmPassword) {
	// 	// 	return console.error("Passwords don't match");
	// 	// 	this.presentAlert('test', 'test');
	// 	// }
	// 	try {
	// 		const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@luxilab.com', password);
	// 		this.afstore.doc(`users/${res.user.uid}`).set({
	// 			username
	// 		});
	// 		this.user.setUser({
	// 			username,
	// 			uid: res.user.uid
	// 		});
	// 		// this.presentAlert('Success', 'You are registered!');
	// 		this.router.navigate(['/new-profile']);
	// 	} catch (error) {
	// 		console.dir(error);
	// 	}
	// }

	// public login() {
	// 	this.router.navigate(['/login']);
	// }

}
