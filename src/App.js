import React, { Component } from 'react';

import ClockRange from './ClockRange/ClockRange';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{width: 300}}>
        <ClockRange />
        </div>
      </div>
    );
  }
}

export default App;
