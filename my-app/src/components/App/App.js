import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Nav />
      </header>
      <Main/>
    </div>
  );
}

export default App;
