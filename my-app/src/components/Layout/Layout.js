import React from 'react';
import MainOutlet from '../MainOutlet/MainOutlet';
import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => {
  return (
    <div className="wrapper">
      <header>
        <Header/>
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
