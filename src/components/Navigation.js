import React from 'react';
import homeLogo from '../scss/svgs/home.svg';
import resumeLogo from '../scss/svgs/resumea.svg';
import projectsLogo from '../scss/svgs/project.svg';
import codepenLogo from '../scss/svgs/codepen.svg';
import educationLogo from '../scss/svgs/education.svg';
import contactsLogo from '../scss/svgs/contact.svg';

function Navigation (){
	return (
		<div className="yell-navigation">
			<div className="yell-navigation__profilePicture">
			</div>
			<div className="yell-navigation__collection">
				<div className="yell-navigation__item">
					<a href="" className="is-active">
						<img className="yell-navigation__itemLogo" src={homeLogo}  alt="Home"/>
						<p>Intro</p>
					</a>
				</div>
				<div className="yell-navigation__item">
					<a href="" className="">
						<img className="yell-navigation__itemLogo" src={resumeLogo}  alt="reusme"/>
						<p>Résumé</p>
					</a>
				</div>
				<div className="yell-navigation__item">
					<a href="" className="">
						<img className="yell-navigation__itemLogo" src={projectsLogo}  alt="Home"/>
						<p>Projects</p>
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
						<p>Education</p>
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
				<a href=""><i class="fa fa-facebook-f"></i></a>
				<a href=""><i class="fa fa-twitter"></i></a>
				<a href=""><i class="fa fa-google"></i></a>
				<a href=""><i class="fa fa-wordpress"></i></a>				
				<a href=""><i class="fa fa-github-alt"></i></a>
			</div>
        </div>
	)
}

export default Navigation;