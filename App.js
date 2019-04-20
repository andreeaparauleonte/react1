import React, { Component } from 'react';
import ListView from './ListView';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  Header(){
    return (
      <header className="App-header">         
          <p>
            {this.props.titleheader}
          </p>
        </header>
    );
  }
  render() {
    return (
      <div className="App">
        {this.Header()}
        <ListView list={this.props.list}/>
      </div>
    );
  }
}

export default App;
