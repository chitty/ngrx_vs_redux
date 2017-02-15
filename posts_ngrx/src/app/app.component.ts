import { Component } from '@angular/core';
import { Store, provideStore } from '@ngrx/store';

import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'The Blog';
  selectedPost: Post;
  public posts;

  constructor(private _store: Store<any>) {
      _store.select('posts')
        .subscribe(posts => {
          this.posts = posts;
        })
  }

  createPost(post) {
    this._store.dispatch({type: "ADD_POST", payload: post});
  }

  deletePost(id) {
    this._store.dispatch({type: "DELETE_POST", payload: id});
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

}
