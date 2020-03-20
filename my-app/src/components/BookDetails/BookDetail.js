import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';

import { fetchBookById } from '../../containers/BooksList/actions';
import { getSelectedBook } from '../../containers/BooksList/selectors';
import './BookDetail.css';


class BookDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {fetchBookById, match: {params}} = this.props;
    fetchBookById(params.id);
  }


  render() {
    const {
      selectedBook:
        {
          title,
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
            <div className="bookActions">
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
  return {selectedBook};
};


export default connect(
  mapStateToProps,
  {
    fetchBookById
  }
)(BookDetail);
