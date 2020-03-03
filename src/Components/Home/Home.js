import React, { useState } from 'react';

import Header from '../Shared/Header/Header';
import HomeText from './HomeText/HomeText';

import './Home.css';

const Home = () => {
  const [showNav, setShowNav] = useState(false);

  const setShowNavHandler = () => {
    setShowNav(!showNav);
  };

  return (
    <section className="Home" id="home">
      <Header 
        showNav={showNav} 
        setShowNav={setShowNavHandler} />
      <HomeText showNav={showNav} />
    </section>
  )
};

export default Home;