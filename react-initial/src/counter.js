import React, { Component } from 'react';
class Counter extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            counter: 0
        };
    }
    
        handleClick(e){
            this.setState ({
                counter: this.state.counter + 1
            });
    
    }
    resetValue(a){
        this.setState({
            counter: 0
        })
    }
    render(){
        return(
                <div>
                    <h1>{this.state.counter}</h1>
                    <button onClick={this.handleClick.bind(this)}>Click Counter</button>
                    <button onClick={this.resetValue.bind(this)}>Reset</button>
                </div>
        )
    }
}
export default Counter