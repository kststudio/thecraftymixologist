import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'; 

class Create extends Component {
  state = {
    title: '',
    author: '',
    image: '',
    content: '',
    date: ''
  }

 

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(event.target.value);
  }

  handleSubmitChange = (event) => {
    console.log(this.state.value);
    event.preventDefault();
  }
  
  render(){
    const {title, author, content} = this.state

    return(
        <div id="grid-container">
            <Nav />
            <section>
                <h2>Create New Post</h2>
            </section>
            <section>
                <form action="/post" method="POST" onSubmit={this.handleSubmitChange}>
                    <form-group>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" onChange={ this.handleInputChange } value={ title } />
                    </form-group>

                    <form-group>
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" id="author" onChange={ this.handleInputChange } value={ author } />
                    </form-group>

                    <form-group>
                        <label htmlFor="image">Image</label>
                        <input type="file" name="image" onChange={this.handleInputChange} value={this.state.image}  />
                    </form-group>

                    <form-group>
                        <label htmlFor="content">Post</label>
                        <textarea name="content" id="content" onChange={ this.handleInputChange } value={ content }></textarea>
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