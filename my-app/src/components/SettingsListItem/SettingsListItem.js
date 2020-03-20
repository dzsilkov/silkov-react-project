import React from 'react';
import './SettingsListItem.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { useRouteNode } from 'react-router5';
import { Link } from 'react-router-dom';


const SettingsListItem = ({handlerHover, item: {id, status, title, active, link, routeOptions: {reload}}}) => {

  // const {router} = useRouteNode('settings');
  const statusText = status ? 'on' : 'off';


  return (
    <li className="settingsListItem"
        onMouseEnter={handlerHover.bind(null, id)}
    >
      <Link
        to={link}
        // router={router}
        // routeName={link}
        // routeOptions={reload}
      >
        <span className="settingsListItemTitle">{title}</span>
        <span className="settingsListItemStatus">
        {statusText}
          <span className="settingsListItemIcon">
          <FontAwesomeIcon icon={faChevronRight}/>
        </span>
      </span>
      </Link>
    </li>
  );
};

export default SettingsListItem;
