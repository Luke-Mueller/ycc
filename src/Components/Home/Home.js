import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

import './Home.css';

const Home = props => {
  return (
    <section className="Home">
      <Header />
      <div className="Home__div">
        <p className="Home__p">Providing a home for Colorado-based charities</p>
        <p className="Home__p">and building bridges from them to you</p>
      </div>
      <Backdrop>
        <Nav />
      </Backdrop>
    </section>
  )
};

export default Home;