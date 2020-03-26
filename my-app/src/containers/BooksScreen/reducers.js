import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  SET_BOOKS_PER_PAGE,
  SET_CURRENT_PAGE,
  FETCH_BOOK_BY_ID_SUCCESS,
} from './actions';

function updateByIds(prevState, arr, ByIds) {
  return {...prevState, [ByIds]: {...Object.fromEntries(arr.map(item => [item.id, {item}]))}};
}

function updateAllIds(prevState, arr, AllIds) {
  return {...prevState, [AllIds]: [...arr.map(item => item.id)]};
}


const initialState = {
  allIds: [],
  byIds: {},
  books: [],
  inActiveUserBooksIds: [],
  selectedBook: {},
  totalBooks: null,
  isFetching: false,
  currentPage: 1,
  booksPerPage: 5,
  error: '',
};

export const bookReducers = (state = initialState, action) => {

  switch (action.type) {

    case FETCH_BOOKS_SUCCESS: {
      const {books, totalBooks} = action.payload;
      return {
        ...state,
        allIds: [...books.map(book => book.id)],
        byIds: {...Object.fromEntries(books.map(book => [book.id, {book}]))},
        books: [...books],
        totalBooks: totalBooks,
        isFetching: false,
      };
    }

    case FETCH_BOOKS_FAILURE: {
      const error = action.payload;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }

    case FETCH_BOOKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    }

    case FETCH_BOOK_BY_ID_SUCCESS: {
      const book = action.payload;
      return {
        ...state,
        selectedBook: {...book},
        isFetching: false,
      };
    }

    case SET_CURRENT_PAGE: {
      const pageNumber = action.payload;
      return {
        ...state,
        currentPage: pageNumber
      };
    }

    case SET_BOOKS_PER_PAGE: {
      return {
        ...state,
        booksPerPage: action.payload
      };
    }
    default:
      return state;
  }
};