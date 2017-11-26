import React, { Component } from 'react';



class Events extends Component {
  constructor(){
      super();
     this.state = {
               name : ""
          }
       }
  function(event){
      console.log(event);
      this.setState({name: event.target.value})
  }
    
  render() {

    return (  <div>
            <input type="text" onChange={this.function.bind(this)}/>
            { <p>{this.state.name}</p> }
      </div>
    )
  }

};
export default Events;