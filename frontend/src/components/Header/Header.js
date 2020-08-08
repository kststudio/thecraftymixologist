import React from 'react'
import scroll from '../../assets/scroll.svg'
import './header.scss'

const Header = () => {
    return(
        <header className="container-fluid">
            <div className="row">
                <div className="feature-msg">
                    <h2>Know your Drink. <br/>
                        Know your Mixologist.</h2>
                </div>
                <div id="scroll-down">
                    <img src={ scroll } alt="Scroll down to see more" className="scroll-icon"/>
                </div>
            </div>
        </header>
    );
}

export default Header