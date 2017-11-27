import React, { Component } from 'react';

class State1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name :"Umer"
    };
    }
   changeName(){
       this.setState({
        name: "Muhammed Umer"
        
       });
      
   }
    
    render(){
                const sObject = {
                backgroundColor:"blue",
                width: 100,
                margin: "auto"};
   
          return(
                <section style={sObject}>
          
                 
                <h2 onClick={this.changeName.bind(this)}>{this.state.name}</h2>

        </section>
    );
}
}
export default State1;