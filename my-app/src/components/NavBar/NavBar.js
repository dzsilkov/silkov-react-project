import React from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import AuthStatus from '../AuthStatus/AuthStatus';


const NavBar = (props) => {
  return (
    <header>
      <div className="navBar">
        <Logo/>
        <Nav/>
        <AuthStatus/>
      </div>
    </header>
  );
};

export default NavBar;
