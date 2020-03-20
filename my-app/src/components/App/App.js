import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

function App() {
  return (
    <div className="wrapper">
      <header>
        <NavBar/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

