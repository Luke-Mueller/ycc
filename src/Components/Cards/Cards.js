import React from 'react';

import Card from './Card/Card';

import './Cards.css';

// real data will be fetched from the Go backend
import data from '../../dummyData.json';

const Cards = () => {

  const cards = data.orgs.map(org => 
    <Card 
      key={data.orgs.indexOf(org)} 
      name={org.name} 
      cardIntro={org.cardIntro}/>
  )

  return (
    <section className="Cards" id="charities">
      {cards}
    </section>
  )
};

export default Cards;
