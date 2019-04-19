import React, { Component } from 'react';
import uniqueid from 'uniqid'
import './leftMenu.css';

function ShowListItem(props){
    console.log(props);
    //let boundItemClick = this.onItemClick.bind(this,props.item);
    return (
        <li key={uniqueid()} data-id={props.item.index} onClick={props.onClick}>{props.item.name}</li>
    );
}

function GetID(e) {
    console.log(this);
    console.log(e.target.id?e.target.id:e.target);
 }

 function handleClick(i, event) {
    alert(i);
}
 

class LeftMenu extends Component {
    constructor(props){ 
        super(props);
    }
    handleClick(i, event){
        alert(i);
    }
    render() {
        let items = this.props.menulist;
      return (
        <div className="leftMenu" >
         <ul>
            
{items.map(item => <li key={uniqueid()} data-id={item.id} onClick={this.handleClick.bind(this,item.id)}>{item.name}</li>)}
        </ul>
        </div>
      );
    }
  }
  
  export default LeftMenu;