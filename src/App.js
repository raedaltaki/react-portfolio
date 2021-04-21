import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {

  const [navSelected, setNavSelected] = useState("About me");
  return (
    <div className="App">
      <Header setNavSelected = {setNavSelected}/>
      <Project navSelected = {navSelected}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Footer />
    </div>
  );
}

export default App;
