import React from 'react';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
