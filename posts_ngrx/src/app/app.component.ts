import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent implements OnInit {
  title = 'The Blog';
  selectedPost: Post;
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.posts = this.postService.getPosts();
  }

  createPost(post): void {
    this.postService.createPost(post);
  }

  updatePost(post): void {
    this.postService.updatePost(post);
  }

  deletePost(post): void {
    if (post == this.selectedPost) {
      this.selectedPost = undefined;
    }
    this.postService.deletePost(post);
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

}
