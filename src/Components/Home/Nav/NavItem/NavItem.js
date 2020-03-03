import React from 'react';
import { Link } from 'react-scroll';

import './NavItem.css';

const NavItem = props => {
  return (
    <Link 
      className="NavItem" 
      to={props.itemId} 
      smooth={true}
      duration={1000}
      onClick={props.setShowNav}>
        <p className="NavItem__p">{props.item}</p>
    </Link>
  )
};

export default NavItem;