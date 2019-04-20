import React, { Component } from 'react';

class Details extends Component {
    constructor(props){
        super(props);
    }
    handleClick(event) {
        // Pass the mutation request for selection up to the parent.
        this.props.toggleSelection(this.props.item);
    }

  render() {
      if(this.props.item != null )
            return (
            <div className="details">         
                <h3>{this.props.item.name}</h3>
                <p>{this.props.item.details}</p>
                <input type="button" value={this.props.isChecked? "Uncheck" : "Check"} onClick={this.handleClick.bind(this)}/>
            </div>          
            );
        else
            return (
            <div className="details"><h3>No floor selected</h3>
                <p>No details</p> 
            </div>); 
  }
}

export default Details;