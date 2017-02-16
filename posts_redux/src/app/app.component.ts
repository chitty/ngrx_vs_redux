import { Component, OnInit } from '@angular/core';
import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer } from '../store';
import * as createLogger from 'redux-logger';

import { Post } from './post';
import { PostActions } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'The Blog';
  selectedPost: Post;
  posts: Post[];

  constructor(
    public actions: PostActions,
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {},
      [ createLogger() ],
      [ devTool.isEnabled() ? devTool.enhancer() : f => f]);
  }

  ngOnInit(): void {
    console.log('ng-redux');
  }

}
