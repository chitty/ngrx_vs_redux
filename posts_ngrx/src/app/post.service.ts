import { Injectable } from '@angular/core';
import { Store, provideStore } from '@ngrx/store';

import { Post } from './post';

@Injectable()
export class PostService {

  public posts;

  constructor(private _store: Store<any>) {
      _store.select('posts')
        .subscribe(posts => {
          this.posts = posts;
        })
  }

  getPosts(): Post[] {
    return this.posts;
  }

  createPost(post) {
    this.posts.push(post);
    this._store.dispatch({type: "ADD_POST", payload: {
      id: post.id,
      title: post.title,
      status: post.status
    }});
  }

  updatePost(post) {
    for (var i in this.posts){
      if (this.posts[i].id === post.id) {
        this.posts[i].title = post.title;
        break;
      }
    }
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
  }
}
