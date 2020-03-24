import {
  FETCH_USER_BOOKS_REQUEST,
  FETCH_USER_BOOKS_SUCCESS,
  FETCH_USER_BOOKS_FAILURE,
  UPDATE_USER_BOOKS_REQUEST,
  UPDATE_USER_BOOKS_SUCCESS,
  UPDATE_USER_BOOKS_FAILURE,
} from './actions';

const initialState = {
  libraryBooks: [],
  userReadBooks: [],
  userFavouriteBooks: [],
  error: null
};

export const libraryReducers = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_USER_BOOKS_REQUEST: {
      return {
        ...state,
        error: null
      };
    }

    case FETCH_USER_BOOKS_SUCCESS: {
      const {libraryBooks, favouriteBooks, readBooks} = action.payload;
      return {
        ...state,
        libraryBooks: [...libraryBooks],
        userReadBooks: [...readBooks],
        userFavouriteBooks: [...favouriteBooks],
        error: null
      };
    }

    case FETCH_USER_BOOKS_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    case UPDATE_USER_BOOKS_REQUEST:
      return {
        ...state
      };

    case UPDATE_USER_BOOKS_SUCCESS:
      return {
        ...state,
      };

    case UPDATE_USER_BOOKS_FAILURE: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
