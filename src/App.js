import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer'; 
import './App.scss';

class App extends Component {
  render(){
    return (
      <div className="App" id="grid-container">
        <Nav />
        <Header />
        <section>
          <Main />
          <Aside />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
