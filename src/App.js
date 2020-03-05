import React from 'react';

import Cards from './Components/Containers/Cards/Cards';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Containers/Home/Home';
import JoinUs from './Components/Containers/JoinUs/JoinUs';
import YourColoradoCharity from './Components/Containers/YourColoradoCharity/YourColoradoCharity';

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
