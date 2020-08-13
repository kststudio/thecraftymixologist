import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import Header from '../components/Header/Header'
import Feature from '../components/Feature/Feature'
import Footer from '../components/Footer/Footer'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:5000/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
  }

  render(){

    return (
      <>
        <Nav />
        <Header />
        <main className="container">
          <div className="row">
            <div className="col">
              <Link to="./posts"> View all post </Link>
            </div>
          </div>
          <Feature featuredPost={this.state.posts}/>
        </main>
        <Footer />
      </>
    )
  }
}

export default Home
