import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import BlogIndex from './pages/blog-index'
import Single from './pages/single'
import Admin from './pages/admin'
import AdminLanding from './pages/admin-landing'
import Create from './pages/create'
import Update from './pages/blog-index'
import NoPageFound from './pages/404'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:5000/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/about' component={ About } />
          <Route exact path='/contact' component={ Contact } />
          <Route exact path='/posts' component={ BlogIndex } />
          <Route exact path='/posts/:id' component={ Single } />
          <Route exact path='/admin' component={ Admin } />
          <Route exact path='/admin/landing' component={ AdminLanding } />
          <Route exact path='/admin/create' component={ Create } />
          <Route exact path='/admin/edit' component={ Update } />
          <Route path='/' component={ NoPageFound } />
        </Switch>
      </Router>
    )
  }
}

export default App
