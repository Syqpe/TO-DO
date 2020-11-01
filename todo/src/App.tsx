import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';

import Navbar from "./components/Navbar";

import Todo from "./views/Todo";
import About from "./views/About";
import Info from "./views/Info";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <main className="page">
          <Switch>
            <Route exact path="/" component={Todo}/>  
            <Route path="/about" component={About}/>  
            <Route path="/info" component={Info}/>  
          </Switch>
        </main>
      </BrowserRouter>
    </>

  );
}

export default App;
