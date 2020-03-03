import React from 'react';

import CodeForDenverQV from './CodeForDenverCard/CodeForDenverCard';
import DenverPublicLibraryQV from './DenverPublicLibraryCard/DenverPublicLibraryCard';
import DenverPublicZooQV from './DenverPublicZooCard/DenverPublicZooCard';
import OxfordHouseQV from './OxfordHouseCard/OxfordHouseCard';

import './Cards.css';

const Cards = props => {
  return (
    <section className="Cards" id="charities">
      <br/><br/><br/><br/>
      <h1 className="Cards__h1">Charities</h1>
      <br/>
      <CodeForDenverQV />
      <hr/>
      <DenverPublicLibraryQV />
      <hr/>
      <DenverPublicZooQV />
      <hr/>
      <OxfordHouseQV />
      <br/><br/><br/><br/>
    </section>
  )
};

export default Cards;