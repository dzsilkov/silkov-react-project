import React from 'react';
import NavItem from '../NavItem/NavItem';
import './NavList.css';

const NavList = ({menuItems, isLoggedIn}) => {

  const menu = menuItems.map(item => {
    return (
      <NavItem
        item={item}
        key={item.title}
        visibility={isLoggedIn}
      />
    );
  });

  return (
    <ul className="navList">
      {menu}
    </ul>
  );
};


export default NavList;
