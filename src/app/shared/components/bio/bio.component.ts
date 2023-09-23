import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/user.service';

@Component({
  selector: 'mezzo-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {

  @Input() bioData: any[];
	@Input() userProfile: UserProfile;

  constructor() { }

  ngOnInit() {}

}
