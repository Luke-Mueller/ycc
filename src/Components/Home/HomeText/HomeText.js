import React from 'react';

import './HomeText.css';

const HomeText = props => {
  return (
    <div className="HomeText">
      <p 
      className="HomeText__p"
      style={{ color: props.showNav ? 'transparent' : 'white' }}>
        Providing a home for Colorado-based charities
      </p>
      <p 
      className="HomeText__p"
      style={{ color: props.showNav ? 'transparent' : 'white' }}>
        and building bridges from them to you
      </p>
    </div>
  )
};

export default HomeText;
