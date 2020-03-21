import { usersApi } from '../../api/usersApi/usersApi';


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

export const SIGN_OUT = 'SIGN_OUT';

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export const SIGN_IN = 'SIGN_IN';

export function signIn() {
}

export const signInUser = (user) => {
  return dispatch => {
    dispatch(signInRequest());
    usersApi.getUser(user)
      .then(res => {
        dispatch(signInSuccess(res));
      })
      .catch(error => {
        signInFailure(error);
      });
  };
};

export const authenticateUser = () => {
  return dispatch => {
    dispatch(authenticateUserRequest());
    usersApi.getAuthenticate()
      .then(res => {
        dispatch(authenticateUserSuccess(res));
      })
      .catch(error => {
        authenticateUserFailure(error);
      })
  }
};



export const signUpUser = (user) => {
  return dispatch => {
    dispatch(signUpRequest());
    usersApi.postUser(user)
      .then(res => {
        console.log(res);
        dispatch(signUpSuccess(res));
      })
      .catch(error => {
        signUpFailure(error);
      });
  };
};
