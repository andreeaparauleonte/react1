import React, { Component } from 'react';
import uniqueid from 'uniqid'
import './leftMenu.css';
import Details from './Details';


class LeftMenu extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            menuItems : props.menulist,
            selectedItem : props.menulist[0]
        };
    }
    handleClick(i, event){
        alert(i);
        let sleected = this.state.menuItems.filter(obj => {
            return obj.id === i
          });
        console.log("selectedItem");
        console.log(sleected.details);
        this.setState(() => {
            return {
                selectedItem: sleected[0]
            };
          });
    }
    render() {
        let items = this.props.menulist;
      return (
          <div className="container">
        <div className="leftMenu" >
         <ul>         
            {items.map(item => <li key={uniqueid()} data-id={item.id} onClick={this.handleClick.bind(this,item.id)}>{item.name}</li>)}
        </ul>
        </div>
        <Details item={this.state.selectedItem}></Details>
        </div>
      );
    }
  }
  
  export default LeftMenu;