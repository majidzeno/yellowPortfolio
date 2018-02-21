import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './css/App.css';

import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Services from './components/Services';


ReactDOM.render(
<BrowserRouter className="yell">
	<div>
		<Navigation />
		<Switch>
			<Route path="/services" component={Services}/>
			<Route path="/aboutme" component={AboutMe}/>
			<Route path="/landingpage" component={LandingPage}/>
		</Switch>
	</div>
</BrowserRouter>

,document.getElementById('root'));

