import { TOGGLE_IS_FETCHING } from '../actions/loading';

export const initialState = {
  isFetching: false,
};

export const loading = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return state;
  }
};