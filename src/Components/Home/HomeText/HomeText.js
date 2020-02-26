import React from 'react';

import './HomeText.css';

const HomeText = props => {
  return (
    <div className="HomeText">
      <p 
      className="HomeText__p"
      style={{ color: props.showNav ? 'transparent' : 'white' }}>
        This is our branding statement about who we are
      </p>
      <p 
      className="HomeText__p"
      style={{ color: props.showNav ? 'transparent' : 'white' }}>
        and this is our branding statement about what we do.  It will look pretty when it's done.
      </p>
    </div>
  )
};

export default HomeText;
