import React, { Component } from 'react';
import logo from './logo.svg';
import dd from './dd.JPG';
import './App.css';
import Components from './Component.js';

const Img = <img src = "dd.JPG" alt = "" />
class App extends Component {
 
  render() {
  
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      
        <Components text = {"Hello World"} />
        <Components text = {"This is a component"} />
        <Components text = {"This component has been reused"}/>
        {/* <Components img = {Img}/> */}
    
      </div>
    );
  }
}

export default App;
