import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
	selector: 'app-content-creators-tabs',
	templateUrl: './content-creators-tabs.page.html',
	styleUrls: ['./content-creators-tabs.page.scss'],
})
export class ContentCreatorsTabsPage implements OnInit {

	@ViewChild('tabs', { static: true }) tabs: IonTabs;

	constructor() { }

	ngOnInit() {
		this.tabs.select('home');
	}

}
