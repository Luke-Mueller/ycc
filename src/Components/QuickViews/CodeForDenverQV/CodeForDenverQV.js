import React from 'react';

import './CodeForDenverQV.css';

const CodeForDenverQV = props => {
  return (
    <div className="CodeForDenverQV">
      <h1>Code For Denver</h1>
      <h3>This is an area for the charity to give a sentence or two about their brand, target community, and services</h3>
      <button onClick={()=> {console.log('clicked')}}>Learn More</button>
    </div>
  )
};

export default CodeForDenverQV;