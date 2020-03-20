import React from 'react';
import './CarouselItems.css';
import CarouselItemCard from '../CarouselItemCard/CarouselItemCard';

const CarouselItems = (props) => {


  const {books, nextPage, prevPage, loading} = props;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    const booksCards = books.map(({book, id}) => {
      return (
        <CarouselItemCard key={id}  book={book}/>
      )
    });

    return (
      <div className="carouselItems">
        <div className="carouselControl" onClick={prevPage}>
        </div>
        {booksCards}
        <div className="carouselControl carouselControl--next" onClick={nextPage}>
        </div>
      </div>
    );
  }
;

export default CarouselItems;