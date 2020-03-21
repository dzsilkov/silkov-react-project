import axios from 'axios/index';
import nanoid from 'nanoid';

export const USERS_API_BASE_ADDRESS = 'http://localhost:3001';
export const USERS_ENDPOINT = 'users';


const instance = axios.create({
  withCredentials: true,
  baseUrl: USERS_API_BASE_ADDRESS,
});

export const usersApi = {
  getUsers() {
    return axios.get(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}`);
  },

  getAuthenticate() {
    const token = getToken();
    if (token) {
      return axios.get(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/?q=${token}`)
        .then(res => {
         return res.data.find(item => token === item.token)
        });
    }
    else {
      return Promise.resolve(null)    }
  },

  getUser(user) {
    return axios.get(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/?q=${user.email}`)
      .then((data) => {
        console.log(data);
        if (data.data.length > 0) {
          console.log('email');
        } else {
          console.log('ok');
        }
        return data;
      });
  },


  postUser(user) {
    return axios.get(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/?q=${user.email}`)
      .then(res => {
        if (res.data.length <= 0) {
          const token = `Books_${nanoid()}`;
          const postUser = {...user, token};
          return axios.post(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/`, postUser)
            .then(res => {
              const token = res.data.token;
              window.localStorage.setItem(localStorageKey, token);
              return res;
            });
        } else {
          return null;
        }
      })
  },

  updateUser(userId, user) {
    return axios.put(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/${userId}`, user);
  },

  deleteUser(userId) {
    return axios.delete(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/${userId}`);
  }
};
const localStorageKey = '__books_token__';

const availableEmail = user => {
  return axios.get(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}/?q=${user.email}`);
};

function handleUserResponse(response) {
  const {data, data: {id, email}} = response;
  const token = `Books_${id}_${email}`;
  window.localStorage.setItem(localStorageKey, token);
  console.log(data, token);
}

const signIn = user => {
  return axios.get(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}`)
    .then(resp => {
      console.log(resp);
    });
};


const user = (url, {body, ...customConfig} = {}) => {
  const token = window.localStorage.getItem('__user-token__');
  const headers = {'content-type': 'application/json'};
  if (token) {
    headers.Authorization = `Book ${token}`;
  }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  console.log(config);

  return axios(`${USERS_API_BASE_ADDRESS}/${USERS_ENDPOINT}`, config);
};


function login({email, password}) {
  return user('login', {body: {email, password}}).then(handleUserResponse);
}

const signUp = data => {
  return user(USERS_ENDPOINT, {body: data});
};

function register({email, password}) {
  return user('register', {body: {email, password}})
    .then(
      handleUserResponse,
    );
}

function logout() {
  window.localStorage.removeItem(localStorageKey);
  return Promise.resolve();
}

const getToken = () => {
  return window.localStorage.getItem(localStorageKey);
};

function getUser() {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }
  return user('me').catch(error => {
    logout();
    return Promise.reject(error);
  });
}

