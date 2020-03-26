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
      booksPerPage: '',
    };
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

  render() {
    const {
      books,
      totalBooks,
      booksPerPage,
      currentPage,
      setBooksPerPage,
    } = this.props;

    return (
      <div className="books">
        <div className="booksNav">
          <CarouselPaginated
            books={books}
            prevPage={this.prevPage}
            nextPage={this.nextPage}
            currentPage={currentPage}
            totalItems={totalBooks}
            itemsPerPage={booksPerPage}
            paginate={this.setPageNumber}
            setBooksPerPage={setBooksPerPage}
          />
        </div>


        {/*<div className="slider parallax">*/}
        {/*<div className="header-overlay"></div>*/}
        {/*<div className="headerContent">*/}

        {/*</div>*/}
        {/*</div>*/}
        {/*<section>*/}
        {/*<section id="scroll-section-a" className="section section-light">*/}
        {/*<div className="container">*/}
        {/*</div>*/}
        {/*</section>*/}
        {/*<section className="strenght parallax">*/}
        {/*<div className="ptext">*/}
        {/*<span className="border">*/}
        {/*Absolute Strength*/}
        {/*</span>*/}
        {/*</div>*/}
        {/*</section>*/}
        {/*<section className="section section-dark">*/}
        {/*<div className="container">*/}
        {/*<h2>ready to produce sensation</h2>*/}
        {/*<p>Solidity is a question of charisma: a clear indication of this*/}
        {/*is the concept of the BMW X7 iPerformance. Despite its impressive size,*/}
        {/*it looks elegant and very dynamic. This is due to the light back and dynamic*/}
        {/*lines of design, emphasizing the car's aspirations forward. Together with*/}
        {/*the imposing vertical grille, powerful air intakes and elegant bends of the body,*/}
        {/*it is possible to create a modern and solid look, reflecting the grandeur*/}
        {/*and grandeur of the car.</p>*/}
        {/*</div>*/}
        {/*</section>*/}
        {/*<section className="movement parallax">*/}
        {/*<div className="ptext">*/}
        {/*<span className="border">*/}
        {/*Freedom of movement*/}
        {/*</span>*/}
        {/*</div>*/}
        {/*</section>*/}
        {/*<section className="section section-light">*/}
        {/*<div className="container">*/}
        {/*<h2>chic interior</h2>*/}
        {/*<p>The six-seater salon, on the one hand, is made on the principle of minimalism,*/}
        {/*not too overloaded with details, but at the same time interiors have tried to*/}
        {/*create a special feeling of luxury and spaciousness. There is a combination of matt*/}
        {/*and polished surfaces, ash with open pores, a combination of light tones with a black*/}
        {/*stripe at the shoulder level, an olive-bronze skin with golden impregnations on the*/}
        {/*rollers of seats, contrasting with the Smoke White skin in other places, and a huge*/}
        {/*panoramic roof. The seats have compact attachments, so that there is plenty of*/}
        {/*legroom beneath them.</p>*/}
        {/*</div>*/}
        {/*</section>*/}
        {/*<section className="generation parallax">*/}
        {/*<div className="ptext">*/}
        {/*<span className="border">*/}
        {/*A new generation of cars*/}
        {/*</span>*/}
        {/*</div>*/}
        {/*</section>*/}
        {/*</section>*/}
      </div>


    );
  }


}

export default Books;


{/*<div className="books">*/
}
{/*<Search/>*/
}
{/*<section>*/
}
{/*<div className="headerContent">*/
}
{/*<CarouselPaginated*/
}
{/*books={books}*/
}
{/*prevPage={this.prevPage}*/
}
{/*nextPage={this.nextPage}*/
}
{/*/>*/
}


{/*<Pagination*/
}
{/*currentPage={currentPage}*/
}
{/*totalItems={totalBooks}*/
}
{/*itemsPerPage={booksPerPage}*/
}
{/*paginate={this.setPageNumber}*/
}
{/*nextPage={this.nextPage}*/
}
{/*prevPage={this.prevPage}*/
}
{/*setItemsPerPage={this.setBooksPerPage}*/
}
{/*/>*/
}
{/*</div>*/
}
{/*</section>*/
}
{/*</div>*/
}