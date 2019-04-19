import React, { Component } from 'react';
import LeftMenu from './leftMenu';
import './App.css';

class App extends Component {
  constructor(props, context){
    super(props);
    console.log("in app safter super");
    console.log(this);
    console.log(props);
    this.onItemClickHandler = this.onItemClickHandler.bind(this);

  }

  onItemClickHandler(event){
    console.log("test click");
    console.log(event.target);
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
