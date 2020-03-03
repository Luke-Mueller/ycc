import React from 'react';

import './Card.css';

const Card = props => {
  return (
    <div className="Card">
      <h1>{props.name}</h1>
      <h3>{props.cardIntro}</h3>
      <button className="Card__button" onClick={() => alert(`Entering ${props.name}'s personalized site`)}>Learn More</button>
    </div>
  )
};

export default Card;