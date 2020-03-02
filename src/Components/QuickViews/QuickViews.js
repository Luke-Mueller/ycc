import React from 'react';

import CodeForDenverQV from './CodeForDenverQV/CodeForDenverQV';
import DenverPublicLibraryQV from './DenverPublicLibraryQV/DenverPublicLibraryQV';
import DenverPublicZooQV from './DenverPublicZooQV/DenverPublicZooQV';
import OxfordHouseQV from './OxfordHouseQV/OxfordHouseQV';

import './QuickViews.css';

const QuickViews = props => {
  return (
    <section className="QuickViews" id="charities">
      <br/><br/><br/><br/>
      <h1 className="QuickViews__h1">Charities</h1>
      <br/>
      <CodeForDenverQV />
      <br/>
      <hr/>
      <DenverPublicLibraryQV />
      <br/>
      <hr/>
      <DenverPublicZooQV />
      <br/>
      <hr/>
      <OxfordHouseQV />
      <br/><br/><br/><br/>
    </section>
  )
};

export default QuickViews;