import React from 'react';
import github from '../../assets/github.svg';

const Footer = () => {
  return (
    <footer>
      created by David Enikuomehin{' '}
      <a href="github.com/tekyuma">
        <img src={github} alt="creator of website's github page" />
      </a>
    </footer>
  );
};

export default Footer;
