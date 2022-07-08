import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './components/HomePage/Home';
import Template from './components/TemplatePage/Template';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/templates" component={Template} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
