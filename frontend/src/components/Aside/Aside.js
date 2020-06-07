import React, { Component } from 'react';
import './aside.scss';

class Aside extends Component {
    render(){
        return(
            <aside className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h3>This is the aside</h3>
                    </div>
                </div>
            </aside>
        )
    }
}

export default Aside;