import { usersApi } from '../../api/usersApi/usersApi';
import { authUsers } from '../../api/usersApi/authUsers';
import {booksApi} from '../../api/booksApi/booksApi';

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
  }
};




export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const signInRequest = () => {
  return {
    type: SIGN_IN_REQUEST,
  };
};

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const signInSuccess = (user) => {
  return {
    type: SIGN_IN_SUCCESS,
  };
};

export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const signInFailure = error => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const signUpRequest = () => {
  return {
    type: SIGN_UP_REQUEST,
  };
};

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const signUpSuccess = user => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: user
  };
};

export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const signUpFailure = error => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const signOutRequest = () => {
  return {
    type: SIGN_OUT_REQUEST,
  };
};

export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const signOutFailure = error => {
  return {
    type: SIGN_OUT_FAILURE,
    payload: error,
  };
};

export const AUTHENTICATE_USER_REQUEST = 'AUTHENTICATE_USER_REQUEST';
export const authenticateUserRequest = () => {
  return {
    type: AUTHENTICATE_USER_REQUEST,
  };
};

export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
export const authenticateUserSuccess = user => {
  return {
    type: AUTHENTICATE_USER_SUCCESS,
    payload: user
  };
};

export const AUTHENTICATE_USER_FAILURE = 'AUTHENTICATE_USER_FAILURE';
export const authenticateUserFailure = error => {
  return {
    type: AUTHENTICATE_USER_FAILURE,
    payload: error,
  };
};

export const FETCH_ADD_USER_BOOK_REQUEST = 'FETCH_ADD_USER_BOOK_REQUEST';
export const fetchAddUserBookRequest = () => {
  return {
    type: FETCH_ADD_USER_BOOK_REQUEST,
  };
};


export const FETCH_ADD_USER_BOOK_SUCCESS = 'FETCH_ADD_USER_BOOK_SUCCESS';
export const fetchAddUserBookSuccess = books => {
  return {
    type: FETCH_ADD_USER_BOOK_SUCCESS,
    payload: books,
  };
};

export const FETCH_ADD_USER_BOOK_FAILURE = 'FETCH_ADD_USER_BOOK_FAILURE';
export const fetchAddUserBookFailure = error => {
  return {
    type: FETCH_ADD_USER_BOOK_FAILURE,
    payload: error,
  };
};

export const UPDATE_ACTIVE_USER_BOOKS = 'UPDATE_ACTIVE_USER_BOOKS';
export const updateActiveUserBooks = books => {
  return {
    type: UPDATE_ACTIVE_USER_BOOKS,
    payload: books,
  };
};


export const fetchAddUserBook = (userId, data) => {
  const book = {
    id: data,
    read: false,
    favourite: false
  };
  return dispatch => {
    dispatch(fetchAddUserBookRequest());
    return usersApi.updateUser(userId, book)
      .then(res => {
        console.log('user books Update', res)
        dispatch(fetchAddUserBookSuccess(res.data))
      })
      .catch(error => {
        dispatch(fetchAddUserBookFailure(error))
      })
  }
};

export const signOutUser = () => {
  return dispatch => {
    dispatch(signOutRequest());
    usersApi.signOutUser()
      .then(() => {
        dispatch(signOutSuccess());
      })
      .catch(error => {
        dispatch(signOutFailure(error));
      });
  };
};

export const signInUser = user => {
  return dispatch => {
    dispatch(signInRequest());
    usersApi.signInUser(user)
      .then(res => {
        if (typeof res !== 'string' && res.token) {
          dispatch(authenticateUser());
        } else {
          dispatch(signInFailure(res));
        }
      })
      .catch(error => {
        dispatch(signInFailure(error));
      });
  };
};

export const signUpUser = user => {
  return dispatch => {
    dispatch(signUpRequest());
    usersApi.signUpUser(user)
      .then(res => {
        if (typeof res !== 'string' && res.token) {
          dispatch(authenticateUser());
        } else {
          dispatch(signUpFailure(res));
        }
      })
      .catch(error => {
        dispatch(signUpFailure(error));
      });
  };
};

export const authenticateUser = () => {
  return dispatch => {
    dispatch(authenticateUserRequest());
    authUsers.getAuthenticate()
      .then(res => {
        if (typeof res !== 'string') {
          dispatch(authenticateUserSuccess(res));
        } else {
          dispatch(authenticateUserFailure(res));
        }
      })
      .catch(error => {
        dispatch(authenticateUserFailure(error));
      });
  };
};








