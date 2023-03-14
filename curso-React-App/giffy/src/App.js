import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';


function App() {
  return (
    <a href={`#${id}`} className="App">
      <section className="App-content">
        <ListOfGifs keyword='panda'/>
      </section>
    </a>
  );
}

export default App;
