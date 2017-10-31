import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MultipleDatePicker from './lib';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <MultipleDatePicker onSubmit={dates => console.log('selected dates ', dates)} minDate={new Date()} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
