import React, { Component } from 'react';




class Submit extends Component{
    
    render(){
        return(
        <div>
       <p>  {this.props.allValues.Name} <br />
       {this.props.allValues.Father_Name} <br />
       {this.props.allValues.Email}   </p>
      </div> 
       )
    }
}

export default Submit;
