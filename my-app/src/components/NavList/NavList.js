import React from 'react';
import NavItem from '../NavItem/NavItem';
import './NavList.css';

const NavList = ({router, menuItems}) => {

  const menu = menuItems.map(item => {
    return (
      <NavItem item={item} key={item.title} router={router}/>
    );
  });

  return (
    <ul className="navList">
      {menu}
    </ul>
  );
};


export default NavList;
