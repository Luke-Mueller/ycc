import React from 'react';

import Header from '../Header/Header';

import './Home.css';

const Home = props => {
  return (
    <section className="Home">
      <Header />
      <div className="Home__div">
        <p className="Home__p">Providing a home for Colorado-based charities</p>
        <p className="Home__p">and building bridges from them to you</p>
      </div>
    </section>
  )
};

export default Home;