import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class AllPosts extends Component {
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
    
    return (
      <>
      {posts.map(post =>
        <div className="col col-md-4" key={post._id}>
          <Card>
            <Link to={`/posts/${post._id}`}><CardImg top width="100%" src={post.picture} alt={post.title} /></Link>
              <CardBody>
                <CardTitle>
                  <Link to={`/posts/${post._id}`}><h3>{post.title}</h3></Link>
                </CardTitle>
                <CardSubtitle>{post.author}</CardSubtitle>
                <CardText>{post.excerpt}</CardText>
                <Button><Link to={`/posts/${post._id}`}>Read More</Link></Button>
              </CardBody>
            </Card>
        </div>
      )} 
      </> 
    )
  }
}

export default AllPosts