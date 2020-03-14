import React from 'react';
import './NavItem.css'
import { BaseLink } from 'react-router5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';

const NavItem = ({router, item:{link, color, icon, title, routeOptions: {reload}}}) => {
  return (
    <li className="navItem">
      <BaseLink
        router={router}
        routeName={link}
        routeOptions={reload}
      >
        <FontAwesomeIcon color={color} icon={icon}/>
        <span className="navLinkTitle">{title}</span>
      </BaseLink>
    </li>
  );
};


export default NavItem;
