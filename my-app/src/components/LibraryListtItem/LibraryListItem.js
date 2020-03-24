import React from 'react';
import './LibraryListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHeart, faMinusCircle, faBookDead } from '@fortawesome/free-solid-svg-icons';


function LibraryListItem({handleClick, item: {author, title, id, favourite, read}}) {

  const favouriteColor = favourite ? '#ff6347' : '#b8948e';
  const listenedColor = read ? '#1ad64d' : '#978863';
  const removeColor = read && favourite ? '#ff6347' : '#1ad64d';
  const removeIcon = read && favourite ? faMinusCircle : faBookDead;


  return (
    <li className="libraryListItem"
        onClick={handleClick}
        id={id}>
      <div className="libraryListItemHeader">
        <h4>{author}</h4>
        <p>{title}</p>
      </div>
      <div className="libraryListItemActions">
        <span
          className="actionFavourite"
        >
        <FontAwesomeIcon
          id="favourite"
          color={favouriteColor}
          size="2x"
          icon={faHeart}/>
      </span>
        <span
          className="actionRead"
        >
        <FontAwesomeIcon id="read" color={listenedColor} size="2x" icon={faBook}/>
      </span>
        <span
          className="actionRemove"
        >
        <FontAwesomeIcon id="delete" color={removeColor} size="2x" icon={removeIcon}/>
      </span>
      </div>
    </li>
  );
}

export default LibraryListItem;
