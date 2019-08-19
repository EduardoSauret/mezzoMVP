import { Component, OnInit, ErrorHandler } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AlertController, NavController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { resolve } from 'url';
import { reject } from 'q';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Button } from 'protractor';


@Component({
	selector: 'app-page',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
	
})
export class ProfilePage implements OnInit {

	mainuser: AngularFirestoreDocument
	userPosts
	sub
	posts
	username: string
	profilePic: string

	constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private user: UserService, private router: Router, public alertController: AlertController,
				public navCtrl: NavController ) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.posts = event.posts
			this.username = event.username
			this.profilePic = event.profilePic
		
		})
		
	}

	
	//Log out Firebase 
	async logout() {

		//Tries to log out from firebase
		//In case log out fails, an error is displayed
		//in console
		try{
			this.afAuth.auth.signOut();
		}catch(error){
			console.log("Account fail to Logout from firebase");

		}
	}


	//Delete account from FireBase Alert v2
	async deleteAccountAlert() {
		

		const alert =  await this.alertController.create({
		  header: "Delete Account",
		  message: "Once deleting your account there is no way to recover it. All your informaton will be lost, be aware of these.",
		  inputs: [
			{
			  name: 'Email',
			  placeholder: 'Email'
			},
		  ],

		  buttons: [
			{
			  text: 'Cancel',
			  role: 'cancel',
			},
			{
			  text: 'Delete Account',
			  handler: data => {
				  let usernameFireBase = this.afAuth.auth.currentUser.email;
				  let user = this.afAuth.auth.currentUser;

				  if(usernameFireBase == data.Email){
					  user.delete;  
				  }else{
					  console.log("Wrong email!")
				  }

			  }
			}
		  ]

		});
		await alert.present();
	  }


	ngOnDestroy() {
		this.sub.unsubscribe()
	}

	goTo(postID: string) {

		this.router.navigate(['/tabs/post/' + postID.split('/')[0]])
	}

	ngOnInit() {
	}

}
