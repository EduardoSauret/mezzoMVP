import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mezzo-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
})
export class HeaderToolbarComponent implements OnInit {

	@Input('headerMenu') headerMenu: boolean;
	@Input('headerSearch') headerSearch: boolean;
	@Input('headerTitle') headerTitle: string;
	@Input('headerFilter') headerFilter: boolean;
	@Input('backButton') backButton: boolean;

  constructor() { }

  ngOnInit() {}

}
