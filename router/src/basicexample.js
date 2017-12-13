
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  
import React from 'react';
import Home from './home.js';
import About from './about.js';
import Portfolio from './portfolio.js';




const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about--">About</Link></li>
                <li><Link to="/portfolio--">Portfolio</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component={Home}/>
            <Route path="/about--" component={About}/>
            <Route path="/portfolio--" component={Portfolio}/>
        </div>

        
    </Router>
)
export default BasicExample;