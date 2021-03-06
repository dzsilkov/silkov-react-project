import { authUsers } from '../../api/usersApi/authUsers';
import { usersApi } from '../../api/usersApi/usersApi';

import { throwError } from '../../redux/actions/error';
import { deleteAuth, setAuthToken } from '../../redux/actions/auth';
import { clearLibrary } from '../LibraryScreen/actions';
import { toggleIsFetching } from '../../redux/actions/loading';


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

export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export const setActiveUser = user => {
  const userBooksIds = [...user.books.map(book => book.id)];
  const userReadBooksIds = [...user.books.filter(book => book.read).map(item => item.id)];
  const userFavouriteBooksIds = [...user.books.filter(book => book.favourite).map(item => item.id)];
  return {
    type: SET_ACTIVE_USER,
    payload: {...user, userBooksIds, userReadBooksIds, userFavouriteBooksIds}
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

export const authenticateUser = token => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(authenticateUserRequest());
    return authUsers.getAuthenticate(token)
      .then(res => {
        if (typeof res !== 'string') {
          // dispatch(authenticateUserSuccess(res))
          dispatch(setActiveUser(res));
        } else {
          dispatch(throwError(res));
        }
        dispatch(toggleIsFetching(false));
      })
      .catch(error => {
        dispatch(toggleIsFetching(false));
        dispatch(throwError(error));
      });
  };
};

export const UPDATE_ACTIVE_USER_BOOKS = 'UPDATE_ACTIVE_USER_BOOKS';
export const updateActiveUserBooks = books => {

  const userBooksIds = [...books.map(book => book.id)];
  return {
    type: UPDATE_ACTIVE_USER_BOOKS,
    payload: {books, userBooksIds}
  };

};

export const signOutUser = () => {
  return dispatch => {
    dispatch(signOutRequest());
    dispatch(deleteAuth());
    dispatch(clearLibrary());
  };
};

export const signInUser = user => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(signInRequest());
    usersApi.signInUser(user)
      .then(res => {
        if (typeof res !== 'string' && res.token) {
          dispatch(setAuthToken(res.token));
          dispatch(signInSuccess());
          dispatch(authenticateUser(res.token));
        } else {
          dispatch(throwError(res));
        }
        dispatch(toggleIsFetching(false));
      })
      .catch(error => {
        dispatch(toggleIsFetching(false));
        dispatch(throwError(error));
      });
  };
};

export const signUpUser = user => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(signUpRequest());
    usersApi.signUpUser(user)
      .then(res => {
        if (typeof res !== 'string' && res.token) {
          dispatch(setAuthToken(res.token));
          dispatch(signUpSuccess());
          dispatch(authenticateUser(res.token));
        } else {
          dispatch(throwError(res));
        }
        dispatch(toggleIsFetching(false));
      })
      .catch(error => {
        dispatch(toggleIsFetching(false));
        dispatch(throwError(error));
      });
  };
};