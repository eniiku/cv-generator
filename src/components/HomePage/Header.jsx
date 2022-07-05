import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <strong>tek</strong>
        <strong>company</strong>
      </div>
      <div className="header-links">
        <a href="linkedin.com">
          <img
            src="../assets/linkedin.svg"
            alt="creator of website's Linkedin page"
          />
        </a>
        <a href="twitter.com">
          <img
            src="../assets/twitter.svg"
            alt="creator of website's Twitter page"
          />
        </a>
        <a href="github.com">
          <img
            src="../assets/github.svg"
            alt="creator of website's Github page"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
