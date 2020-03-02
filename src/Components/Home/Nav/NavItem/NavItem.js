import React from 'react';
import { Link, animateScroll } from 'react-scroll';

import './NavItem.css';

const NavItem = props => {
  return (
    <Link 
      className="NavItem" 
      to={props.itemId} 
      smooth={true}
      duration={1000}
      onClick={props.setShowNav}>
        <a className="NavItem__a">{props.item}</a>
    </Link>
  )
};

export default NavItem;