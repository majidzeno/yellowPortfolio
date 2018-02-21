import React from 'react';
import homeLogo from '../scss/svgs/home.svg';
import resumeLogo from '../scss/svgs/resumea.svg';
import projectsLogo from '../scss/svgs/project.svg';
import codepenLogo from '../scss/svgs/codepen.svg';
import educationLogo from '../scss/svgs/education.svg';
import contactsLogo from '../scss/svgs/contact.svg';
import { Link } from 'react-router-dom';

function Navigation (){
	return (
		<div className="yell-navigation">
			<div className="yell-navigation__profilePicture">
			</div>
			<div className="yell-navigation__collection">
				<div className="yell-navigation__item">
					<a href="" className="is-active">
						<img className="yell-navigation__itemLogo" src={homeLogo}  alt="Home"/>
						<Link to="/">Home</Link>
					</a>
				</div>
				<div className="yell-navigation__item">
					<a href="" className="">
						<img className="yell-navigation__itemLogo" src={resumeLogo}  alt="reusme"/>
						<Link to="/landingpage">LandingPage</Link>
					</a>
				</div>
				<div className="yell-navigation__item">
					<a href="" className="">
						<img className="yell-navigation__itemLogo" src={projectsLogo}  alt="Home"/>
						// <p>Projects</p>
						<Link to="/services">Services</Link>
					</a>
				</div>
				<div className="yell-navigation__item">
					<a href="" className="">
						<img className="yell-navigation__itemLogo" src={codepenLogo}  alt="Home"/>
						<p>CodePen</p>
					</a>
				</div>
				<div className="yell-navigation__item">
					<a href="" className="">
						<img className="yell-navigation__itemLogo" src={educationLogo}  alt="Home"/>
						// <p>Education</p>
						<Link to="/aboutme">AboutMe</Link>

					</a>
				</div>
				<div className="yell-navigation__item">
					<a href="" className="">
						<img className="yell-navigation__itemLogo" src={contactsLogo}  alt="Home"/>
						<p>Contact</p>
					</a>
				</div>
			</div>
			<div className="yell-navigation__social">
				<a href=""><i className="fa fa-facebook-f"></i></a>
				<a href=""><i className="fa fa-twitter"></i></a>
				<a href=""><i className="fa fa-google"></i></a>
				<a href=""><i className="fa fa-wordpress"></i></a>				
				<a href=""><i className="fa fa-github-alt"></i></a>
			</div>
        </div>
	)
}

export default Navigation;