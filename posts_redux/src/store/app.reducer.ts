import { PostActions } from '../app/app.actions';
import { Post } from '../app/post';
import {List} from 'immutable';

const INITIAL_STATE: List<Post> = List([]);

export function appReducer(state: List<Post> = INITIAL_STATE, action:any) {
  if (!state) {
      return List([]);
  }
  switch (action.type) {
    case PostActions.LOAD_POSTS:
      return List(action.posts);
    case PostActions.INCREMENT_COUNTER:
      return state;
    case PostActions.CREATE_POST:
      return state.push(action.payload);
    default:
      return state;
  }
}
