import { combineReducers } from 'redux';
import { bookReducers } from '../../containers/BooksScreen/reducers';
import { userReducers, } from '../../containers/Auth/reducers';
import {libraryReducers} from '../../containers/LibraryScreen/reducers';

export default combineReducers(
  {
    books: bookReducers,
    // user: userReducers,
    activeUser: userReducers,
    library: libraryReducers,
  }
);