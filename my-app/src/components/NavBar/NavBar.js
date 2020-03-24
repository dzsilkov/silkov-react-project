import React from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import AuthStatus from '../AuthStatus/AuthStatus';


const NavBar = ({activeUser}) => {
  return (
    <div className="navBar">
      <Logo/>
      <Nav activeUser={activeUser}/>
      <AuthStatus activeUser={activeUser}/>
    </div>
  );
};

export default NavBar;
