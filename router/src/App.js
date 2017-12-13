import React, { Component } from 'react';
import * as firebase from 'firebase';

import logo from './logo.svg';
import './App.css';
// import BasicExample from './basicexample.js';
const ref = firebase.database().ref();
class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    }
  }
  componentDidMount() {
    ref.child("allTodos").once("value", function (umer) {
      const data = umer.val();
      console.log(data);
    })
  }
  changeHandler(event) {
    this.setState({ todo: event.target.value })
  }
  save() {
    ref.child("allTodos").set({ name: this.state.todo });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
         
        </header>
        <input type="text" value={this.state.todo} onChange={this.changeHandler.bind(this)} />
        <button onClick={this.save.bind(this)}>Save</button>
     
        
      </div>
    );
  }
}

export default App;
