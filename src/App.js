import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './features/dogs/Main';

function App() {
  return (
    <div data-testid="app">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
