import React from 'react';
import { connect } from 'react-redux';
import { signUpUser, signInUser, signOutUser, resetAuthForm } from './../User/actions';
import {
  getActiveUser,
  getAuthUserToken,
  getAllUserBooks,
  getReadUserBooks,
  getFavouriteUserBooks

} from '../../redux/selectors/selectors';
import { Auth } from '../../components/Auth/Auth';

const mapStateToProps = state => {
  const activeUser = getActiveUser(state);
  const authUserToken = getAuthUserToken(state);
  const allBooksLength = getAllUserBooks(state).length;
  const readBooksLength = getReadUserBooks(state).length;
  const favouriteBooksLength = getFavouriteUserBooks(state).length;
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


