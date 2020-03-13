import React from 'react';
import { BaseLink, useRoute } from 'react-router5';
import './Nav.css';

function Nav() {
  const {router} = useRoute();

  const menuItems = [
    {
      title: 'Home',
      link: 'home',
      routeOptions: {
        reload: true
      }
    },
    {
      title: 'Library',
      link: 'library',
      routeOptions: {}
    },
    {
      title: 'Search',
      link: 'search',
      routeOptions: {}
    },
    {
      title: 'Settings',
      link: 'settings',
      routeOptions: {}
    },
  ];

  const menu = menuItems.map(({title, link, routeOptions: {reload}}) => {
    return (
      <li key={title} className="navItem">
        <BaseLink
          router={router}
          routeName={link}
          routeOptions={reload}
        >
          {title}
        </BaseLink>
      </li>
    );
  });

  return (
    <nav>
      <ul className="navList">
        {menu}
      </ul>
    </nav>
  );
}

export default Nav;