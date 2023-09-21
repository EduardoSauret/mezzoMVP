import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
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

	constructor(public afAuth: AngularFireAuth, public user: UserService, public router: Router) { }

	ngOnInit() {
		
	}

	onSubmit(){
		//TODO: get userprofile from firebase and get profileType
		// const profileType = this.user.getProfileType();
		const profileType = 'influencers';
		// this.router.navigate([`${profileType}/profile`]);

		this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
		.then(() => {
      this.router.navigate([`${profileType}/profile`]);
    })
    .catch(error => {
			console.log('Login Error');
      console.log(error);
    });
	}

}
