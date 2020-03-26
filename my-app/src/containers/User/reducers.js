import {
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SET_ACTIVE_USER,
  UPDATE_ACTIVE_USER_BOOKS
} from './actions';


export const initialState = {
  userId: null,
  firstName: null,
  lastName: null,
  email: null,
  userBooks: [],
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
        error: null
      };

    case SET_ACTIVE_USER:
      const {id, firstName, lastName, email, books, userBooksIds, userFavouriteBooksIds, userReadBooksIds} = action.payload;
      return {
        ...state,
        userId: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        userBooks: [...books],
        userBooksIds: [...userBooksIds],
        userReadBooksIds: [...userReadBooksIds],
        userFavouriteBooksIds: [...userFavouriteBooksIds],
        error: null,
      };


    case AUTHENTICATE_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case UPDATE_ACTIVE_USER_BOOKS: {
      return {
        ...state,
        userBooks: [...action.payload.books],
        userBooksIds: [...action.payload.userBooksIds],
      };
    }

    case SIGN_IN_REQUEST:
      return {
        ...state,
      };

    case SIGN_IN_SUCCESS:

      return {
        ...state,
      };

    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case SIGN_UP_REQUEST:
      return {
        ...state,
      };

    case SIGN_UP_SUCCESS:
      const authUser = action.payload;
      return {
        ...state,
        authUser: authUser
      };

    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case SIGN_OUT_REQUEST:
      return {
        ...state,
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        userId: null,
        firstName: null,
        lastName: null,
        email: null,
        userBooks: [],
        userBooksIds: [],
        error: null,
      };

    case SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }

};