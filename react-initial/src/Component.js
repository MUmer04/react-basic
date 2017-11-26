import React, { Component } from 'react';
import dd from './dd.JPG';

class Components extends Component{
    render(){
        return(
            <div>
                <h1> {this.props.text} </h1>
                {/* <p>{this.props.img}</p> */}
            </div>
        )
    }
}

export default Components;
