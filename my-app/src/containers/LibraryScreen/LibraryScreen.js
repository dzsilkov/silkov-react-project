import { connect } from 'react-redux';
import Library from '../../components/Library/Library';

import {
  getAllLibraryBooks,
  getUserReadBooks,
  getActiveUser,
  getIdsUserBooks,
  getReadBooksIds,
  getFavouriteBooksIds,
  getUserFavouriteBooks,
  getLibraryState
} from './../Auth/selectors';

import { fetchUserBooks, updateUserBooks } from './actions';


const mapStateToProps = state => {
  const userBooksIds = getIdsUserBooks(state);
  const userReadBooksIds = getReadBooksIds(state);
  const userFavouriteBooksIds = getFavouriteBooksIds(state);
  const userBooks = getAllLibraryBooks(state);
  const userReadBooks = getUserReadBooks(state);
  const userFavouriteBooks = getUserFavouriteBooks(state);
  const activeUser = getActiveUser(state);
  const libraryLists = getLibraryState(state);
  return {
    libraryLists,
    userBooks,
    userReadBooks,
    userBooksIds,
    userFavouriteBooks,
    userReadBooksIds,
    userFavouriteBooksIds,
    activeUser
  };
};

export default connect(
  mapStateToProps,
  {
    fetchUserBooks,
    updateUserBooks,
  }
)(Library);
