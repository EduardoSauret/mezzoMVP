import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(public afAuth: AngularFireAuth) { }

  async login() {
    try {
      // username/email hack
      const res = await this.afAuth.auth.signInWithEmailAndPassword(this.username + '@luxi.com', this.password)
    } catch(err) {
      console.dir(err);
      if(err.code === 'auth/user-not-found') {
        console.log('User not found');
      }
    }
  }
}
