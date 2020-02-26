import React from 'react';

import './NavBtn.css';

const NavBtn = props => {
  return (
    <div className="NavBtn">
      <span className="NavBtn__span top" />
      <span className="NavBtn__span middle" />
      <span className="NavBtn__span bottom" />
    </div>
  )
};

export default NavBtn;