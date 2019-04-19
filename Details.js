import React, { Component } from 'react';
import './Details.css';

class Details extends Component {
    
  render() {
      if(this.props.item != null )
            return (
            <div className="Details">         
                <h3>{this.props.item.name}</h3>
                <p>{this.props.item.details}</p>
                </div>          
            );
        else
            return (
            <div className="Details"><h3>No floor selected</h3>
                <p>No details</p> 
            </div>);
        
      
    
  }
}

export default Details;