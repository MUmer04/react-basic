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
                width: 200,
                margin: "auto"};
   
          return(
              <div>
                <h1>Click the Name</h1>
                <section style={sObject}>
                <h2 onClick={this.changeName.bind(this)}>{this.state.name}</h2>

        </section>
        </div>
    );
}
}
export default State1;