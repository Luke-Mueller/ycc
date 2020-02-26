import React from 'react';

import './Backdrop.css';

const Backdrop = props => {
  return (
    <div 
      className="Backdrop"
      style={{
        opacity: props.showNav ? '1' : '0',
        transform: props.showNav ? 'translateY(0)' : 'translateY(100vh)'
      }}>
        { props.children }
      </div>
  )
}

export default Backdrop;