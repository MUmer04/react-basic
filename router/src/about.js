import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import React from 'react';
import Home from './home';

const About = () => (
    <div>
        <h2>About-Us</h2>
        <Link to="/">Home</Link>
        
    </div>
)
export default About;