import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';

@Component({
	selector: 'app-content-creators-home',
	templateUrl: './content-creators-home.page.html',
	styleUrls: ['./content-creators-home.page.scss'],
})
export class ContentCreatorsHomePage implements OnInit, OnDestroy {
  headerFilter: boolean = true;
  headerMenu: boolean = true;
  headerSearch: boolean = true;
  posts: any[];
	data;
	private unsubscribe$: Subject<void> = new Subject();
  constructor(private postService: PostService) {
  }

	ngOnInit() {
		this.postService.getPostsWithImages().pipe(takeUntil(this.unsubscribe$)).subscribe(
			(data) => {
				this.data = data;
				console.log(data);
			}
		)
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

}
