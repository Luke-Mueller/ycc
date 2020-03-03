import React from 'react';

import Home from './Components/Home/Home';
import Cards from './Components/Cards/Cards';
import YourColoradoCharity from './Components/YourColoradoCharity/YourColoradoCharity';
import JoinUs from './Components/JoinUs/JoinUs';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Home />
      <YourColoradoCharity />
      <Cards />
      <JoinUs />
    </div>
  );
}

export default App;
