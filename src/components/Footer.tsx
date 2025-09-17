import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Logo className="h-10 w-10 text-white" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">AIQS</h3>
              <p className="text-sm text-gray-400">Algorithmic Investments & Quantitative Solutions</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">360 Huntington Avenue</p>
            <p className="text-sm text-gray-400">Boston, MA 02115</p>
            <p className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} AIQS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
