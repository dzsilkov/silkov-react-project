import axios from 'axios/index';
import { BOOKS_API_BASE_ADDRESS, BOOKS_ENDPOINT } from './constants';

const instance = axios.create({
  withCredentials: true,
  baseUrl: BOOKS_API_BASE_ADDRESS,
});

export const booksApi = {

  fetchBooks(currentPage, pageSize) {
    return axios.get(`${BOOKS_API_BASE_ADDRESS}/${BOOKS_ENDPOINT}?_page=${currentPage}&_limit=${pageSize}`)
  },

  fetchBookById(id) {
    return axios.get(`${BOOKS_API_BASE_ADDRESS}/${BOOKS_ENDPOINT}/${id}`)
  },

  fetchUserBooks(books) {
    console.log(books);
    const req = strRequest(books);
    console.log(req);

    return axios.get(`${BOOKS_API_BASE_ADDRESS}/${BOOKS_ENDPOINT}?${req}`)
  }
};

function strRequest(arr) {
  let endpoint = '';
  for (let i = 0; i < arr.length; i++)  {
    endpoint += `id=${arr[i]}&`
  }
  return endpoint;
}