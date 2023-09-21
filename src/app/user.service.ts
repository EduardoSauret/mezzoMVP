import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

export interface User {
	username: string;
	uid: string;
}

export interface UserProfile {
	uid: string;  // Firebase UID
	email?: string;
  username?: string;
  bio?: string;
	profileType?: string;
  artist?: string[];  // Array of artist data
  creative?: string[];  // Array of creative data
  influencer?: string[];  // Array of influencer data
}

@Injectable()
export class UserService {
	private user: User;
	profileType: string[];
	user$: Observable<firebase.User>;

	constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
		this.user$ = this.afAuth.authState;
	}

	setUser(user: User) {
		this.user = user;
	}

	getCurrentUser(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }

	getUsername(): string {
		return this.user.username;
	}

	reAuth(username: string, password: string) {
		return this.afAuth.auth.currentUser.reauthenticateAndRetrieveDataWithCredential(auth.EmailAuthProvider.credential(username + '@luxilab.com', password));
	}

	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword);
	}

	updateEmail(newemail: string) {
		return this.afAuth.auth.currentUser.updateEmail(newemail + '@luxilab.com');
	}

	async isAuthenticated() {
		if (this.user) { return true; }

		const user = await this.afAuth.authState.pipe(first()).toPromise();

		if (user) {
			this.setUser({
				username: user.email.split('@')[0],
				uid: user.uid
			});

			return true;
		}
		return false;
	}

	getUID(): string {
		return this.user.uid;
	}

	setProfileType(profileType: string[]){
		this.profileType = profileType;
	}

	getProfileType(){
		return this.profileType;
	}

	addUserProfile(userProfile: UserProfile): Promise<void> {
		const { uid, ...userData } = userProfile;  // Extract UID and other data
		return this.firestore.collection('userProfiles').doc(uid).set(userData);
	}

	updateUserProfile(uid: string, userProfile: UserProfile): Promise<void> {
		const { uid: _, ...userData } = userProfile;
		return this.firestore.collection('userProfiles').doc(uid).update(userData);
	}

  getUserProfile(uid: string): Observable<any> {
    return this.firestore.collection('userProfiles').doc(uid).valueChanges();
  }

}
