import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import axios from "axios"

class CreatePost extends Component {
    constructor(props){
        super(props)

        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeAuthor = this.onChangeAuthor.bind(this)
        this.onChangeImage = this.onChangeImage.bind(this)
        this.onChangeContent = this.onChangeContent.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            title: '',
            author: '',
            image: '',
            content: '',
            date: new Date()
        }
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    onChangeAuthor(e){
        this.setState({
            author: e.target.value
        })
    }

    onChangeImage(e){
        this.setState({
            image: e.target.value
        })
    }

    onChangeContent(e){
        this.setState({
            content: e.target.value
        })
    }

    onChangeDate(date){
        this.setState({
            date: date
        })
    }
    onSubmit(e){
        e.preventDefault()

        const post = {
            title: this.state.title,
            author: this.state.author,
            image: this.state.image,
            content: this.state.content,
            date: this.state.date
        }

        console.log(post);

        axios.post('http://localhost:5000/posts/add', post)
            .then(res => console.log(res.data))
    }

    render(){
        return(
            <div>
                <h3>Create Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>Title: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.Title}
                        onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                    <label>Author: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.Author}
                        onChange={this.onChangeAuthor}
                        />
                    </div>
                    <div className="form-group">
                    <label>Image: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.Image}
                        onChange={this.onChangeImage}
                        />
                    </div>
                    <div className="form-group">
                    <label>Content: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.Content}
                        onChange={this.onChangeContent}
                        />
                    </div>
                    <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                        />
                    </div>
                    </div>

                    <div className="form-group">
                    <input type="submit" value="Create Post" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreatePost