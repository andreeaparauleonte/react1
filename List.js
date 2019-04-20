import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem';

class List extends Component{
    constructor(props){
        super(props);
    }

    handleItemClick = (item) => {       
        if (this.props.onItemClick) {
            this.props.onItemClick(item);
        }
    }

    isItemSelected = (item) => {
        if(this.props.isItemSelected){
            return this.props.isItemSelected(item);
        }
        return false;
    }

    ListItems(){
        let listitems = this.props.items.map(item => 
            <ListItem 
              key={item.id} 
              item={item} 
              isChecked={this.isItemSelected(item)} 
              onItemClick={this.handleItemClick}/>
            );
        return (
            <ul>{listitems}</ul>
        );
    }

    render(){
        return (
        <div className="leftMenu" >
            <div>
                {this.ListItems()}
            </div>
        </div>
        );
    }
}

export default List;