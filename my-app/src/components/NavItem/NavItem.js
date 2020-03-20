import React from 'react';
import './NavItem.css'
import { BaseLink } from 'react-router5';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { useRoute } from 'react-router5';

const NavItem = ({item:{link, color, icon, title, routeOptions: {reload}}}) => {

  // const {router} = useRoute();

  return (

    <li className="navItem">
      <Link
        to={link}
        // router={router}
        // routeName={link}
        // routeOptions={reload}
      >
        <FontAwesomeIcon color={color} icon={icon}/>
        <span className="navLinkTitle">{title}</span>
      </Link>
    </li>
  );
};


export default NavItem;
