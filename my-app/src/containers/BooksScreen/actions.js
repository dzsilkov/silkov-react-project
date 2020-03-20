import { booksApi } from '../../api/booksApi/booksApi';

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
export const setBooksPerPage = number => {
  return {
    type: SET_BOOKS_PER_PAGE,
    payload: number,
  };
};

export const FETCH_BOOK_BY_ID_SUCCESS = 'FETCH_BOOK_BY_ID_SUCCESS';
export const fetchBookByIdSuccess = book => {
  return {
    type: FETCH_BOOK_BY_ID_SUCCESS,
    payload: book,
  };
};


export const fetchBooks = (currentPage = 1, pageSize = 5) => {
  return dispatch => {
    dispatch(fetchBooksRequest());
    return booksApi.fetchBooks(currentPage, pageSize)
      .then((res) => {
        dispatch(fetchBooksSuccess(res.data, res.headers[`x-total-count`]));
      })
      .catch(error => {
        dispatch(fetchBooksFailure(error));
      });
  };
};

export const fetchBookById = (id) => {
  return dispatch => {
    (fetchBooksRequest());
    return booksApi.fetchBookById(id)
      .then(res => {
        console.log((res));
        dispatch(fetchBookByIdSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchBooksFailure(error));
      });
  };
};