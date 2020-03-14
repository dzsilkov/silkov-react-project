import React from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import AuthStatus from '../AuthStatus/AuthStatus';


const NavBar = (props) => {
  return (
    <div className="navBar">
      <Logo/>
      <Nav/>
      <AuthStatus/>
    </div>
  );
};

export default NavBar;
