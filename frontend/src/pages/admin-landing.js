import React, { Component } from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

class AdminLanding extends Component {
  state = {
    posts: []
  };

  componentDidMount(){
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data })   )
  }

  render(){
    const {posts} = this.state;
    return(
        <div id="grid-container">
            <Nav />
            <section>
                <h2>Admin Landing</h2>
            </section>
            <section>
              <a href="admin/create">Create a new post</a>
            </section>
            <section>
              <table>
                <thead>
                  <tr>
                    <td>Post Title</td>
                    <td>Author</td>
                    <td>Date</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  { posts.map(post => 
                  <tr key={post._id}>
                    <td><a href={`/posts/${post._id}`}>{ post.title }</a></td>
                    <td>{ post.author }</td>
                    <td>{ post.date }</td>
                    <td><a href={`/posts/${post._id}`}><button>Delete</button></a></td>
                  </tr>
                  )}
                </tbody>
              </table>
            </section>
            <Footer />
        </div>
    )
  }
}

export default AdminLanding