import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

const Admin = () => {
  return (
      <div id="grid-container">
          <Nav />
          <section>
              <h2>Admin</h2>
          </section>
          <section>
            <form action="/admin/users" method="POST">
              <input type="text" name="username"/>
              <input type="password" name="password"/>
              <input type="submit" value="Submit"/>
            </form>
          </section>
          <Footer />
      </div>
  )
}

export default Admin