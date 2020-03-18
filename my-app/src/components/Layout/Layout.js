import React from 'react';
import './Layout.css';
import Footer from '../Footer/Footer';
import MainContentOutlet from '../MainContentOutlet/MainContentOutlet';
import NavBar from '../NavBar/NavBar';

const Layout = (props) => {
  return (
    <div className="wrapper">
      <NavBar/>
      <MainContentOutlet/>
      <Footer/>
    </div>
  );
};


export default Layout;
