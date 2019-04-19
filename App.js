import React, { Component } from 'react';
import LeftMenu from './leftMenu';
import './App.css';

class App extends Component {
  constructor(props, context){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">         
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div id="AppLeft"></div>
        <LeftMenu menulist={this.props.menulist}/>
      </div>
    );
  }
}

export default App;
