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