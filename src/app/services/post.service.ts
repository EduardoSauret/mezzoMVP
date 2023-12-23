// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {

//   private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
// 	private httpOptions = {
//     headers: new HttpHeaders({ 
//       'Content-Type': 'application/json',
//       // Add any other necessary headers here
//     })
//   };

//   constructor(private http: HttpClient) { }

//   getPosts(): Observable<any> {
//     return this.http.get(this.apiUrl, this.httpOptions);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

interface Post {
  id: number;
  title: string;
  body: string;
  // ... any other properties of a post
}

interface Photo {
  id: number;
  url: string;
  // ... any other properties of a photo
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPostsWithImages(): Observable<any[]> {
    return forkJoin([
      this.http.get<Post[]>(this.postsUrl),
      this.http.get<Photo[]>(this.photosUrl)
    ]).pipe(
      map(([posts, photos]) => {
        return posts.map(post => ({
          ...post,
          image: photos.find(photo => photo.id === post.id)
        }));
      })
    );
  }
}