import React from 'react';
import './Books.css';
import CarouselPaginated from '../CarouselPaginated/CarouselPaginated';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';

class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      currentPage: '',
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.setPageNumber = this.setPageNumber.bind(this);
    this.setBooksPerPage = this.setBooksPerPage.bind(this);
  }

  componentDidMount() {
    const {fetchBooks} = this.props;
    fetchBooks();
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

  render() {
    const {books, totalBooks, booksPerPage, currentPage} = this.props;
    console.log(this.props)
    return (
      <div>
        <section>
            <div className="headerContent">
              <CarouselPaginated
                books={books}
                prevPage={this.prevPage}
                nextPage={this.nextPage}
              />
              <Search/>

              <Pagination


                currentPage={currentPage}
                totalItems={totalBooks}
                itemsPerPage={booksPerPage}
                paginate={this.setPageNumber}
                nextPage={this.nextPage}
                prevPage={this.prevPage}
                setItemsPerPage={this.setBooksPerPage}
              />
          </div>
        </section>
      </div>
    );
  }
}

export default Books;