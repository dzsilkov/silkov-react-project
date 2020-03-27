import React from 'react';
import './Pagination.css';
import PaginationItem from '../PaginationItem/PaginationItem';

const Pagination = props => {
  const {currentPage, itemsPerPage, totalItems, paginate} = props;
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
    <div className="pagination">
      <span className="pagination-label">Go to page:</span>
      <ul className="paginationList">
        {pagination}
      </ul>
    </div>
  );
};

export default Pagination;