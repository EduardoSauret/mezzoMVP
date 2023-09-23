import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserProfile, UserService } from '../user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

	username = '';
	email = '';
	password = '';
	verifyPassword = '';
	userProfileSubscription: Subscription;
	profileType = '';

	constructor(public afAuth: AngularFireAuth, public userService: UserService, public router: Router) { }

	ngOnInit() {
		
	}

	onSubmit(){
		this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
		.then((userCredential) => {
			const userCredentials = userCredential.user;
			this.userService.setUserProfileDataFromFirestore(userCredentials.uid);
			this.userService.getUserProfile(userCredentials.uid);
			this.getUserProfile(userCredentials.uid);
    })
    .catch(error => {
			console.log('Login Error');
      console.log(error);
    });
	}


	getUserProfile(uid): void {
    const userId = uid;
    this.userProfileSubscription = this.userService.getUserProfile(userId).subscribe(
      userProfileData => {
        // Process the userProfileData
				this.profileType = userProfileData.profileType;
				this.router.navigate([`/${this.profileType}s/profile`]);
      },
      error => {
        // Handle the error
        console.error(error);
      }
    );
  }

	ngOnDestroy() {
		if(this.userProfileSubscription){
			this.userProfileSubscription.unsubscribe();
		}
	}

}
