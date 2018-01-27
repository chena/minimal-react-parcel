import { ADD_BOOK } from '../constants/action-types';

const initialState = {
  books: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {...state, books: [...state.books, action.payload]};
    default:
      return state
  }
};

export default rootReducer;