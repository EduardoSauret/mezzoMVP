import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  posts
  sub

  constructor( 
    private aff: AngularFireFunctions,
    private router: Router) { }

  ngOnInit() {
    const getFeed = this.aff.httpsCallable('getFeed')
    this.sub = getFeed({}).subscribe(data => {
      this.posts = data
    })
  }

  ngOnDestroy() {
    this.sub.ubsubscribe()
  }

  goToPost(postID: string) {
		this.router.navigate(['/tabs/post/' + postID.split('/')[0]])
	}

}
