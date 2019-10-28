import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'; 
import '../App.scss';

class Create extends Component {
    render(){
        return(
            <div id="grid-container">
                <Nav />
                <section>
                    <h2>Create New Post</h2>
                </section>
                <section>
                    <form action="">
                        <form-group>
                            <label htmlFor="title">Title</label>
                            <input type="text"/>
                        </form-group>
                        <form-group>
                            <label htmlFor="author">Author</label>
                            <input type="text"/>
                        </form-group>
                        <form-group>
                            <label htmlFor="title">Image</label>
                            <input type=""/>
                        </form-group>
                        <form-group>
                            <label htmlFor="title">Post</label>
                            <textarea name="" id="" rows="10"></textarea>
                        </form-group>
                        <button>Submit</button>
                    </form>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Create;