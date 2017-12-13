import React, {Component} from 'react';
import Router from './router.jsx';
import './App.css'

class App extends Component{
    render () {
const mapping = { 
    '#profile': <div >Profile (<a href="#">home</a>)</div>,
    '#accounts': <div >Accounts (<a href="#">home</a>)</div>,
    '*': <div>Dashboard<br/>
    <a href="#profile">Profile</a>
    <br/>
    <a href="#accounts">Accounts</a>
    </div>
    }
    return (
    <div ClassName = "App">
    <header className="App-header">
    <Router mapping = {mapping}/>
    </header>
    </div>
    );
}
}
    export default App;

