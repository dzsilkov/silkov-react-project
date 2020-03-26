export const getAuthUserToken = store => store.auth.authUserToken;
export const getActiveUser = store => store.activeUser;

export const getAllUserBooks = store => store.activeUser.userBooksIds;
export const getReadUserBooks = store =>store.activeUser.userReadBooksIds;
export const getFavouriteUserBooks = store => store.activeUser.userFavouriteBooksIds;


export const getActiveBook = store => store.books.activeBook;

export const getBooksState = store => store.books;

export const getBooksList = store =>
  getBooksState(store) ? getBooksState(store).allIds : [];

export const getBooksById = (store, id) =>
  getBooksState(store) ? {...getBooksState(store).byIds[id], id} : {};

export const getBooks = store =>
  getBooksList(store).map(id => getBooksById(store, id));

export const getTotalBooks = store => store.books.totalBooks;
export const getCurrentPage = store => store.books.currentPage;
export const getBooksPerPage = store => store.books.booksPerPage;
export const getSelectedBook = store => store.books.selectedBook;

export const getLibraryState = store => store.library;
export const getAllLibraryBooks = store => getLibraryState(store).libraryBooks;
export const getUserReadBooks = store => getLibraryState(store).userReadBooks;
export const getUserFavouriteBooks = store => getLibraryState(store).userFavouriteBooks;

