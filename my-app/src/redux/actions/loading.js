export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const toggleIsFetching = fetching => {
  return {
    type: TOGGLE_IS_FETCHING,
    payload: fetching,
  };
};

