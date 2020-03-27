import React from 'react';
import { Link } from 'react-router5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faBook, faHeart, faMinusCircle, faBookDead, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './LibraryListItem.css';


function LibraryListItem({handleClick, item: {author, title, id, favourite, read}}) {

  const favouriteColor = favourite ? '#ff6347' : '#b8948e';
  const readColor = read ? '#1ad64d' : '#978863';
  const removeColor = read  ? '#1ad64d' : '#ff6347';
  const removeIcon = read ? faMinusCircle : faBan;
  const readIcon = read ? faBookOpen : faBook;

  return (

    <div className="libraryListItem"
        onClick={handleClick}
        id={id}>
      <div className="libraryListItemLink">
        <Link
          routeName="book"
          routeParams={{id}}
          activeClassName="active"
        >
          <div className="libraryListItemHeader">
            <h4 className="libraryListItemAuthor">{author}</h4>
            <p className="libraryListItemTitle">{title}</p>
          </div>
        </Link>
      </div>
      <div className="libraryListItemActions">
        <span className="actionFavourite">
        <FontAwesomeIcon
          id="favourite"
          color={favouriteColor}
          size="2x"
          icon={faHeart}/>
      </span>
        <span className="actionRead">
        <FontAwesomeIcon
          id="read"
          color={readColor}
          size="2x"
          icon={readIcon}/>
      </span>
        <span className="actionRemove"
        >
              <FontAwesomeIcon
                id="delete"
                color={removeColor}
                size="2x"
                icon={removeIcon}/>
            </span>
      </div>
    </div>
  );
}

export default LibraryListItem;
