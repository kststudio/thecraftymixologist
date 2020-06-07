import React from 'react';
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';
import Footer from '../components/Footer/Footer'; 

const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <section>
        <Main />
        <Aside />
      </section>
      <Footer />
    </>
  );
}

export default Home;
