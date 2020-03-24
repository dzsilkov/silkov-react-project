import { IS_FETCHING } from '../actions/loading';

export const initialState = {
  loading: false,
};

export const loading = (state = initialState, action) => {
  switch (action.type) {

    case IS_FETCHING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};