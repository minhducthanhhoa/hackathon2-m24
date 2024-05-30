import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
