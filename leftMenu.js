import React, { Component } from 'react';
import './leftMenu.css';

class LeftMenu extends Component {
    constructor(props){ 
        super(props);
    }

    handleCheck(e) {
        let selected = e.currentTarget.dataset.id;
        console.log(selected);
     }

    render() {
      return (
        <div className="leftMenu" >
         <ul>
            <li onClick={this.handleCheck.bind(this)} data-id="1">Item 1</li>
            <li onClick={this.handleCheck.bind(this)} data-id="2">Item 2</li>
            <li onClick={this.handleCheck.bind(this)} data-id="3">Item 3</li>
            <li onClick={this.handleCheck.bind(this)} data-id="4">Item 4</li>
            <li onClick={this.handleCheck.bind(this)} data-id="5">Item 5</li>
            <li onClick={this.handleCheck.bind(this)} data-id="6">Item 6</li>
            <li onClick={this.handleCheck.bind(this)} data-id="7">Item 7</li>
        </ul>
        </div>
      );
    }
  }
  
  export default LeftMenu;