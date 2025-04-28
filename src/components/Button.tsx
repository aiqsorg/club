import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  label, 
  href, 
  onClick, 
  className = '',
  variant = 'primary',
  size = 'md'
}) => {
  const baseClasses = "font-medium tracking-wide inline-flex items-center justify-center transition-all duration-200 rounded-sm";
  
  const variantClasses = {
    primary: "bg-[#C8102E] text-white hover:bg-[#A50D25] active:bg-[#8A0B1F]",
    outline: "border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white active:bg-[#A50D25]"
  };
  
  const sizeClasses = {
    sm: "text-xs py-1 px-3",
    md: "text-sm py-2 px-4",
    lg: "text-base py-3 px-6"
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        className={buttonClasses}
      >
        {label}
      </a>
    );
  }
  
  return (
    <button 
      onClick={onClick}
      className={buttonClasses}
    >
      {label}
    </button>
  );
};

export default Button;