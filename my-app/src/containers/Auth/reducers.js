import {
  AUTHENTICATE_USER_REQUEST,
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
  UPDATE_ACTIVE_USER_BOOKS,
  SET_ACTIVE_USER

} from './actions';


export const initialState = {
  userId: null,
  firstName: 'Guest',
  lastName: null,
  email: null,
  userBooks: [],
  userBooksIds: [],
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
      const {id, firstName, lastName, email, books, userBooksIds} = action.payload;
      return {
        ...state,
        userId: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        userBooks: [...books],
        userBooksIds: [...userBooksIds],
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

    default:
      return state;
  }
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {



    default:
      return state;
  }
};