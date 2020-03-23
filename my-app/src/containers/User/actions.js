import { authUsers } from '../../api/usersApi/authUsers';

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