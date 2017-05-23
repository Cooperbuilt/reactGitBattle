import React, { Component } from 'react';
import Popular from './popular.js';
import './../App.css';
import Nav from './nav.js';
import Home from './home.js';
import Battle from './Battle.js';
import Results from './results.js';
var ReactRouter = require('react-router-dom');

var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'> 
          <Nav />
          <Switch >
          	<Route path='/battle/results' component={Results} />
          	<Route exact path='/' component= {Home} />
          	<Route exact path='/popular' component= {Popular} />
		  	<Route path='/battle' component= {Battle} />
		  	<Route  render={function () {
		  		return <p>Not Found</p>
		  	}} />
		  </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
