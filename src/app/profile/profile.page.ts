import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { resolve } from 'url';
import { reject } from 'q';

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

	constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private user: UserService, private router: Router, public alertController: AlertController ) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.posts = event.posts
			this.username = event.username
			this.profilePic = event.profilePic
		})
		
	}

	//Action popup for the logout
	async logOutAlert(){
		const alert = await this.alertController.create({
			header: 'Leaving so soon?',
			buttons: ['Yes', "No"]
		});

		await alert.present();
	}

	
	
	//Log out Firebase 
	async logout() {


		console.log("First");
		this.afAuth.auth.signOut();
		console.log("Success")

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
