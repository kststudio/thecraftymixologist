import React, { Component } from 'react';
import axios from 'axios';

class AllPosts extends Component {
    constructor(props){
        super(props);

        this.deletePost = this.deletePost.bind(this);

        this.state = {post: []}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/posts/')
            .then(response =>{
                    this.setState({posts: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePost(id){
        axios.delete('http://localhost:5000/posts/'+id)
        .then(res => console.log(res.data));
        this.setState({
            posts: this.state.posts.filter(el => el._id === !id)
        })
    }

    render(){
        return(
            <div className="article-listing">
            <article>
                    <h2>This is the heading</h2>
                    <h6>October 18, 2019 &bull; <a href="http://www.google.com" alt="Barman Variety"> 1 Comments</a></h6>
                    <div className="post-image photo1"></div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eos optio est molestias officiis magnam, voluptate consequatur magni impedit, nulla ipsa eligendi commodi modi aliquam accusantium, esse aperiam eveniet voluptates!</p>
                </article>
                <article>
                    <h2>This is the heading</h2>
                    <h6>October 18, 2019 &bull; <a href="http://www.google.com" alt="Barman Variety"> 1 Comments</a></h6>
                    <div className="post-image photo1"></div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eos optio est molestias officiis magnam, voluptate consequatur magni impedit, nulla ipsa eligendi commodi modi aliquam accusantium, esse aperiam eveniet voluptates!</p>
                </article>
            </div>
        )
    }
}

export default AllPosts;