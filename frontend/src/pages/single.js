import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Article from '../components/Articles/Articles'

const Single = () => {
  return (
    <>
    <Nav />
    <main className="container">
      <div className="row">
        <div className="col">
          <Article/>
        </div>
      </div>
    </main>
    <Footer />
    </> 
  )
}

export default Single