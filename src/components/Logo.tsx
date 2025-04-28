import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 512 512" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="256" cy="256" r="220" fill="currentColor" />
      <g>
        {/* Outer ring */}
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i * 6) * Math.PI / 180;
          const x = 256 + 200 * Math.cos(angle);
          const y = 256 + 200 * Math.sin(angle);
          const rotation = angle + Math.PI / 2;
          
          return (
            <path 
              key={`droplet-${i}`}
              d={`M ${x} ${y} C ${x+3*Math.cos(rotation)} ${y+3*Math.sin(rotation)} ${x+10*Math.cos(rotation)} ${y+15*Math.sin(rotation)} ${x} ${y+20*Math.sin(rotation)} C ${x-10*Math.cos(rotation)} ${y+15*Math.sin(rotation)} ${x-3*Math.cos(rotation)} ${y+3*Math.sin(rotation)} ${x} ${y} Z`}
              fill="#C8102E"
            />
          );
        })}
        
        {/* Middle ring */}
        {Array.from({ length: 45 }).map((_, i) => {
          const angle = (i * 8) * Math.PI / 180;
          const x = 256 + 150 * Math.cos(angle);
          const y = 256 + 150 * Math.sin(angle);
          const rotation = angle + Math.PI / 2;
          
          return (
            <path 
              key={`middle-${i}`}
              d={`M ${x} ${y} C ${x+2*Math.cos(rotation)} ${y+2*Math.sin(rotation)} ${x+6*Math.cos(rotation)} ${y+10*Math.sin(rotation)} ${x} ${y+12*Math.sin(rotation)} C ${x-6*Math.cos(rotation)} ${y+10*Math.sin(rotation)} ${x-2*Math.cos(rotation)} ${y+2*Math.sin(rotation)} ${x} ${y} Z`}
              fill="#C8102E"
            />
          );
        })}
        
        {/* Inner ring */}
        {Array.from({ length: 40 }).map((_, i) => {
          const angle = (i * 9) * Math.PI / 180;
          const x = 256 + 100 * Math.cos(angle);
          const y = 256 + 100 * Math.sin(angle);
          const rotation = angle + Math.PI / 2;
          
          return (
            <path 
              key={`inner-${i}`}
              d={`M ${x} ${y} C ${x+1*Math.cos(rotation)} ${y+1*Math.sin(rotation)} ${x+4*Math.cos(rotation)} ${y+6*Math.sin(rotation)} ${x} ${y+8*Math.sin(rotation)} C ${x-4*Math.cos(rotation)} ${y+6*Math.sin(rotation)} ${x-1*Math.cos(rotation)} ${y+1*Math.sin(rotation)} ${x} ${y} Z`}
              fill="#C8102E"
            />
          );
        })}
      </g>
    </svg>
  );
};

export default Logo;