import React, { Component } from 'react';
import Articles from "../Articles/Articles";
import './main.scss';

class Main extends Component {
    render(){
        return(
            <main>
                <Articles />
            </main>
        )
    }
}

export default Main;