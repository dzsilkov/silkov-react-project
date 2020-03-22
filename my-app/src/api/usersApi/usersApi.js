import axios from 'axios/index';
import nanoid from 'nanoid';
import { setToken, removeToken } from './utils';
import {
  USERS_API_BASE_ADDRESS,
  USERS_ENDPOINT,
  LOCAL_STORAGE_KEY,
  TOKEN_START_POINT
} from './constants';


export const usersApi = {
  getUsers() {
    return axios.get(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}`);
  },

  signOutUser() {
    return removeToken(LOCAL_STORAGE_KEY);
  },

  signUpUser(user) {
    return this.isEmailInUse(user.email)
      .then(({data}) => {
        const forbiddenEmail = data.some(item => item.email === user.email);
        if (!forbiddenEmail) {
          const token = `${TOKEN_START_POINT}_${nanoid()}`;
          const postUser = {...user, token};
          return axios.post(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/`, postUser)
            .then(({data}) => {
              const token = data.token;
              setToken(LOCAL_STORAGE_KEY, token);
              return {token: {token}};
            });
        } else {
          return Promise.resolve('E-mail is already in use');
        }
      });
  },

  isEmailInUse(email) {
    return axios.get(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/?q=${email}`)
      .then(

      );
  },

  signInUser({email, password}) {
    return axios.get(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/?q=${email}`)
      .then(({data}) => {
        const user = data.find(item => item.password === password);
        if (user) {
          const {token, ...rest} = user;
          setToken(LOCAL_STORAGE_KEY, token);
          return {token: {token}};
        } else {
          return Promise.resolve('password is not correct');
        }
      });
  },

  updateUser(userId, user) {
    return axios.put(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/${userId}`, user);
  },

  deleteUser(userId) {
    return axios.delete(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/${userId}`);
  }
};
