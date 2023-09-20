import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

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
		private menu: MenuController
	) {
		this.initializeApp();
		this.navLinks = [
			{profileType: 'Content Creators', routePath: 'content-creators'},
			{profileType: 'Sound Producers', routePath: 'sound/home'},
			{profileType: 'Influencers', routePath: 'influencers'},
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
}
