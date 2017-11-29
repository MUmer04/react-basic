import React, { Component } from 'react';
import './App.css'
// import Submit from './Submit';

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
            <div className="main">
                   <div className="Button" >
          <form >  {this.props.A}
                    {this.props.B}
                    {this.props.C}
                {/* <span className="Padding"><button onClick = {this.edit}>Edit</button> */}
                {/* <button onClick = {this.remove}>X</button> */}
                {/* </span> */}
                </form>
                {/* <h1> {this.props.text} </h1>
                <p>{this.props.children}</p>
                <p>{this.props.img}</p> */}

           </div>
            </div>
        )
    }
}

export default Components;
