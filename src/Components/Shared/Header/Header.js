import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Nav from './Nav/Nav';
import AnimatedBurger from '../AnimatedBurger/AnimatedBurger';

import './Header.css';

const Header = props => {
  return (
    <header className="Header">
      <div className="Header__img">
        <p className="Header__p" style={{ color: props.showNav ? 'transparent' : 'white' }}>LOGO</p>  
      </div> 
      <AnimatedBurger
        showNav={props.showNav} 
        setShowNav={props.setShowNav}/>
      <Backdrop showNav={props.showNav}>
        <Nav setShowNav={props.setShowNavHandler} />
      </Backdrop>
    </header>    
  )
};

export default Header;

// This component will be replaced with an image of our logo