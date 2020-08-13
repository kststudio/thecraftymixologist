import React, { Component } from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Single from '../components/Single/Single'

class SinglePost extends Component {
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
  render(){
    return (
      <>
      <Nav />
      <main className="container">
        <div className="row">
          <div className="col">
            <Single posts={this.state.posts} />
          </div>
        </div>
      </main>
      <Footer />
      </> 
    )
  }
}

export default SinglePost