import {
  fetchBooks,
  fetchBookById,
  setCurrentPage,
  setBooksPerPage,
  setHoveredBook
} from './actions';

import {addBookToLibrary} from './../LibraryScreen/actions'
import { connect } from 'react-redux';
import { getActiveBook, getBooks, getBooksPerPage, getTotalBooks, getCurrentPage, getSelectedBook } from '../../redux/selectors/selectors';
import Books from '../../components/Books/Books';

const mapStateToProps = state => {
  const books = getBooks(state);
  const totalBooks = getTotalBooks(state);
  const booksPerPage = getBooksPerPage(state);
  const currentPage = getCurrentPage(state);
  const book = getSelectedBook(state);
  const activeBook =  getActiveBook(state);
  return {book, books, totalBooks, booksPerPage, currentPage, activeBook};
};

export default connect(
  mapStateToProps,
  {
    fetchBooks,
    fetchBookById,
    setCurrentPage,
    setBooksPerPage,
    addBookToLibrary,
    setHoveredBook
  }
)(Books);
