import React from 'react';
import cx from 'classnames';
import { VISIBILITY_FILTERS } from '../../containers/BooksScreen/constants';
import './CarouselVisibilityShow.css';


const CarouselVisibilityShow = props => {

  const {setBooksPerPage, itemsPerPage} = props;

  return (
    <div className="visibility-filters">
      <span className="visibility-filters-label">Show: </span>
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <div
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              'filter',
              currentFilter === itemsPerPage && 'filter--active'
            )}
            onClick={() => {
              setBooksPerPage(currentFilter);
            }}
          >
            {currentFilter}
          </div>
        );
      })}
    </div>
  );
};


export default CarouselVisibilityShow;
