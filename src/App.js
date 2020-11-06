import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './features/dogs/Main';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
