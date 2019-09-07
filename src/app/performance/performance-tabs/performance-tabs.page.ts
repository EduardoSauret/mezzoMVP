import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
	selector: 'app-performance-tabs',
	templateUrl: './performance-tabs.page.html',
	styleUrls: ['./performance-tabs.page.scss'],
})
export class PerformanceTabsPage implements OnInit {

	@ViewChild('tabs', { static: true }) tabs: IonTabs;

	constructor() { }

	ngOnInit() {
		this.tabs.select('home');
	}

}
