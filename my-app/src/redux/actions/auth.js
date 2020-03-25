import {
  authenticateUser,
  signOutFailure,
  signOutSuccess
} from '../../containers/User/actions';

import { authUsers } from '../../api/usersApi/authUsers';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = token => {
  return {
    type: SET_AUTH_TOKEN,
    payload: token,
  };
};

export const DELETE_AUTH_TOKEN = 'DELETE_AUTH_TOKEN ';
export const deleteAuthToken = () => {
  return {
    type: DELETE_AUTH_TOKEN,
  };
};


export const getAuth = () => {
  return dispatch => {
    return authUsers.getToken()
      .then(res => {
        if (res) {
          dispatch(setAuthToken(res));
          dispatch(authenticateUser(res));
        }
      });
  };
};

export const deleteAuth = () => {
  return dispatch => {
    return authUsers.signOutUser()
      .then(() => {
        dispatch(deleteAuthToken());
        dispatch(signOutSuccess());
      })
      .catch(error => {
        dispatch(signOutFailure(error));
      });
  };
};


