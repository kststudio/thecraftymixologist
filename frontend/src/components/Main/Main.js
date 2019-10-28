import React, { Component } from 'react';
import './main.scss';

import AllPosts from '../Articles/all-post';

class Main extends Component {
    render(){
        return(
            <main>
                <AllPosts />
            </main>
        )
    }
}

export default Main;