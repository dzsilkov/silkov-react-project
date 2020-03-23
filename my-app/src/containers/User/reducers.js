import {
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
} from './actions';

export const initialState = {
  authUserId: null,
  authUserToken: null,
  authUser: null,
  userBooksIds: [],
  userReadBooksIds: [],
  userFavouriteBooksIds: [],
  error: null,
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {

    case AUTHENTICATE_USER_REQUEST:
      return {
        ...state,
      };

    case AUTHENTICATE_USER_SUCCESS:
      const {id, token, books, } = action.payload;
      return {
        ...state,
        authUserId: id,
        authUserToken: token,
        authUser: action.payload,
        userBooksIds: [...books.map(book => book.id)],
        userReadBooksIds: [...books.filter(book => book.read).map(book => book.id)],
        userFavouriteBooksIds: [...books.filter(book => book.favourite).map(book => book.id)],
        error: null,
      };

    case AUTHENTICATE_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};