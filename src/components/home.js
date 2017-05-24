import React, { Component } from 'react';
import './../App.css';

var Link = require('react-router-dom').Link;

class Home extends Component {
	render() {
		return (
			<div className='home-container'>
				<h1><span id="git">GitHub</span> <span id="battle">Battle</span></h1>

				<p className="intro">Welcome to GitBattle, a <strike>completely</strike> useless app!<br /><br />
				You can 'battle' two git profiles, see the most popular repos in multiple languages and...<br />
				Well that's actually it. The battles are decided by a <em>super</em> complex algorithm. <br />
				The entire thing could fall apart as soon as I hit my git api rate limit. <br />
				Built w/ reacttraining tutorial, converted to es6 with the create-react-app, styled by me. <br />
				</p>
				<Link className='button' to="/battle">
				  Battle
				 </Link>


			</div>
		)
	}
}

export default Home