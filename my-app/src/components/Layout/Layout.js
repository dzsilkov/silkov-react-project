import React from 'react';
import Main from '../Main/Main';
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
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};


export default Layout;
