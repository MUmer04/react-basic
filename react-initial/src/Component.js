import React, { Component } from 'react';
import './App.css'
// import dd from './dd.JPG';

class Components extends Component{
    edit(){
        alert("Editing Note");
    }
    remove(){
        alert("Removing Note");
    }
    render(){
        return(
            <div className="Button">
                <span className="Padding"><button onClick = {this.edit}>Edit</button>
                <button onClick = {this.remove}>X</button>
                </span>
                
                {/* <h1> {this.props.text} </h1>
                <p>{this.props.children}</p>
                <p>{this.props.img}</p> */}

            </div>
        )
    }
}

export default Components;
