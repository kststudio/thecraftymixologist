import React from 'react'

const Single = ({ posts }) => {
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

export default Single;