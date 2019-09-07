import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
	selector: 'app-sound-tabs',
	templateUrl: './sound-tabs.page.html',
	styleUrls: ['./sound-tabs.page.scss'],
})
export class SoundTabsPage implements OnInit {

	@ViewChild('tabs', { static: true }) tabs: IonTabs;

	constructor() { }

	ngOnInit() {
		this.tabs.select('home');
	}

}
