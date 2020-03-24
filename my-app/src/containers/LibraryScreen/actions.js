import { usersApi } from '../../api/usersApi/usersApi';
import { booksApi } from '../../api/booksApi/booksApi';
import { updateActiveUserBooks } from '../User/actions';

export const FETCH_USER_BOOKS_REQUEST = 'FETCH_USER_BOOKS_REQUEST';
export const fetchUserBooksRequest = () => {
  return {
    type: FETCH_USER_BOOKS_REQUEST,
  };
};

export const FETCH_USER_BOOKS_SUCCESS = 'FETCH_USER_BOOKS_SUCCESS';
export const fetchUserBooksSuccess = books => {
  return {
    type: FETCH_USER_BOOKS_SUCCESS,
    payload: books,
  };
};

export const FETCH_USER_BOOKS_FAILURE = 'FETCH_USER_BOOKS_FAILURE';
export const fetchUserBooksFailure = error => {
  return {
    type: FETCH_USER_BOOKS_FAILURE,
    payload: error,
  };
};

export const UPDATE_USER_BOOKS_REQUEST = 'UPDATE_USER_BOOKS_REQUEST';
export const updateUserBooksRequest = () => {
  return {
    type: UPDATE_USER_BOOKS_REQUEST,
  };
};

export const UPDATE_USER_BOOKS_SUCCESS = 'UPDATE_USER_BOOKS_SUCCESS';
export const updateUserBooksSuccess = books => {
  return {
    type: UPDATE_USER_BOOKS_SUCCESS,
    payload: books,
  };
};

export const UPDATE_USER_BOOKS_FAILURE = 'UPDATE_USER_BOOKS_FAILURE';
export const updateUserBooksFailure = error => {
  return {
    type: UPDATE_USER_BOOKS_FAILURE,
    payload: error,
  };
};

export const fetchLibraryBooks = () => {
  return (dispatch, getState) => {
    const {activeUser: {userBooksIds}} = getState();
    dispatch(fetchUserBooksRequest());
    return booksApi.fetchUserBooks(userBooksIds)
      .then(({data}) => {
        const {activeUser: {userBooks}} = getState();
        const libraryBooks = data.map(book => {
          return {...book, ...userBooks.find(userBook => book.id === userBook.id)};
        });
        const favouriteBooks = [...libraryBooks.filter(book => book.favourite)];
        const readBooks = [...libraryBooks.filter(book => book.read)];
        dispatch(fetchUserBooksSuccess({libraryBooks, favouriteBooks, readBooks}));
      })
      .catch(error => {
        dispatch(fetchUserBooksFailure(error));
      });
  };
};

export const addBookToLibrary = bookId => {
  return (dispatch, getState) => {
    const {activeUser: {userId, userBooks}} = getState();
    const data = [...userBooks, {id: bookId, read: false, favourite: false}];
    dispatch(updateUserBooksRequest());
    return usersApi.updateUserBooks(userId, data)
      .then(({data: {books}}) => {
        dispatch(updateActiveUserBooks(books));
        dispatch(updateUserBooksSuccess());
      });
  };
};

export const deleteUserBook = bookId => {
  return (dispatch, getState) => {
    const {activeUser: {userId, userBooks}} = getState();
    const data = [...userBooks.filter(book => book.id !== bookId)];
    dispatch(updateUserBooksRequest());
    return usersApi.deleteUserBook(userId, data)
      .then(({data: {books}}) => {
        dispatch(updateActiveUserBooks(books));
        dispatch(fetchLibraryBooks());
        dispatch(updateUserBooksSuccess());
      })
      .catch(error => {
        dispatch(updateUserBooksFailure(error));
      });
  };
};

export const updateUserBooks = (id, prop) => {
  return (dispatch, getState) => {
    const {activeUser: {userId, userBooks}} = getState();
    const data = [...userBooks.map(book => book.id === id ? {...book, [prop]: !book[prop]} : {...book})];
    dispatch(updateUserBooksRequest());
    return usersApi.updateUserBooks(userId, data)
      .then(({data: {books}}) => {
        dispatch(updateActiveUserBooks(books));
        dispatch(fetchLibraryBooks());
        dispatch(updateUserBooksSuccess());
      })
      .catch(error => {
        dispatch(updateUserBooksFailure(error));
      });
  };
};
