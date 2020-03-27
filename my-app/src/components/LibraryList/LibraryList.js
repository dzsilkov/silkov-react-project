import React from 'react';
import './LibraryList.css';
import LibraryListItem from '../LibraryListtItem/LibraryListItem';
import cx from 'classnames';


const LibraryList = (props) => {

  const {title, handleClick, collection, visible, handleChangeVisible} = props;

  const list = collection.map(item => {
    return (
      <LibraryListItem
        id={item.id}
        key={item.id}
        item={item}
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className="libraryListCard">
      <div className="libraryListHeader">
        <h3 className="libraryListTitle">
          {title}
        </h3>
        <div>
          <span className="libraryListAction">{!visible ? 'Show' : 'Hide'}</span>
          <input
            type="checkbox"
            onChange={handleChangeVisible.bind(null, title)}
            value={visible}
          />
        </div>
      </div>
      <div className={cx(
        'libraryList',
        visible && 'libraryList--active'
      )}
      >
        {list}
      </div>
      <p className="libraryListFooter">
      </p>
    </div>
  );
};

export default LibraryList;
