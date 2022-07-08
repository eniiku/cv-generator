import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './components/Home';
import Template from './components/Template';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" elememt={<Home />} />
          <Route path="/templates" element={<Template />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
