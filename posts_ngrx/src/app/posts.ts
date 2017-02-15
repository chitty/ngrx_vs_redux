import { ActionReducer, Action } from '@ngrx/store';

export const posts = (state = [], action) => {
    switch (action.type) {
        case "ADD_POST":
            return [
              ...state,
              action.payload
            ];

        default:
            return state;
    }
}
