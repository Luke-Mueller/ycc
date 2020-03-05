import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Nav from './Nav/Nav';
import AnimatedBurger from '../AnimatedBurger/AnimatedBurger';

import './Header.css';

const Header = props => {
  const navItems = [
    { item: 'Home', elementId: 'home' },
    { item: 'YCC', elementId: 'about' },
    { item: 'View Organizations', elementId: 'charities' },
    { item: 'Join the community', elementId: 'join' },
    { item: 'More Information', elementId: 'footer' }
  ];

  return (
    <header className="Header">
      <div className="Header__img">
        <p className="Header__p" style={{ color: props.showNav ? 'transparent' : 'white' }}>LOGO</p>  
      </div> 
      <AnimatedBurger
        showNav={props.showNav} 
        setShowNav={props.setShowNav}/>
      <Backdrop showNav={props.showNav}>
        <Nav 
          navItems={navItems}
          setShowNav={props.setShowNav} />
      </Backdrop>
    </header>    
  )
};

export default Header;

// This component will be replaced with an image of our logo