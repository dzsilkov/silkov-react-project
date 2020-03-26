import { connect } from 'react-redux';
import Library from '../../components/Library/Library';
import { fetchLibraryBooks, updateUserBooks, deleteUserBook } from './actions';
import { getAllLibraryBooks, getUserFavouriteBooks, getUserReadBooks } from '../../redux/selectors/selectors';


const mapStateToProps = state => {
  const libraryBooks = getAllLibraryBooks(state);
  const libraryReadBooks = getUserReadBooks(state);
  const libraryFavouriteBooks = getUserFavouriteBooks(state);
  return {
    libraryBooks,
    libraryFavouriteBooks,
    libraryReadBooks
  };
};

export default connect(
  mapStateToProps,
  {
    fetchLibraryBooks,
    updateUserBooks,
    deleteUserBook
  }
)(Library);
