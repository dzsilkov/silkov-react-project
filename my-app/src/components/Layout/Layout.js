import React from 'react';
import './Layout.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import MainOutlet from '../MainOutlet/MainOutlet';

const Layout = (props) => {
  return (
    <div className="wrapper">
      <header>
        <NavBar/>
      </header>
      <main>
        <MainOutlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};


export default Layout;
