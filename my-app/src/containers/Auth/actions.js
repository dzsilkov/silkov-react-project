import { usersApi } from '../../api/usersApi/usersApi';

// export const SET_USER_BOOKS = 'SET_USER_BOOKS';
// export const setUserBooks = books => {
//   return {
//     type: SET_USER_BOOKS,
//     payload: books,
//   };
// };
//
// export const SET_USER_READ_BOOKS = 'SET_USER_READ_BOOKS';
// export const setUserReadBooks = books => {
//   return {
//     type: SET_USER_READ_BOOKS,
//     payload: books,
//   };
// };
//
// export const SET_USER_FAVORITE_BOOKS = 'SET_USER_FAVORITE_BOOKS';
// export const setUserFavoriteBooks = books => {
//   return {
//     type: SET_USER_READ_BOOKS,
//     payload: books,
//   };
// };
//
// export const ADD_BOOK_TO_LIBRARY = 'ADD_BOOK_TO_LIBRARY';
// export const addBookToLibrary = book => {
//   return {
//     type: ADD_BOOK_TO_LIBRARY,
//     payload: book
//   };
// };







// export const FETCH_ADD_USER_BOOK_REQUEST = 'FETCH_ADD_USER_BOOK_REQUEST';
// export const fetchAddUserBookRequest = () => {
//   return {
//     type: FETCH_ADD_USER_BOOK_REQUEST,
//   };
// };
//
// export const FETCH_ADD_USER_BOOK_SUCCESS = 'FETCH_ADD_USER_BOOK_SUCCESS';
// export const fetchAddUserBookSuccess = books => {
//   return {
//     type: FETCH_ADD_USER_BOOK_SUCCESS,
//     payload: books,
//   };
// };
//
// export const FETCH_ADD_USER_BOOK_FAILURE = 'FETCH_ADD_USER_BOOK_FAILURE';
// export const fetchAddUserBookFailure = error => {
//   return {
//     type: FETCH_ADD_USER_BOOK_FAILURE,
//     payload: error,
//   };
// };
//
//
//


// export const fetchAddUserBook = (userId, data) => {
//   const book = {
//     id: data,
//     read: false,
//     favourite: false
//   };
//   return dispatch => {
//     dispatch(fetchAddUserBookRequest());
//     return usersApi.updateUser(userId, book)
//       .then(res => {
//         console.log('user books Update', res);
//         dispatch(fetchAddUserBookSuccess(res.data));
//       })
//       .catch(error => {
//         dispatch(fetchAddUserBookFailure(error));
//       });
//   };
// };



