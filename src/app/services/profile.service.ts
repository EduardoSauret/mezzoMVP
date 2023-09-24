import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { UserProfile } from '../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
	firestore: any;
	userProfile: UserProfile;

  constructor(private auth: AngularFireAuth) { }

  getUser() {
    return this.auth.user;
  }

	updateUserProfile(uid: string, userProfile: UserProfile): Promise<void> {
		const { uid: _, ...userData } = userProfile;
		this.userProfile = userProfile;
		return this.firestore.collection('userProfiles').doc(uid).update(userData);
	}

	getUserProfile(uid: string): Observable<any> {
    return this.firestore.collection('userProfiles').doc(uid).valueChanges();
  }
}