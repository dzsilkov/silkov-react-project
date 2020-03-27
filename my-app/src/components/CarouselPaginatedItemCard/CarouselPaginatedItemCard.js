import React from 'react';
import { Link } from 'react-router5';

import './CarouselPaginatedItemCard.css';

const CarouselPaginatedItemCard = ({handlerHover, book: {id, coverImageUrl}}) => {
  return (
    <li className="carouselItemCard"
        onMouseEnter={handlerHover.bind(null, id)}
    >
      <h4 className="itemCardTitle">Open</h4>
      <div className="itemCardMedia">
        <Link
          routeName="book"
          routeParams={{id}}
          activeClassName="active"
        ><img className="carouselCardImage" src={coverImageUrl} alt=""/>
        </Link>
      </div>
    </li>
  );
};

export default CarouselPaginatedItemCard;