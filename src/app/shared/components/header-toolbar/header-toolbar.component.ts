import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mezzo-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
})
export class HeaderToolbarComponent implements OnInit {

	@Input('headerTitle') headerTitle: string;
	@Input('pageType') pageType: string;

  constructor() { }

  ngOnInit() {}

}
