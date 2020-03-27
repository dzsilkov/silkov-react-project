import React from 'react';
import { faStar, faPlusCircle, faStarHalfAlt, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
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
      addBookToLibrary,
      userBooksIds,
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

    const inUserBooks = userBooksIds.includes(id);
    const icon = inUserBooks ? faMinusCircle : faPlusCircle;

    return (
      <section className="bookDetail">
        <div className="bookCard">
          <img className="bookImage" src={coverImageUrl} alt={`${title} book image`}/>
          <div className="bookDetailContent">
            <h2 className="bookTitle">{title}</h2>
            <div className="authorRank">
              <p className="bookAuthor"><i>{author}</i></p>
              <span className="rank">
              <FontAwesomeIcon size="2x" icon={faStar}/>
              <FontAwesomeIcon size="2x" icon={faStar}/>
              <FontAwesomeIcon size="2x" icon={faStar}/>
              <FontAwesomeIcon size="2x" icon={faStar}/>
              <FontAwesomeIcon size="2x" icon={faStarHalfAlt}/>
            </span>
            </div>

            <p className="bookSynopsis">{synopsis}</p>
            <div className="bookCardFooter">
              <span className="bookPublisher"><i>{publisher}</i></span>
              <span className="bookPageCount"><i>Pages: {pageCount}</i></span>
            </div>
            <div className="bookActions"
                 onClick={() => addBookToLibrary(id)}>
              <span className="actionBookButton">
              <FontAwesomeIcon size="3x" color={inUserBooks ? '#ff6347' : '#96C178'} icon={icon}/>
            </span></div>
          </div>
        </div>
      </section>
    );
  }

}

export default BookDetail;
