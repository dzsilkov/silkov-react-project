export const THROW_ERROR = 'THROW_ERROR';
export const throwError = error => {
  return {
    type: THROW_ERROR,
    payload: error,
  };
};
