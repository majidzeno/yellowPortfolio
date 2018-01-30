import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Services from './components/Services';

class Yell extends Component {
  render() {
    return (
      <div className="yell">
        <Heading />
        <LandingPage />
        <AboutMe />
        <Services />
      </div>
    );
  }
}

export default Yell;
