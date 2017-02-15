import { ActionReducer, Action } from '@ngrx/store';

export const posts = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        action.payload
      ];
    case "DELETE_POST":
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
}
