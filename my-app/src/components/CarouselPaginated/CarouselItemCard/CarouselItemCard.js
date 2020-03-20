import React from 'react';
import { Link } from "react-router-dom";

import './CarouselItemCard.css';

const CarouselItemCard = ({book}) => {
  return (
    <div key={book.id} className="carouselItemCard">
      <h4 className="itemCardTitle">Open</h4>
      <div className="itemCardMedia">
        <Link
          key={book.id}
          to={`/books/${book.id}`}

        ><img src={book.coverImageUrl} alt=""/>
        </Link>
      </div>
      <div className="itemCardDetails">
      </div>
    </div>
  );
};

export default CarouselItemCard;