import React, { Component } from 'react';
import LeftMenu from './leftMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">         
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div id="AppLeft"></div>
        <LeftMenu />
      </div>
    );
  }
}

export default App;
