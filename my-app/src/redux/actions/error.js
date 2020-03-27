export const THROW_ERROR = 'THROW_ERROR';
export const throwError = error => {
  return {
    type: THROW_ERROR,
    payload: error,
  };
};

export const HIDE_ERROR = 'HIDE_ERROR';
export const hideError = () => {
  console.log('close')
  return {
    type: THROW_ERROR,
  };
};
