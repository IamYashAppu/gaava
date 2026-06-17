import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted mb-4 md:mb-0">
          Gaava &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <a 
          href="mailto:access@gaava.ai" 
          className="text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          Request Access
        </a>
      </div>
    </footer>
  );
};

export default Footer;
