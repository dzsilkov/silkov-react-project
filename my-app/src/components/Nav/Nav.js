import React from 'react';
import { faCog, faUserAlt, faHome, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import NavList from '../NavList/NavList';

function Nav({activeUser}) {

  const navItems = [
    {
      title: 'Books',
      link: 'books',
      icon: faHome,
      color: '#157DC3',
      routeOptions: {
        reload: true
      }
    },
    {
      title: 'Library',
      link: 'library',
      icon: faBookOpen,
      color: '#157DC3',
      routeOptions: {}
    },
    {
      title: 'Auth',
      link: 'auth',
      icon: faUserAlt,
      color: '#157DC3',
      routeOptions: {}
    },
    {
      title: 'Settings',
      link: 'settings',
      icon: faCog,
      color: '#157DC3',
      routeOptions: {}
    },
  ];

  return (
    <nav className="nav">
      <NavList
        menuItems={navItems}
        isLoggedIn={activeUser}
      />
    </nav>
  );
}

export default Nav;