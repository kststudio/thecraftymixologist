import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './main.scss';

import CreatePost from '../Articles/create-post';

class Main extends Component {
    render(){
        return(
            <main>
                <Router>
                    <Route path="/create" component={ CreatePost } />
                </Router>
            </main>
        )
    }
}

export default Main;