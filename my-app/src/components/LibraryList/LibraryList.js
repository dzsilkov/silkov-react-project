import React from 'react';
import './LibraryList.css'
import LibraryListItem from '../LibraryListtItem/LibraryListItem';


const LibraryList = (props) => {

  const {title, handlerToggle, collection} = props;

  const list = collection.map(item => {
    return (
      <LibraryListItem
        key={item.id}
        item={item}
        handlerToggle={handlerToggle}
      />
    )
  });

  return (
    <div className="libraryList">
      <h3 className="libraryListTitle">{title}</h3>
      <ul>
        {list}
      </ul>
      <p className="libraryListFooter">
      </p>
    </div>
  );
};

export default LibraryList;
