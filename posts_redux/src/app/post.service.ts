import { Injectable } from '@angular/core';

import { Post } from './post';

@Injectable()
export class PostService {

  public posts = [
    { id: 11, status: 1, title: 'Mr. Nice' },
    { id: 12, status: 2, title: 'Narco' },
    { id: 13, status: 3, title: 'Bombasto' },
    { id: 14, status: 4, title: 'Celeritas' },
    { id: 15, status: 5, title: 'Magneta' },
    { id: 16, status: 6, title: 'RubberMan' },
    { id: 17, status: 5, title: 'Dynama' },
    { id: 18, status: 4, title: 'Dr IQ' },
    { id: 19, status: 3, title: 'Magma' },
    { id: 20, status: 2, title: 'Tornado' }
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  createPost(post) {
    this.posts.push(post);
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
