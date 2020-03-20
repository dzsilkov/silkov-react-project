import React from 'react';
import './Pagination.css';

const Pagination = ({currentPage, itemsPerPage, totalItems, paginate, prevPage, nextPage, setItemsPerPage}) => {

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function createRangeForPagination(current, end, delta) {
    const prevItem = current - delta;
    const nextItem = current + delta + 1;
    const arrRange = [];
    for (let i = 1; i <= end; i++) {
      if (i === 1 || i === end || (i >= prevItem && i < nextItem)) {
        arrRange.push(i);
      }
    }
    return arrRange;
  }

  function getSeparateRange(arr, separator) {
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
  }

  const pagination = getSeparateRange(createRangeForPagination(currentPage, totalPages, 1), '...');

  return (
    <div>
      <div className="pagination">
        <div className="page-item"
             onClick={prevPage}
        >
          <span className="page-link">
            prev
          </span>
        </div>
        {pagination.map(number => {
          return (
            <div className="page-item"
                 key={number}
            >
              <span className="page-link"
                    onClick={(e) => {
                      e.preventDefault();
                      paginate(number);
                    }}
              >
                {number}
              </span>
            </div>
          );
        })}
        <div className="page-item"
        >
          <span className="page-link"
                onClick={nextPage}
          >
            next
          </span>
        </div>
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