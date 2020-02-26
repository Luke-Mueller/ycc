import React from 'react';

import NavBtn from './NavBtn/NavBtn';

import './Header.css';

const Header = props => {
  return (
    <header className="Header">
      <div className="Header__img">
        <p>LOGO</p>  
      </div> 
      <NavBtn />
    </header>    
  )
};

export default Header;