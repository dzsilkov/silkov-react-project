import React from 'react';
import { useRoute } from 'react-router5';
import { faCog, faSearch, faTv, faHome } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import NavList from '../NavList/NavList';

function Nav() {
  const {router} = useRoute();

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
      <NavList menuItems={menuItems} router={router}/>
    </nav>
  );
}

export default Nav;