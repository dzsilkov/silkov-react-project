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
  } = props;

  const loading = false;

  return (
    <>
      <CarouselVisibilityShow
        setBooksPerPage={setBooksPerPage}
        itemsPerPage={itemsPerPage}
      />
      <CarouselPaginatedItems
        loading={loading}
        books={books}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
      />
    </>
  );
};

export default CarouselPaginated;