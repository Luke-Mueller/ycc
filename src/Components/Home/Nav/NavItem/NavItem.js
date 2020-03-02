import React from 'react';

import './NavItem.css';

const NavItem = props => {
  return (
    <li className="NavItem">
      <a className ="NavItem__a" href="#">
        {props.item}
      </a>
    </li>
  )
};

export default NavItem;