import React from 'react';

import CodeForDenverQV from './CodeForDenverQV/CodeForDenverQV';
import DenverPublicLibraryQV from './DenverPublicLibraryQV/DenverPublicLibraryQV';
import DenverPublicZooQV from './DenverPublicZooQV/DenverPublicZooQV';
import OxfordHouseQV from './OxfordHouseQV/OxfordHouseQV';

const QuickViews = props => {
  return (
    <div>
      <CodeForDenverQV />
      <hr/>
      <DenverPublicLibraryQV />
      <hr/>
      <DenverPublicZooQV />
      <hr/>
      <OxfordHouseQV />
    </div>
  )
};

export default QuickViews;