import React from 'react';

import Home from './Components/Home/Home';
import QuickViews from './Components/QuickViews/QuickViews';
import YourColoradoCharity from './Components/YourColoradoCharity/YourColoradoCharity';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Home />
      <YourColoradoCharity />
      <QuickViews />
    </div>
  );
}

export default App;
