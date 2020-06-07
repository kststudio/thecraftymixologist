import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact'
import Admin from './pages/admin';
import Create from './pages/create'
import Post from './pages/post';
import NoPageFound from './pages/404';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/contact' component={ Contact } />
        <Route exact path='/admin' component={ Admin } />
        <Route exact path='/admin/create' component={ Create } />
        <Route exact path='/admin/edit' component={ Post } />
        <Route path='/' component={ NoPageFound } />
      </Switch>
    </Router>
  )
}

export default App;
