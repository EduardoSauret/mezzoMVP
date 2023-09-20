import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
	selector: 'app-actors-tabs',
	templateUrl: './actors-tabs.page.html',
	styleUrls: ['./actors-tabs.page.scss'],
})
export class ActorsTabsPage implements OnInit {

	@ViewChild('tabs', { static: true }) tabs: IonTabs;

	constructor() { }

	ngOnInit() {
		this.tabs.select('home');
	}

}
