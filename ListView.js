import React, { Component } from 'react';
import './ListView.css';
import List from './List';
import ListItem from './ListItem';
import Details from './Details';

class ListView extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            selectedItem : null,
            selectionArray :[]
        };
        this.selectListItemForDetails=this.selectListItemForDetails.bind(this);
        this.isSelected=this.isSelected.bind(this);
    }

    selectListItemForDetails(item){
      this.setState(() => {
          return {
              selectedItem: item
          };
        });
  }

    toggleSelection(item) {
      var index = this.state.selectionArray.indexOf(item.id);
      var newSelection = this.state.selectionArray.slice();
      // item is not currently selected
      if ( index === -1 ) {
        newSelection.push( item.id );
      // item is currently selected.
      } else {
        newSelection.splice( index, 1 );
      }
      this.setState({
        selectionArray: newSelection
        });
      }

    isSelected(item) {
      if(item!=null){
        console.log("in isSelected item="+item.id);
      }
      
        return( item!=null && this.state.selectionArray.indexOf( item.id ) !== -1);
    }

    render() {
        let items = this.props.list;
      return (
          <div className="container">
            <List 
              items={items}
              onItemClick={this.selectListItemForDetails}
              isItemSelected={this.isSelected}
              />
            <Details 
                item={this.state.selectedItem} 
                isChecked={this.isSelected(this.state.selectedItem)} 
                toggleSelection={this.toggleSelection.bind(this)}/>
        </div>
      );
    }
  }
  
  export default ListView;