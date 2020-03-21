import { combineReducers } from 'redux';
import { bookReducers } from '../../containers/BooksScreen/reducers';
import { authReducers } from '../../containers/Auth/reducers';

export default combineReducers(
  {
    books: bookReducers,
    auth: authReducers,
  }
);


// const reducer = combineReducers(
//   {
//     auth: authReducer,
//     app: recycleState(appReducer, [authActions.LOGOUT], appReducer.initialState),
//     artists: recycleState(
//       artists,
//       [authActions.LOGOUT, appActions.TERM_CHANGE],
//       artists.initialState,
//     ),
//     mosaic: recycleState(
//       mosaic,
//       [authActions.LOGOUT, appActions.TERM_CHANGE],
//       mosaic.initialState,
//     ),
//     recommended: recycleState(
//       recommended,
//       [authActions.LOGOUT, appActions.TERM_CHANGE],
//       recommended.initialState,
//     ),
//     routing: routerReducer,
//   },
// );