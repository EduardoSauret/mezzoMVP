import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mezzo-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {

  @Input() bioData: any[];

  constructor() { }

  ngOnInit() {}

}
