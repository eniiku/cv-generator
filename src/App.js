import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './components/HomePage/Home';
import Template from './components/TemplatePage/Template';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Template />
      <Footer />
    </>
  );
};

export default App;
