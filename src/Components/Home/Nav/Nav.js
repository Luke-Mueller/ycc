import React from 'react';

import NavItem from './NavItem/NavItem';
import './Nav.css';

const Nav = props => {

  const navItemsList = [
    { item: 'Home', elementId: 'home' },
    { item: 'About YCC', elementId: 'about' },
    { item: 'View charities', elementId: 'charities' },
    { item: 'Join the community', elementId: 'join' }
  ]

  const navItems = navItemsList.map(navItem => {
    return <NavItem 
      item={navItem.item}
      itemId={navItem.elementId}
      setShowNav={props.setShowNav} />
  });

  return (
    <nav className="Nav">
      <ul className="Nav__ul">
        {navItems}
      </ul>  
    </nav>
  )
}

export default Nav;