import React from 'react';
import './CarouselPaginaredItems.css';
import CarouselPaginatedItemCard from '../CarouselPaginatedItemCard/CarouselPaginatedItemCard';

const CarouselPaginatedItems = (props) => {


  const {books, nextPage, prevPage, loading, handlerHover} = props;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    const booksCards = books.map(({book, id}) => {
      return (
        <CarouselPaginatedItemCard
          key={id}
          book={book}
          handlerHover={handlerHover}
        />
      )
    });

    return (
      <div className="carouselItems">
        <div className="carouselControl" onClick={prevPage}> </div>
        <ul className="carouselItemsList">
          {booksCards}
        </ul>
        <div className="carouselControl carouselControl--next" onClick={nextPage}> </div>
      </div>
    );
  }
;

export default CarouselPaginatedItems;