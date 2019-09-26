import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import { CartProvider } from './components/CartContext';
import { CheckoutProvider } from './components/CheckoutContext';
import './App.css';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <CheckoutProvider>
        <div>
          <Navbar />
          <Routes />
        </div>
        </CheckoutProvider>
      </CartProvider>
    );
  }
}

export default App;
