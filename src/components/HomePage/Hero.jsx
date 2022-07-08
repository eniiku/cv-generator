import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <main>
      <div className="hero-main">
        <h1 className="hero-main-heading">the best online cv generator</h1>
        <p className="hero-main-subheading">
          Leave it to us to build you a stella resume, so you can land that
          dream job!🚀
        </p>
        <Link to="/templates">
          <button>get started</button>
        </Link>
      </div>
      <div className="hero-img">some image lol</div>
      <button className="feedback">feedback</button>
    </main>
  );
};

export default Hero;
