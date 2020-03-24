import { THROW_ERROR } from '../actions/error';

export const initialState = {
  error: null,
};

export const error = (state = initialState, action) => {
  switch (action.type) {

    case THROW_ERROR:
      const error = action.payload;
      return {
        ...state,
        error: error
      };

    default:
      return state;
  }
};