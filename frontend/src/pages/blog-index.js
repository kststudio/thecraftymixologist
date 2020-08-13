import React, {Component} from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import AllPosts from '../components/Articles/AllPosts'

class BlogIndex extends Component {
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
              <AllPosts posts={this.state.posts} />
            </div>
          </main>
          <Footer />
        </>
      )   
  }
}

export default BlogIndex