import React, { Component } from 'react';
import './../App.css';

var Link = require('react-router-dom').Link;

class Home extends Component {
	render() {
		return (
			<div className='home-container'>
				<h1>Github Battle: Battle your Friends!</h1>


				<Link className='button' to="/battle">
				  Battle
				 </Link>


			</div>
		)
	}
}

export default Home