import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mezzo-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {

  @Input() bioData: any[];
	@Input() userProfile: UserProfile;

  constructor(private router: Router) { }

  ngOnInit() {}

	onEdit() {
		this.router.navigate(['/edit-profile']);
	}

}
