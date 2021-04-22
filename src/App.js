import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {

  const [navSelected, setNavSelected] = useState("About me");
  return (
    <div className="App">
      <Header navSelected = {navSelected} setNavSelected = {setNavSelected}/>
      <h1 className="title m-5">{navSelected}</h1>
      <Project navSelected = {navSelected} />
      <Footer />
    </div>
  );
}

export default App;
