import { booksApi } from '../../api/booksApi/booksApi';
import { toggleIsFetching } from '../../redux/actions/loading';
import { throwError } from '../../redux/actions/error';

export const SET_HOVERED_BOOK = 'SET_HOVERED_BOOK';
export const setHoveredBook = id => {
  return {
    type: SET_HOVERED_BOOK,
    payload: id
  };
};

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST,
  };
};

export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const fetchBooksSuccess = (books, totalBooks) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: {
      books,
      totalBooks
    }
  };
};

export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const fetchBooksFailure = error => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error,
  };
};

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const setCurrentPage = pageNumber => {
  return {
    type: SET_CURRENT_PAGE,
    payload: pageNumber,
  };
};

export const SET_BOOKS_PER_PAGE = 'SET_BOOKS_PER_PAGE';
export const SET_ALL_BOOKS_PER_PAGE = 'SET_ALL_BOOKS_PER_PAGE';
export const setBooksPerPage = filter => {
  if (filter === 'all') {
    return {
      type: SET_ALL_BOOKS_PER_PAGE,
      payload: filter,
    };
  } else {
    return {
      type: SET_BOOKS_PER_PAGE,
      payload: filter,
    };
  }
};

export const FETCH_BOOK_BY_ID_SUCCESS = 'FETCH_BOOK_BY_ID_SUCCESS';
export const fetchBookByIdSuccess = book => {
  return {
    type: FETCH_BOOK_BY_ID_SUCCESS,
    payload: book,
  };
};

export const fetchBooks = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(fetchBooksRequest());
    dispatch(toggleIsFetching(true));
    return booksApi.fetchBooks(currentPage, pageSize)
      .then(res => {
        dispatch(fetchBooksSuccess(res.data, res.headers[`x-total-count`]));
        dispatch(toggleIsFetching(false));
      })
      .catch(error => {
        dispatch(toggleIsFetching(false));
        dispatch(throwError(error));

      });
  };
};

export const fetchBookById = id => {
  return dispatch => {
    dispatch(fetchBooksRequest());
    dispatch(toggleIsFetching(true));
    return booksApi.fetchBookById(id)
      .then(res => {
        dispatch(fetchBookByIdSuccess(res.data));
        dispatch(toggleIsFetching(false));
      })
      .catch(error => {
        dispatch(toggleIsFetching(false));
        dispatch(throwError(error));
      });
  };
};