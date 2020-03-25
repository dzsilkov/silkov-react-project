import axios from 'axios/index';
import { getToken, removeToken } from './utils';
import {
  USERS_AUTH_BASE_ADDRESS,
  USERS_AUTH_ENDPOINT,
  LOCAL_STORAGE_KEY,
} from './constants';


export const authUsers = {
  getAuthenticate(token) {
    return axios.get(`${USERS_AUTH_BASE_ADDRESS}/${USERS_AUTH_ENDPOINT}/?q=${token}`)
      .then(({data}) => {
        if (data.length !== 0) {
          const user = data.find(item => token === item.token);
          const {password, ...resUser} = user;
          return resUser;
        } else {
          return Promise.resolve('User not found');
        }
      });
  },

  signOutUser() {
    return removeToken(LOCAL_STORAGE_KEY);
  },

  getToken() {
    const token = getToken(LOCAL_STORAGE_KEY);
    const response = token ? token : null;
    return Promise.resolve(response);
  }
};