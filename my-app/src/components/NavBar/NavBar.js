import React from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import AuthStatus from '../AuthStatus/AuthStatus';


const NavBar = ({authUser, isLoggedIn}) => {
  return (
    <div className="navBar">
      <Logo/>
      <Nav isLoggedIn={isLoggedIn}/>
      <AuthStatus authUser={authUser}/>
    </div>
  );
};

export default NavBar;
