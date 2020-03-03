import React from 'react';

import NavBtn from './NavBtn/NavBtn';

import './Header.css';

const Header = props => {
  return (
    <header className="Header">
      <div className="Header__img">
        <p className="Header__p" style={{ color: props.showNav ? 'transparent' : 'white' }}>LOGO</p>  
      </div> 
      <NavBtn
        showNav={props.showNav} 
        setShowNav={props.setShowNav}/>
    </header>    
  )
};

export default Header;

// This component will be replaced with an image of our logo