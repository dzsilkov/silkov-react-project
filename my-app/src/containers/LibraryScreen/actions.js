import { usersApi } from '../../api/usersApi/usersApi';
import { authUsers } from '../../api/usersApi/authUsers';
import { booksApi } from '../../api/booksApi/booksApi';
import { updateActiveUserBooks } from '../Auth/actions';

export const SET_USER_BOOKS = 'SET_USER_BOOKS';
export const setUserBooks = books => {
  return {
    type: SET_USER_BOOKS,
    payload: books,
  };
};

export const SET_USER_READ_BOOKS = 'SET_USER_READ_BOOKS';
export const setUserReadBooks = books => {
  return {
    type: SET_USER_READ_BOOKS,
    payload: books,
  };
};

export const SET_USER_FAVORITE_BOOKS = 'SET_USER_FAVORITE_BOOKS';
export const setUserFavoriteBooks = books => {
  return {
    type: SET_USER_READ_BOOKS,
    payload: books,
  };
};

export const ADD_BOOK_TO_LIBRARY = 'ADD_BOOK_TO_LIBRARY';
export const addBookToLibrary = book => {
  return {
    type: ADD_BOOK_TO_LIBRARY,
    payload: book
  };
};


// export const authenticateUser = () => {
//   return dispatch => {
//     dispatch(authenticateUserRequest());
//     authUsers.getAuthenticate()
//       .then(res => {
//         if (typeof res !== 'string') {
//           dispatch(authenticateUserSuccess(res));
//         } else {
//           dispatch(authenticateUserFailure(res));
//         }
//       })
//       .catch(error => {
//         dispatch(authenticateUserFailure(error));
//       });
//   };
// };
//

//
// export const fetchUserBooks = (userBooksIds, userReadBooksIds, userFavouriteBooksIds) => {
//   return dispatch => {
//     dispatch(fetchUserBooksRequest());
//     return usersApi.fetchUserBooks(userBooksIds)
//       .then(res => {
//         const userBooks = res.data;
//         const userFavouriteBooks = userFavouriteBooksIds.map(id => {
//           return id = userBooks.find(book => book.id === id)
//         });
//         const userReadBooks = userReadBooksIds.map(id => {
//           return id = userBooks.find(book => book.id === id)
//         });
//         dispatch(fetchUserBooksSuccess(userBooks, userReadBooks, userFavouriteBooks))
//       })
//       .catch(error => {
//         dispatch(fetchUserBooksFailure(error))
//       })
//   }
// };
//
//
// export const fetchUpdateUser = (userId, data) => {
//   const newBook = {
//     id: data,
//     read: false,
//     favourite: false
//   };
//   return dispatch => {
//     dispatch(fetchUserBooksRequest());
//     return usersApi.updateUser(userId, newBook)
//       .then(res => {
//         console.log('user books Update', res)
//         dispatch(fetchUserBooksSuccess(res.data))
//       })
//       .catch(error => {
//         dispatch(fetchUserBooksFailure(error))
//       })
//   }
// };


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
export const updateUserBooksSuccess = (books) => {
  return {
    type: UPDATE_USER_BOOKS_SUCCESS,
    payload: books,
  };
};

export const UPDATE_USER_BOOKS_FAILURE = 'UPDATE_USER_BOOKS_FAILURE';
export const updateUserBooksFailure = (error) => {
  return {
    type: UPDATE_USER_BOOKS_FAILURE,
    payload: error,
  };
};


export const fetchUserBooks = userBooksIds => {
  return (dispatch, getState) => {
    dispatch(fetchUserBooksRequest());
    return booksApi.fetchUserBooks(userBooksIds)
      .then(({data}) => {
        const {activeUser: {userBooks}} = getState();
        const libraryBooks = data.map(book => {
          return {...book, ...userBooks.find(userBook => book.id === userBook.id)};
        });
        const favouriteBooks = libraryBooks.filter(book => book.favourite);
        const readBooks = libraryBooks.filter(book => book.read);
        dispatch(fetchUserBooksSuccess({libraryBooks, favouriteBooks, readBooks}));
      })
      .catch(error => {
        dispatch(fetchUserBooksFailure(error));
      });
  };
};

export const updateUserBooks = (id, prop) => {
  return (dispatch, getState) => {
    const {activeUser: {authUserId, userBooks}} = getState();
    const data = userBooks.map(book => book.id === id ? {...book, [prop]: !book[prop]} : {...book});
    dispatch(updateUserBooksRequest());
    return usersApi.updateUserBooks(authUserId, data)
      .then(({data: {books}}) => {
        const usersBooksIds = books.map(book => book.id);
        dispatch(updateUserBooksSuccess());
        dispatch(updateActiveUserBooks(books));
        dispatch(fetchUserBooks(usersBooksIds));
      })
      .catch(error => {
        dispatch(updateUserBooksFailure(error));
      });
  };
};



