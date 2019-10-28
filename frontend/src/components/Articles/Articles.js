import React, { Component } from 'react';
import './articles.scss';

class Articles extends Component {
    render(){
        return(
            <div className="article-listing">
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

export default Articles;