import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sound-profile',
  templateUrl: './sound-profile.page.html',
  styleUrls: ['./sound-profile.page.scss'],
})
export class SoundProfilePage implements AfterViewInit {

  photos: any[];

  constructor(
    // private popoverCtrl: PopoverController
  ) {
    this.photos = [];
    this.photos.push({
      src: '../../assets/images/profile/profile-01.jpg',
    });
    this.photos.push({
      src: '../../assets/images/profile/profile-02.jpg',
    });
    this.photos.push({
      src: '../../assets/images/profile/profile-03.jpg',
    });
    this.photos.push({
      src: '../../assets/images/profile/profile-04.jpg',
    });
    this.photos.push({
      src: '../../assets/images/profile/profile-05.jpg',
    });
    this.photos.push({
      src: '../../assets/images/profile/profile-06.jpg',
    });
  }

  ngAfterViewInit() {
    // console.log('Super tabs is ', this.superTabs);
    // this.superTabs.selectTab(1);
  }

}
