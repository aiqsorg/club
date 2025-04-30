import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  // Using the SVG from public folder
  return (
      <img
          src="/favicon.svg"
          alt="Logo"
          className={className}
      />
  );
};

export default Logo;