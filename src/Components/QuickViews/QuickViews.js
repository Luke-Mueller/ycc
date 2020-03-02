import React from 'react';

import CodeForDenverQV from './CodeForDenverQV/CodeForDenverQV';
import DenverPublicLibraryQV from './DenverPublicLibraryQV/DenverPublicLibraryQV';
import DenverPublicZooQV from './DenverPublicZooQV/DenverPublicZooQV';
import OxfordHouseQV from './OxfordHouseQV/OxfordHouseQV';

const QuickViews = props => {
  return (
    <section id="charities">
      <CodeForDenverQV />
      <hr/>
      <DenverPublicLibraryQV />
      <hr/>
      <DenverPublicZooQV />
      <hr/>
      <OxfordHouseQV />
    </section>
  )
};

export default QuickViews;