import React, { Component } from 'react';
import './css/App.css';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Services from './components/Services';

class Yell extends Component {
  render() {
    return (
      <div className="yell">
        <Navigation />
      </div>
    );
  }
}


