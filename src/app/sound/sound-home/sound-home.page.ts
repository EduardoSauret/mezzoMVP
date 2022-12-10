import { Component, OnInit } from '@angular/core';
import { SoundConstants } from './sound-home.constants';

@Component({
  selector: 'app-sound-home',
  templateUrl: './sound-home.page.html',
  styleUrls: ['./sound-home.page.scss'],
})
export class SoundHomePage implements OnInit {
  headerFilter: boolean = true;
  headerMenu: boolean = true;
  headerSearch: boolean = true;
  posts: any[];
  constructor() {
    this.posts = [];
    this.posts.push({
      avatar: '../../assets/images/avatar-jozue.png',
      thumbnail: '../../assets/images/thumbnail-jozue.png',
      name: 'Jozue',
      profile: 'Singer',
      distance: '15km',
      title: 'En Llamas (Official Video)',
      description: 'Northkey presenta a JOZUE en "UNA NOCHE MÁS Ft. CARO ESQUER Prod, Mixing & Mastering by Soulaced Artwork by...'
    });
    this.posts.push({
      avatar: '../../assets/images/avatar-adan.png',
      thumbnail: '../../assets/images/thumbnail-beatboy.png',
      name: 'BeatBoy',
      profile: 'DJ',
      distance: '21km',
      title: 'No Doubt ft. La Sinclair (Video Oficial)',
      description: 'CRY AGAIN - ADAN CRUZ (Official Music Video) #CryAgain #AdanCruz Suscríbete al canal de Adán Cruz haciendo click...'
    });
    this.posts.push({
      avatar: '../../assets/images/avatar-geramx.png',
      thumbnail: '../../assets/images/thumbnail-geramx.png',
      name: 'Gera MX',
      profile: 'Singer',
      distance: '33km',
      title: 'No Teniamos Nada Pero Eramos Felices',
      description: 'Siguenos en este nuevo proyecto, traemos contenido sobre raperos de Mexico . Subscribete y regalanos un lik...'
    });
    this.posts.push({
      avatar: '../../assets/images/avatar-drum.png',
      thumbnail: '../../assets/images/thumbnail-drum.png',
      name: 'Phynx',
      profile: 'Drummer',
      distance: '41km',
      title: 'No Doubt ft. La Sinclair (Video Oficial)',
      description: 'CRY AGAIN - ADAN CRUZ (Official Music Video) #CryAgain #AdanCruz Suscríbete al canal de Adán Cruz haciendo click...'
    });
    this.posts.push({
      avatar: '../../assets/images/avatar-highost.png',
      thumbnail: '../../assets/images/thumbnail-highost.png',
      name: 'HiGhost',
      profile: 'DJ',
      distance: '21km',
      title: 'One Love (Video Oficial)',
      description: 'Escucha One Love de Gera MX, Blessd en plataformas..'
    });
  }

  ngOnInit() {
  }

}
