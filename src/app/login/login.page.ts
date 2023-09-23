import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserProfile, UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	username = '';
	email = '';
	password = '';
	verifyPassword = '';

	constructor(public afAuth: AngularFireAuth, public userService: UserService, public router: Router) { }

	ngOnInit() {
		
	}

	onSubmit(){
		//TODO: get userprofile from firebase and get profileType
		// const profileType = this.user.getProfileType();
		const profileType = 'artists';
		// this.router.navigate([`${profileType}/profile`]);

		this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
		.then((userCredential) => {
			const userCredentials = userCredential.user;
			this.userService.setUserProfileDataFromFirestore(userCredentials.uid);
			

      this.router.navigate([`${profileType}/profile`]);
    })
    .catch(error => {
			console.log('Login Error');
      console.log(error);
    });
	}

}
