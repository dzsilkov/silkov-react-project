import { connect } from 'react-redux';
import Library from '../../components/Library/Library';

import {
  getAllLibraryBooks,
  getUserReadBooks,
  getUserFavouriteBooks,
} from './selectors';

import { fetchLibraryBooks, updateUserBooks, deleteUserBook } from './actions';


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
