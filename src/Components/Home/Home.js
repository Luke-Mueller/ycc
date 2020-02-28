import React, { useState } from 'react';

import Backdrop from '../Shared/Backdrop/Backdrop';
import Header from './Header/Header';
import HomeText from './HomeText/HomeText';
import Nav from './Nav/Nav';

import './Home.css';

const Home = props => {
  const [showNav, setShowNav] = useState(false);

  const setShowNavHandler = () => {
    setShowNav(!showNav);
  };

  return (
    <section className="Home">
      <Header setShowNav={setShowNavHandler} />
      <HomeText showNav={showNav} />
      <Backdrop showNav={showNav}>
        <Nav />
      </Backdrop>
    </section>
  )
};

export default Home;