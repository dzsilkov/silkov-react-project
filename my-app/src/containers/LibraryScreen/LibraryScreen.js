import { connect } from 'react-redux';
import Library from '../../components/Library/Library';
import {
  getUserBooks,
  getReadBooks,
  getFavoriteBooks
} from './selectors';


const mapStateToProps = state => {
  const userBooks = getUserBooks(state);
  const userReadBooks = getReadBooks(state);
  const userFavoriteBooks = getFavoriteBooks(state);
  return {userBooks, userReadBooks, userFavoriteBooks};
};

export default connect(
  mapStateToProps,
)(Library);
