import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE
} from './actions';

export const initialState = {
  authUser: null,
  idToken: null,
  error: null,
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {

    case SIGN_IN_REQUEST:
      return {
        ...state,
      };

    case SIGN_IN_SUCCESS:

      return {
        ...state,
      };

    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case SIGN_UP_REQUEST:
      return {
        ...state,
      };

    case SIGN_UP_SUCCESS:
      const authUser = action.payload;
      return {
        ...state,
        authUser: authUser
      };

    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case AUTHENTICATE_USER_REQUEST:
      return {
        ...state,
      };

    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        authUser: action.payload,
        idToken: action.payload.token,
        error: null,
      };

    case AUTHENTICATE_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      };


    case SIGN_OUT_REQUEST:
      return {
        ...state,
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        authUser: null,
        idToken: null,
        error: null,
      };

    case SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };


    default:
      return state;
  }
};