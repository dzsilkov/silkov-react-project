import { usersApi } from '../../api/usersApi/usersApi';
import { authUsers } from '../../api/usersApi/authUsers';


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

export const signInUser = (user) => {
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

export const signUpUser = (user) => {
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



