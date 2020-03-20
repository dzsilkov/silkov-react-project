import React from 'react';
import { useRouteNode } from 'react-router5'

import './CarouselPaginated.css';
import CarouselItems from './CarouselItems/CarouselItems';
import BookDetail from '../BookDetails/BookDetail';

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

// {route.name === 'books.book' ? (
//   <BookDetail {...books[route.params.id]} key={route.params.id} />
// ) : null}