import React from 'react';
import { Link, animateScroll } from 'react-scroll';

import './NavItem.css';

const NavItem = props => {

  console.log(props)
  // const scrollHandler = () => {
  //   document.getElementById(props.id).scrollIntoView();
  // }

  return (
    <Link 
      className="NavItem" 
      to={props.itemId} 
      smooth={true}
      onClick={props.setShowNav}>
        <a className="NavItem__a">{props.item}</a>
    </Link>
  )
};

export default NavItem;