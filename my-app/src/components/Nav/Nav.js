import React from 'react';
import { faCog, faSearch, faTv, faHome } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import NavList from '../NavList/NavList';

function Nav() {

  const menuItems = [
    {
      title: 'Home',
      link: 'home',
      icon: faHome,
      color: '#157DC3',
      routeOptions: {
        reload: true
      }
    },
    {
      title: 'Library',
      link: 'library',
      icon: faTv,
      color: '#157DC3',
      routeOptions: {}
    },
    {
      title: 'Search',
      link: 'search',
      icon: faSearch,
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
      <NavList menuItems={menuItems}/>
    </nav>
  );
}

export default Nav;