import React from 'react';

import './CarouselPaginated.css';
import CarouselPaginatedItems from '../CarouselPaginatedItems/CarouselPaginatedItems';
import CarouselVisibilityShow from '../CarouselVisibilityShow/CarouselVisibilityShow';
import Pagination from '../Pagination/Pagination';

const CarouselPaginated = props => {
  const {
    books,
    nextPage,
    prevPage,
    currentPage,
    totalItems,
    itemsPerPage,
    paginate,
    setBooksPerPage,
    handlerHover
  } = props;

  const loading = false;

  return (
    <div className="booksNav">
      <CarouselVisibilityShow
        setBooksPerPage={setBooksPerPage}
        itemsPerPage={itemsPerPage}
      />
      <CarouselPaginatedItems
        loading={loading}
        books={books}
        nextPage={nextPage}
        prevPage={prevPage}
        handlerHover={handlerHover}
      />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
      />
    </div>
  );
};

export default CarouselPaginated;