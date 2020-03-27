import {
  DELETE_AUTH_TOKEN,
  SET_AUTH_TOKEN
} from '../actions/auth';

export const initialState = {
  authUserToken: '',
};

export const auth = (state = initialState, action) => {
  switch (action.type) {

    case SET_AUTH_TOKEN: {
      return {
        ...state,
        authUserToken: action.payload,
      };
    }

    case DELETE_AUTH_TOKEN: {
      return {
        ...state,
        authUserToken: '',
      };
    }

    default:
      return state;
  }
};