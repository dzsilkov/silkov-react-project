import React from 'react';
import './LibraryList.css';
import LibraryListItem from '../LibraryListtItem/LibraryListItem';


const LibraryList = (props) => {

  const {title, handleClick, collection} = props;

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
      <h3 className="libraryListTitle">{title}</h3>
      <div className='libraryList'>
        {list}
      </div>
      <p className="libraryListFooter">
      </p>
    </div>
  );
};

export default LibraryList;
