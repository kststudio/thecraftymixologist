import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

const Contact = () => {
  return (
    <div id="grid-container">
      <Nav />
      <main className="container">
        <div className="row">
          <div className="col">
          <h2>Contact Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet dignissimos modi, aperiam repellat necessitatibus hic rerum quam voluptas illo labore ex consectetur vitae magnam cumque maxime molestiae minima velit.</p>
          </div>
          <div className="col col-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47884.06810121189!2d2.1328015919890935!3d41.401142890640045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac21bc3c950!2sLa%20Sagrada%20Familia!5e0!3m2!1sen!2sus!4v1596740320097!5m2!1sen!2sus" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0" title="Google Map"></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )   
}

export default Contact