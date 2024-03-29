import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'mezzo-audio-list',
	templateUrl: './audio-list.component.html',
	styleUrls: ['./audio-list.component.scss'],
})
export class AudioListComponent implements OnInit {

	@Input() audios: any[];

	constructor() { }

	ngOnInit() { }

}
