const getToken = (localStorageKey) => {
  return window.localStorage.getItem(localStorageKey);
};

const setToken = (localStorageKey, token) => {
  window.localStorage.setItem(localStorageKey, token);
};

const removeToken = (localStorageKey) => {
  window.localStorage.removeItem(localStorageKey);
  return Promise.resolve('sign out success');
};

export {
  getToken,
  setToken,
  removeToken
};
