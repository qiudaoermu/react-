import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Props from "./componentPorps/props/App.js"
import Propscallback from './componentPorps/propscallback/App'
import Context from './componentPorps/context/App'
import Event from './componentPorps/event/App'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <Props></Props>
          <Propscallback/>
          <Context/>
          <Event/>
      </div>
    );
  }
}

export default App;
