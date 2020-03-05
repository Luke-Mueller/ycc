import React from 'react';

import NavItem from './NavItem/NavItem';
import './Nav.css';

const Nav = props => {
  const navItems = props.navItems.map(navItem => {
    return <NavItem 
      item={navItem.item}
      itemId={navItem.elementId}
      key={props.navItems.indexOf(navItem)}
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