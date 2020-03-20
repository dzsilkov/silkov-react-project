import {
  fetchBooks,
  fetchBookById,
  setCurrentPage,
  setBooksPerPage
} from './actions';
import { connect } from 'react-redux';
import { getBooks, getBooksPerPage, getTotalBooks, getCurrentPage, getSelectedBook } from './selectors';

import Home from '../../components/Home/Home';

const mapStateToProps = state => {
  const books = getBooks(state);
  const totalBooks = getTotalBooks(state);
  const booksPerPage = getBooksPerPage(state);
  const currentPage = getCurrentPage(state);
  const book = getSelectedBook(state);
  return {book, books, totalBooks, booksPerPage, currentPage};
};

export default connect(
  mapStateToProps,
  {
    fetchBooks,
    fetchBookById,
    setCurrentPage,
    setBooksPerPage
  }
)(Home);
