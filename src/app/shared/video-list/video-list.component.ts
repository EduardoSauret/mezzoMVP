import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'mezzo-video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {

	@Input() videos: any[];

	constructor() { }

	ngOnInit() { }

}
