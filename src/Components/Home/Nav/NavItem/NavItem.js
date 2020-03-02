import React from 'react';

import './NavItem.css';

const NavItem = props => {
  return (
    <li>
      <a href="#">{props.item}</a>
    </li>
  )
};

export default NavItem;