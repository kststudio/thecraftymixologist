import React, { Component } from 'react'

class Articles extends Component {
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
    const { posts } = this.state
    const currentURL = window.location.pathname
    const broken = currentURL.split('/')
    const currentPost = posts.filter(post => post._id === broken[2])

    return(
      <div className="article-listing">
      {currentPost.map(post =>
        <article key={post._id}>
            <h2>{post.title}</h2>
            <h6>{post.createdAt}</h6>
            {/* <div className="post-image photo1"></div> */}
            {post.content}
        </article>
      )} 
      </div>
    )
  }
}

export default Articles