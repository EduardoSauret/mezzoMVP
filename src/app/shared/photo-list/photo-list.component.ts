import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'mezzo-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {

	@Input() photos: any[];

	constructor() { 

	}

	ngOnInit() { }

}
