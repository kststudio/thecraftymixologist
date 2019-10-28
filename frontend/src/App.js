import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Create from './pages/create';
import Contact from './pages/contact'
import NoPageFound from './pages/404';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/about' component={ About } />
          <Route exact path='/create' component={ Create } />
          <Route exact path='/contact' component={ Contact } />
          <Route path='/' component={ NoPageFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
