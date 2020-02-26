import React from 'react';

import './CodeForDenverQV.css';

const CodeForDenverQV = props => {
  return (
    <div className="CodeForDenverQV">
      <h1>Code For Denver</h1>
      <button onClick={()=> {console.log('clicked')}}>Learn More</button>

    </div>
  )
};

export default CodeForDenverQV;