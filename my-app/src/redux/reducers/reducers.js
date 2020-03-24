import { combineReducers } from 'redux';
import { bookReducers } from '../../containers/BooksScreen/reducers';
import { userReducers, } from '../../containers/User/reducers';
import {libraryReducers} from '../../containers/LibraryScreen/reducers';
import { auth } from './auth';
import { loading } from './loading';
import { error } from './error';

export default combineReducers(
  {
    books: bookReducers,
    activeUser: userReducers,
    library: libraryReducers,
    auth,
    loading,
    error,
  }
);

