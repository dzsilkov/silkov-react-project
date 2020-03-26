import { connect } from 'react-redux';
import { getAllUserBooks, getSelectedBook } from '../../redux/selectors/selectors';
import { fetchBookById } from '../BooksScreen/actions';
import { addBookToLibrary } from '../LibraryScreen/actions';
import BookDetail from '../../components/BookDetails/BookDetail';

const mapStateToProps = state => {
  const selectedBook = getSelectedBook(state);
  const userBooksIds = getAllUserBooks(state);
  return {selectedBook, userBooksIds};
};

export default connect(
  mapStateToProps,
  {
    fetchBookById,
    addBookToLibrary,
  }
)(BookDetail);
