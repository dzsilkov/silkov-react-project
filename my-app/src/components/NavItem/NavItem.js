import React from 'react';
import './NavItem.css'
import { BaseLink } from 'react-router5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { useRoute } from 'react-router5';

const NavItem = ({visibility, item:{link, color, icon, title, routeOptions: {reload}}}) => {

  const {router} = useRoute();
  const navItemClass = !visibility ? "navItem" : "navItem";
  return (

    <li className={navItemClass}>
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
