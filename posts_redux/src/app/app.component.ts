import { Component } from '@angular/core';

const POSTS: Post[] = [
  { id: 11, status: 1, title: 'Mr. Nice' },
  { id: 12, status: 1, title: 'Narco' },
  { id: 13, status: 1, title: 'Bombasto' },
  { id: 14, status: 1, title: 'Celeritas' },
  { id: 15, status: 1, title: 'Magneta' },
  { id: 16, status: 1, title: 'RubberMan' },
  { id: 17, status: 1, title: 'Dynama' },
  { id: 18, status: 1, title: 'Dr IQ' },
  { id: 19, status: 1, title: 'Magma' },
  { id: 20, status: 1, title: 'Tornado' }
];

export class Post {
  id: number;
  title: string;
  status: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public posts = POSTS;
  title = 'The Blog';
  selectedPost: Post;

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

}
