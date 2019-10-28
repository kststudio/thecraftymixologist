import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'; 
import '../App.scss';

class About extends Component {
    render(){
        return(
            <div id="grid-container">
                <Nav />
                <section>
                    <h2>About Us</h2>
                </section>
                <Footer />
            </div>
        )
    }
}

export default About;