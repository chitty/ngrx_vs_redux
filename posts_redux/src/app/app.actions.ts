import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Injectable()
export class PostActions {

  constructor (
    private ngRedux: NgRedux<IAppState>) {

  }

  static LOAD_POSTS: string = 'LOAD_POSTS';
  static INCREMENT_COUNTER: string = 'INCREMENT_COUNTER';
  static CREATE_POST: string = 'CREATE_POST';

  increment(): void {
    this.ngRedux.dispatch({ type: PostActions.INCREMENT_COUNTER });
  }

  createPost(post): void {
    this.ngRedux.dispatch({ type: PostActions.CREATE_POST, post });
  }

}
