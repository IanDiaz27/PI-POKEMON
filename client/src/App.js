import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <Route exact path = '/' component = {Landing}/>
      <Route path = '/home' component = {NavBar}/>
      <Route exact path = '/home' component = {Home}/>
    </div>
  );
}

export default App;
