import React from 'react';

import NavItem from './NavItem/NavItem';
import './Nav.css';

const Nav = () => {

  const navItemsList = [
    'Home',
    'About YCC',
    'The Charities',
    'Join the community'
  ]

  const navItems = navItemsList.map(navItem =>
    <NavItem 
      item={navItem} 
      key={navItemsList.indexOf(navItem)} />
  );

  return (
    <nav className="Nav">
      <ul className="Nav__ul">
        {navItems}
      </ul>  
    </nav>
  )
}

export default Nav;