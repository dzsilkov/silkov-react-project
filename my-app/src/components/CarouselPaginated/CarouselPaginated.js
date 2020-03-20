import React from 'react';

import './CarouselPaginated.css';
import CarouselItems from './CarouselItems/CarouselItems';

const CarouselPaginated = (props) => {

  const {books, nextPage, prevPage} = props;

  const loading = false;

  return (
    <section>
      <CarouselItems
        loading={loading}
        books={books}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </section>
  );
};

export default CarouselPaginated;