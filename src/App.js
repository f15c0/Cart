import React from 'react';

import './App.css';
import Cart from './components/Cart';
import Login from './components/Login';
import Products from './components/Products';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
      <Login/>
      <Products/>
      <Cart/>
      <Total/>
     
    </div>
  );
}

export default App;
