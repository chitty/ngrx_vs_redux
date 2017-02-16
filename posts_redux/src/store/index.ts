import { combineReducers } from 'redux';
import { appReducer } from './app.reducer';

export class IAppState {
  counter?: number;
}

export const rootReducer = combineReducers<IAppState>({
  posts: appReducer
});
