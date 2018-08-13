import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./components/redux/store/store";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{float: 'left', marginLeft: '-15px'}}/>
          <h1 className="App-title" style={{float: 'left', marginTop:'30px', marginLeft: '-20px'}}>Itemize</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
