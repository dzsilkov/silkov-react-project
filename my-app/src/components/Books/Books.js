import React from 'react';
import './Books.css';
import CarouselPaginated from '../CarouselPaginated/CarouselPaginated';
import CarouselVisibilityShow from '../CarouselVisibilityShow/CarouselVisibilityShow';
import CarouselPaginatedShowAll from '../CarouselPaginatedSHowAll/CarouselPaginatedShowAll';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.handlerHover = this.handlerHover.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.setPageNumber = this.setPageNumber.bind(this);
    this.setBooksPerPage = this.setBooksPerPage.bind(this);
  }

  componentDidMount() {
    const {fetchBooks, currentPage, booksPerPage} = this.props;
    fetchBooks(currentPage, booksPerPage);
  }

  componentDidUpdate(prevState) {
    const {fetchBooks, currentPage, booksPerPage} = this.props;
    if (prevState.currentPage !== currentPage || prevState.booksPerPage !== booksPerPage) {
      fetchBooks(currentPage, booksPerPage);
    }
  }

  nextPage() {
    const {totalBooks, currentPage, booksPerPage, setCurrentPage} = this.props;
    const totalPages = totalBooks / booksPerPage;
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  prevPage() {
    const {currentPage, setCurrentPage} = this.props;
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  setBooksPerPage(number) {
    const {setBooksPerPage} = this.props;
    setBooksPerPage(number);
  }

  setPageNumber(pageNumber) {
    const {setCurrentPage} = this.props;
    setCurrentPage(pageNumber);
  }

  handlerHover(id) {
    const {setHoveredBook} = this.props;
    setHoveredBook(id);
  }

  render() {
    const {
      books,
      totalBooks,
      booksPerPage,
      currentPage,
      setBooksPerPage,
      activeBook
    } = this.props;

    return (
      <div className="books">
        {booksPerPage === totalBooks
          ? <>
            <CarouselVisibilityShow
              setBooksPerPage={setBooksPerPage}
              itemsPerPage={booksPerPage}
            />
            <CarouselPaginatedShowAll
              books={books}
              handlerHover={this.handlerHover}
            />
          </>
          :
          <>
            <img className="backImage" src={activeBook.coverImageUrl} alt="book image"/>
            <CarouselPaginated
              books={books}
              prevPage={this.prevPage}
              nextPage={this.nextPage}
              currentPage={currentPage}
              totalItems={totalBooks}
              itemsPerPage={booksPerPage}
              paginate={this.setPageNumber}
              setBooksPerPage={setBooksPerPage}
              handlerHover={this.handlerHover}
            />

          </>
        }
      </div>
    );
  }
}

export default Books;