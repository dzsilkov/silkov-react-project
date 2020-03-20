import React from 'react';
import { Link } from 'react-router5';

import './CarouselItemCard.css';

const CarouselItemCard = ({book: {id, coverImageUrl}}) => {
  return (
    <div key={id} className="carouselItemCard">
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
    </div>
  );
};

export default CarouselItemCard;