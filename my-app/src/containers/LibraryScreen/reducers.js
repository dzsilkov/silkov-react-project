import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
  SET_USER_BOOKS,
  SET_USER_READ_BOOKS,
  SET_USER_FAVORITE_BOOKS,
  FETCH_USER_BOOKS_REQUEST,
  FETCH_USER_BOOKS_SUCCESS,
  FETCH_USER_BOOKS_FAILURE,
  FETCH_ADD_USER_BOOK_REQUEST,
  FETCH_ADD_USER_BOOK_SUCCESS,
  FETCH_ADD_USER_BOOK_FAILURE,
  ADD_BOOK_TO_LIBRARY,
} from './actions';

const initialState = {
  libraryBooks: [],
  userReadBooks: [],
  userFavouriteBooks: [],
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
        userFavouriteBooks: [...favouriteBooks]
      };
    }

    case FETCH_USER_BOOKS_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    case SET_USER_BOOKS:
      return {
        ...state,
        userBooks: [...action.payload]
      };

    case SET_USER_READ_BOOKS:
      return {
        ...state,
        userReadBooks: [...action.payload]
      };

    case SET_USER_FAVORITE_BOOKS: {
      return {
        ...state,
        userFavouriteBooks: [...action.payload]
      };
    }

    case ADD_BOOK_TO_LIBRARY: {
      const book = action.payload;
      const userBooks = new Set([...state.userBooks, book]);
      return {
        ...state,
        userBooks: [...userBooks]
      };
    }

    default:
      return state;
  }
};
