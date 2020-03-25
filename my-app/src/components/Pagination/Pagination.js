import React from 'react';
import {
  faChevronRight,
  faChevronLeft,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import './Pagination.css';
import PaginationItem from '../PaginationItem/PaginationItem';

const Pagination = ({currentPage, itemsPerPage, totalItems, paginate, prevPage, nextPage, setItemsPerPage}) => {

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const createRangeForPagination = (current, end, delta) => {
    const prevItem = current - delta;
    const nextItem = current + delta + 1;
    const arrRange = [];
    for (let i = 1; i <= end; i++) {
      if (i === 1 || i === end || (i >= prevItem && i < nextItem)) {
        arrRange.push(i);
      }
    }
    return arrRange;
  };

  const range = createRangeForPagination(currentPage, totalPages, 1);

  const createPaginationArr = (arr, separator, start, end) => {
    let item;
    const rangeWithSeparate = [];
    for (let i = 0; i < arr.length; i++) {
      if (item) {
        if (arr[i] - item === 2) {
          rangeWithSeparate.push(item + 1);
        } else if (arr[i] - item !== 1) {
          rangeWithSeparate.push(separator);
        }
      }
      rangeWithSeparate.push(arr[i]);
      item = arr[i];
    }
    return rangeWithSeparate;
  };

  const paginationArr = createPaginationArr(range, '...', currentPage, totalPages);

  const pagination = paginationArr.map(number => {
    return (
      <PaginationItem
        key={number.toString()}
        active={number === currentPage}
        number={number}
        paginate={number === currentPage || number === '...' ? null : paginate}
      />
    );
  });

  return (
    <div>
      <div className="pagination">
        {/*<span className="pageChevron" onClick={prevPage}>*/}
           {/*<FontAwesomeIcon icon={faChevronLeft}/>*/}
          {/*</span>*/}
        {/*<span className="pageChevron" onClick={prevPage}>*/}
            {/*<FontAwesomeIcon icon={faAngleDoubleLeft}/>*/}
          {/*</span>*/}
        <ul className="paginationList">
          {pagination}
        </ul>
        {/*<span className="pageChevron" onClick={nextPage}>*/}
           {/*<FontAwesomeIcon icon={faAngleDoubleRight}/>*/}
          {/*</span>*/}
        {/*<span className="pageChevron" onClick={nextPage}>*/}
           {/*<FontAwesomeIcon icon={faChevronRight}/>*/}
          {/*</span>*/}
      </div>
      <div className="pagination">
        <div className="page-item">
      <span onClick={() => setItemsPerPage(3)} className="page-link">
      {'3'}
      </span>
        </div>
        <div className="page-item">
      <span onClick={() => setItemsPerPage(5)} className="page-link">
      {'5'}
      </span>
        </div>
        <div className="page-item">
      <span onClick={() => setItemsPerPage(6)} className="page-link">
      {'6'}
      </span>
        </div>
        <div className="page-item">
      <span onClick={() => setItemsPerPage(10)} className="page-link">
      {'10'}
      </span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;