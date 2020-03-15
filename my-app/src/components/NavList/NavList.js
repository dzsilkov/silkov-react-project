import React from 'react';
import NavItem from '../NavItem/NavItem';
import './NavList.css';

const NavList = ({menuItems}) => {

  const menu = menuItems.map(item => {
    return (
      <NavItem item={item} key={item.title}/>
    );
  });

  return (
    <ul className="navList">
      {menu}
    </ul>
  );
};


export default NavList;
