import React from 'react';
import './PaginationItem.css';
import PaginationLink from '../PaginationLink/PaginationLink';

const PaginationItem = ({number, paginate, active}) => {
  return (
    <li className="paginationItem">
      <PaginationLink
        active={active}
        number={number}
        paginate={paginate}
      />
    </li>
  );
};

export default PaginationItem;
