import React, { Component } from 'react';
import './../App.css';

var Link = require('react-router-dom').Link;

class Home extends Component {
	render() {
		return (
			<div className='home-container'>
				<div id="title-container"><span id="git">GitHub</span> <span id="battle">Battle</span></div>

				<p className="intro">&#10004; 'Battle' two git profiles! **</p> 
				<p className="intro">&#10004; See most popular repos in multiple languages! **</p> 
				<Link className='button' to="/battle">
				  Battle
				 </Link>

				 <p className="intro"><span>
				** The entire thing could fall apart as soon as I hit my git api rate limit<br/>
				Built w/ reacttraining tutorial, converted to es6 with the create-react-app, ~lightly~ styled by me. </span>
				</p>
			</div>
		)
	}
}

export default Home