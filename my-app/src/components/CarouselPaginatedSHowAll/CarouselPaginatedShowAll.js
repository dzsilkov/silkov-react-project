import React from 'react';
import CarouselPaginatedItemCard from '../CarouselPaginatedItemCard/CarouselPaginatedItemCard';
import './CarouselPaginatedShowAll.css'

const CarouselPaginatedShowAll = props => {

  const {books, handlerHover} = props;

  const gridCards = books.map(({book, id}) => {
    return (
      <CarouselPaginatedItemCard
        key={id}
        book={book}
        handlerHover={handlerHover}
      />
    );
  });

  return (
    <div className="boosShowAll">
      <div className="gridCards">
        {gridCards}
      </div>
    </div>


  );
};


export default CarouselPaginatedShowAll;
