import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import AllPosts from '../components/Articles/AllPosts'

const BlogIndex = () => {
  return (
    <>
      <Nav />
      <main className="container">
        <div className="row">
          <AllPosts />
        </div>
      </main>
      <Footer />
    </>
  )   
}

export default BlogIndex