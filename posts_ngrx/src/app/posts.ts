import { ActionReducer, Action } from '@ngrx/store';

export const posts = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        action.payload
      ];
    case "UPDATE_POST":
      return state.map(post => {
        if (post.id === action.payload) {
          return Object.assign({}, post, action.payload)
        }
        return post;
      });
    case "DELETE_POST":
      return state.filter(post => post.id !== action.payload);
    case "INCREMENT_STATUS":
      return state.map(post => {
        if (post.id === action.payload) {
          return Object.assign({}, post, {
            status: +post.status + 1
          })
        }
        return post;
      });
    case "DECREMENT_STATUS":
      return state.map(post => {
        if (post.id === action.payload) {
          return Object.assign({}, post, {
            status: +post.status - 1
          })
        }
        return post;
      });
    default:
      return state;
  }
}
