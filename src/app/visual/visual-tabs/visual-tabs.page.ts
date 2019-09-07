import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
	selector: 'app-visual-tabs',
	templateUrl: './visual-tabs.page.html',
	styleUrls: ['./visual-tabs.page.scss'],
})
export class VisualTabsPage implements OnInit {

	@ViewChild('tabs', { static: true }) tabs: IonTabs;

	constructor() { }

	ngOnInit() {
		this.tabs.select('home');
	}

}
