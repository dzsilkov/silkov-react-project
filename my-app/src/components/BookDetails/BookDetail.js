import React from 'react';
import { connect } from 'react-redux';
import { faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { fetchBookById } from '../../containers/BooksScreen/actions';
import { fetchAddUserBook } from './../../containers/Auth/actions';
import { getSelectedBook } from '../../containers/BooksScreen/selectors';
import { getAuthUserId } from '../../containers/Auth/selectors';
import './BookDetail.css';


class BookDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {fetchBookById, id} = this.props;
    fetchBookById(id);
  }


  render() {
    const {
      fetchAddUserBook,
      userId,
      selectedBook:
        {
          title,
          id,
          author,
          coverImageUrl,
          publisher,
          synopsis,
          pageCount
        }
    } = this.props;

    const icon = 'added' ? faCheckCircle : faPlusCircle;

    return (
      <section className="bookDetail">
        <div className="bookCard">
          <img className="bookImage" src={coverImageUrl} alt={`${title} book image`}/>
          <div className="bookDetailContent">
            <h2 className="bookTitle">{title}</h2>
            <p className="bookAuthor"><i>{author}</i></p>
            <p className="bookSynopsis">{synopsis}</p>
            <div className="bookCardFooter">
              <span className="bookPublisher"><i>{publisher}</i></span>
              <span className="bookPageCount"><i>Pages: {pageCount}</i></span>
            </div>
            <div className="bookActions"
                 onClick={() => fetchAddUserBook(userId, id)}>
              <span className="actionBookButton">
              <FontAwesomeIcon size="2x" color={'#96C178'} icon={icon}/>
            </span></div>
          </div>
        </div>
      </section>
    );
  }

}

const mapStateToProps = state => {
  const selectedBook = getSelectedBook(state);
  const userId = getAuthUserId(state);
  return {selectedBook, userId};
};

export default connect(
  mapStateToProps,
  {
    fetchBookById,
    fetchAddUserBook,
  }
)(BookDetail);
