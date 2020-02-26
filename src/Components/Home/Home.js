import React, { useState } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Header from './Header/Header';
import Nav from './Nav/Nav';

import './Home.css';

const Home = props => {
  const [showNav, setShowNav] = useState(false);

  const setShowNavHandler = () => {
    setShowNav(!showNav);
    console.log(showNav);
  }

  return (
    <section className="Home">
      <Header setShowNav={setShowNavHandler} />

      <Backdrop showNav={showNav}>
        <Nav />
      </Backdrop>
    </section>
  )
};

export default Home;