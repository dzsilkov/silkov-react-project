import axios from 'axios/index';

export const USERS_API_BASE_ADDRESS = 'http://localhost:3001';
export const USERS_ENDPOINT = 'users';

const localStorageKey = '__books_token__';

export const getToken = () => {
  return window.localStorage.getItem(localStorageKey);
};

export const getAuth = () => {
  const token = getToken();
  if (token) {
    return axios.get(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/?q=${token}`)
      .then(res => {
        console.log(res);
      });
  }
};