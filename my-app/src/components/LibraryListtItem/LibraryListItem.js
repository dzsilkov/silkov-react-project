import React from 'react';
import './LibraryListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHeart, faMinusCircle, faBookDead } from '@fortawesome/free-solid-svg-icons';


function LibraryListItem({handlerToggle, item: {artist, track, id, favourite, listened}}) {

  const favouriteColor = favourite ? '#ff6347' : '#b8948e';
  const listenedColor = listened ? '#1ad64d' : '#978863';
  const removeColor = listened ? '#1ad64d' : '#978863';


  return (
    <li className="libraryListItem">
      <div className="libraryListItemHeader">
        <h4>{artist}</h4>
        <p>{track}</p>
      </div>
      <div className="libraryListItemActions">
        <span
          className="actionFavourite"
          onClick={handlerToggle.bind(null, id, 'favourite')}
        >
        <FontAwesomeIcon color={favouriteColor} size="2x" icon={faHeart}/>
      </span>
        <span
          className="actionListened"
          onClick={handlerToggle.bind(null, id, 'listened')}
        >
        <FontAwesomeIcon color={listenedColor} size="2x" icon={faBook}/>
      </span>
        <span
          className="actionRemove"
          // onClick={handlerToggle.bind(null, id, 'favourite')}
        >
        <FontAwesomeIcon color={removeColor} size="2x" icon={faBookDead}/>
      </span>
      </div>
    </li>
  );
}

export default LibraryListItem;
