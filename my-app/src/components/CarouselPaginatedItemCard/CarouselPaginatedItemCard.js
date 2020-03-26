import React from 'react';
import { Link } from 'react-router5';

import './CarouselPaginatedItemCard.css';

const CarouselPaginatedItemCard = ({book: {id, coverImageUrl}}) => {
  return (
    <li className="carouselItemCard">
      <h4 className="itemCardTitle">Open</h4>
      <div className="itemCardMedia">
        <Link
          routeName="book"
          routeParams={{id}}
          activeClassName="active"
        ><img src={coverImageUrl} alt=""/>
        </Link>
      </div>
      <div className="itemCardDetails">
      </div>
    </li>
  );
};

export default CarouselPaginatedItemCard;