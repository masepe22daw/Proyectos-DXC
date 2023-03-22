import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {
  return (
    <div  className="App">
      <section className="App-content">
        <h1>App Giffy :D</h1>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/barcelona'>Gifs de Barcelona</Link> 
        <Link to='/gif/argentina'>Gifs de Argentina</Link> 
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
