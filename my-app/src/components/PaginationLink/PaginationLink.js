import React from 'react';
import './PaginationLink.css';

const PaginationLink = ({paginate, number, active}) => {

  let pagiClass = '';
  if (number === '...') {
    pagiClass = 'dots';
  } else {
    pagiClass = active ? 'paginationLink activePagiLink' : 'paginationLink';
  }


  return (
    <a className={pagiClass}
       href="#"
       onClick={paginate ? () => paginate(number) : null}>
      {number}
    </a>
  );
};

export default PaginationLink;
