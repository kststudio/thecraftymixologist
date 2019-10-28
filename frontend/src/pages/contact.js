import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'; 
import '../App.scss';

class Contact extends Component {
    render(){
        return(
            <div id="grid-container">
                <Nav />
                <section>
                    <h2>Contact Us</h2>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Contact;