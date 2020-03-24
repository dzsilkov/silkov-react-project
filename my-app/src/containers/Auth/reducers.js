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
  UPDATE_ACTIVE_USER_BOOKS

} from './actions';


export const initialState = {
  authUserId: null,
  authUserToken: null,
  authUser: null,
  userBooks: [],
  userBooksIds: [],
  userReadBooksIds: [],
  userFavouriteBooksIds: [],
  error: null,
};

export const libraryReducers = (state = initialState, action) => {
  switch (action.type) {

    case SET_USER_BOOKS:
      return {
        ...state,
      };

    case SET_USER_READ_BOOKS:
      return {
        ...state,
      };

    case SET_USER_FAVORITE_BOOKS: {
      return {
        ...state,
      };
    }

    case FETCH_ADD_USER_BOOK_REQUEST: {
      return {
        ...state,
      };
    }

    case FETCH_ADD_USER_BOOK_SUCCESS: {
      const {allBooks, readBooks, favouriteBooks} = action.payload;
      return {
        ...state,
        userBooks: [...allBooks],
        userBooksIds: [...allBooks.map(book => book.id)],
        userReadBooks: [...readBooks],
        userFavouriteBooks: [...favouriteBooks],
      };
    }

    case FETCH_ADD_USER_BOOK_FAILURE: {
      return {
        ...state,
        error: action.payload
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
        userBooks: [...books],
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

    case UPDATE_ACTIVE_USER_BOOKS: {
      const newBooks = action.payload;
      return {
        ...state,
        authUser: {...state.authUser, books: {...newBooks}},
        userBooks: [...newBooks]
      };
    }

    default:
      return state;
  }
};




// export const userReducers = (state = initialState, action) => {
//   switch (action.type) {
//
//     case SIGN_IN_REQUEST:
//       return {
//         ...state,
//       };
//
//     case SIGN_IN_SUCCESS:
//
//       return {
//         ...state,
//       };
//
//     case SIGN_IN_FAILURE:
//       return {
//         ...state,
//         error: action.payload
//       };
//
//     case SIGN_UP_REQUEST:
//       return {
//         ...state,
//       };
//
//     case SIGN_UP_SUCCESS:
//       const authUser = action.payload;
//       return {
//         ...state,
//         authUser: authUser
//       };
//
//     case SIGN_UP_FAILURE:
//       return {
//         ...state,
//         error: action.payload
//       };
//
//
//     case SIGN_OUT_REQUEST:
//       return {
//         ...state,
//       };
//
//     case SIGN_OUT_SUCCESS:
//       return {
//         ...state,
//         authUser: null,
//         error: null,
//       };
//
//     case SIGN_OUT_FAILURE:
//       return {
//         ...state,
//         error: action.payload
//       };
//
//     default:
//       return state;
//   }
// };