import React from 'react';

import './NavBtn.css';

const NavBtn = props => {
  let classname;
  props.showNav ? classname = 'NavBtn active' : classname = 'NavBtn'; 

  return (
    <div 
      className={classname}
      onClick={props.setShowNav} >
      <span className="NavBtn__span" />
      <span className="NavBtn__span" />
      <span className="NavBtn__span" />
    </div>
  )
};

export default NavBtn;