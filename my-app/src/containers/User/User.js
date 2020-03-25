import React from 'react';
import { connect } from 'react-redux';
import { signUpUser, signInUser, signOutUser, resetAuthForm } from './../User/actions';
import {
  getActiveUser,
  getAuthUserToken,
  getAllLibraryBooks,
  getReadLibraryBooks,
  getFavouriteLibraryBooks

} from '../../redux/selectors/selectors';
import { Auth } from '../../components/Auth/Auth';

const mapStateToProps = state => {
  const activeUser = getActiveUser(state);
  const authUserToken = getAuthUserToken(state);
  const allBooksLength = getAllLibraryBooks(state).length;
  const readBooksLength = getReadLibraryBooks(state).length;
  const favouriteBooksLength = getFavouriteLibraryBooks(state).length;
  return {activeUser, authUserToken, allBooksLength, readBooksLength, favouriteBooksLength};
};

export default connect(
  mapStateToProps,
  {
    signUpUser,
    signInUser,
    signOutUser,
    resetAuthForm,
  }
)(Auth);


