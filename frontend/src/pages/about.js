import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

const About = () => {
    return(
        <div id="grid-container">
            <Nav />
            <main className="container">
            <div className="row">
              <div className="col">
                <h2>About Us</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet dignissimos modi, aperiam repellat necessitatibus hic rerum quam voluptas illo labore ex consectetur vitae magnam cumque maxime molestiae minima velit.</p>

                <p>Asperiores illo corporis inventore, tenetur nostrum exercitationem sint voluptatum fuga vel repellat reprehenderit optio aliquam incidunt sit laboriosam assumenda voluptas hic accusantium! Cum, excepturi perferendis. Nisi nobis impedit repellendus inventore.
                Officia animi exercitationem nam quidem reiciendis aut numquam rerum doloremque a veritatis. Facilis autem, deleniti consequuntur magni totam beatae, similique fugit commodi enim temporibus, expedita mollitia quos ducimus? Dolorem, fugiat.</p>

                <p>Aut numquam autem nam! Veritatis fuga eos, dicta itaque alias eligendi ratione adipisci rem voluptatum neque nobis maxime quibusdam ab aliquid, reiciendis ipsam tempore? Nisi nesciunt quia voluptatem repudiandae nostrum? Provident adipisci, aut nulla eveniet iure assumenda quas earum aperiam nam esse autem dolorum maxime at! Minima natus, ullam quod laudantium corporis quisquam nemo provident. Porro eligendi aliquid doloremque distinctio.</p>
              </div>
            </div>
            </main>
            <Footer />
        </div>
    )
}

export default About