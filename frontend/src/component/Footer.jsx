import React, { useEffect, useState } from 'react';
import { InstagramLogo, FacebookLogo, TwitterLogo, LinkedinLogo } from 'phosphor-react';
const Footer = () => {

  return (
    <footer className="bg-gray-200 py-4">
      <div className="flex justify-center space-x-4">
        <a className="cursor-pointer" target="_blank" rel="noopener noreferrer">
          <InstagramLogo size={30} />
        </a>
        <a  className="cursor-pointer" target="_blank" rel="noopener noreferrer">
          <FacebookLogo size={30} />
        </a>
        <a  className="cursor-pointer" target="_blank" rel="noopener noreferrer">
          <TwitterLogo size={30} />
        </a>
        <a className="cursor-pointer" target="_blank" rel="noopener noreferrer">
          <LinkedinLogo size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;