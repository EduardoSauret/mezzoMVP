import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {

	navLinks: any[];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private router: Router,
		private menu: MenuController,
		public fireAuth: AngularFireAuth
	) {
		this.initializeApp();
		this.navLinks = [
			{profileType: 'Artists', routePath: 'artists/home'},
			{profileType: 'Content Creators', routePath: 'creators/home'},
			{profileType: 'Influencers', routePath: 'influencers/home'},
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	goTo(route: string) {
		this.menu.close();
		this.router.navigate([route]);
	}

	signOut() {
		this.fireAuth.auth.signOut()
		.then(() => {
			this.menu.close();
			this.router.navigate(['/login']);
		})
		.catch(error => {
			console.log(error);
		});
	}
}
