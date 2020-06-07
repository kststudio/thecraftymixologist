import React, { Component } from 'react';

class AllPosts extends Component {
  state = {
      posts: []
    };

  componentDidMount(){
    fetch('http://localhost:5000/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  };

  render(){
    const { posts } = this.state;
    return(
      <div className="article-listing">
      {posts.map(post =>
        <article key={ post._id }>
          <h2>{ post.title }</h2>
          <h4>{ post.author }</h4>
          <h6>{ post.date } &bull; <a href="/"> 1 Comments</a></h6>
          <p>{ post.content }</p>
        </article>
      )}
      </div>
    )
  }
}

export default AllPosts;