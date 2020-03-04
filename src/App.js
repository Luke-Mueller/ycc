import React, { useState } from 'react';

import Cards from './Components/Cards/Cards';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home';
import JoinUs from './Components/JoinUs/JoinUs';
import YourColoradoCharity from './Components/YourColoradoCharity/YourColoradoCharity';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Home />
      <YourColoradoCharity />
      <Cards />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
