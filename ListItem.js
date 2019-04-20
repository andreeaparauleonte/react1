import React, { Component } from 'react';


class ListItem extends Component { 
    constructor(props){
        super(props);      
        this.handleItemClick = this.handleItemClick.bind(this)
    }
    
    handleItemClick = () => {
        if (this.props.item && this.props.onItemClick) {
            this.props.onItemClick(this.props.item);
        }
    }

  render() { 
      let item = this.props.item;   
      return(<li data-id={item.id} className={this.props.isChecked? "green":""} onClick={this.handleItemClick}>{item.name}</li>);   
  }
}

export default ListItem;