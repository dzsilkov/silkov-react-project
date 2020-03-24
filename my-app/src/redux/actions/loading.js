export const IS_FETCHING = 'IS_FETCHING';
export const isFetching = fetching => {
  return {
    type: IS_FETCHING,
    payload: fetching,
  };
};

