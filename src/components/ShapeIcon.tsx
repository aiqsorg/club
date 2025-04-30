import React from 'react';
import { ShapeProps } from '../types';

const ShapeIcon: React.FC<ShapeProps> = ({
                                             className = '',
                                             number,
                                             title,
                                             description
                                         }) => {
    // Render different shapes based on the number (1-4)
    const renderShape = () => {
        switch (number) {
            case 1: // Circle
                return (
                    <div className="relative flex items-center justify-center h-20">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#C8102E] flex items-center justify-center text-white text-xl md:text-2xl font-bold transition-all duration-300 transform group-hover:scale-110" />
                    </div>
                );
            case 2: // Triangle
                return (
                    <div className="relative flex items-center justify-center h-20">
                        {/* Added a fixed height container and positioned the triangle */}
                        <div className="relative" style={{ height: '80px', display: 'flex', alignItems: 'center' }}>
                            <div className="w-0 h-0 border-l-[30px] md:border-l-[40px] border-r-[30px] md:border-r-[40px] border-b-[52px] md:border-b-[69px] border-l-transparent border-r-transparent border-b-[#C8102E] transition-all duration-300 transform group-hover:scale-110" />
                            {/* Triangle number (optional) */}
                            <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl font-bold" style={{ top: '10px' }}>
                                {number}
                            </div>
                        </div>
                    </div>
                );
            case 3: // Square
                return (
                    <div className="relative flex items-center justify-center h-20">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#C8102E] flex items-center justify-center text-white text-xl md:text-2xl font-bold transition-all duration-300 transform group-hover:scale-110" />
                    </div>
                );
            case 4: // Pentagon
                return (
                    <div className="relative flex items-center justify-center h-20">
                        <svg
                            viewBox="0 0 100 95"
                            width="64"
                            height="64"
                            className="md:w-20 md:h-20 transition-all duration-300 transform group-hover:scale-110"
                        >
                            <polygon
                                points="50,0 100,35 80,95 20,95 0,35"
                                fill="#C8102E"
                            />
                        </svg>
                    </div>
                );
            default:
                return null;
        }
    };
    return (
        <div className={`group flex flex-col items-center text-center ${className}`}>
            {renderShape()}
            <h3 className="mt-4 text-lg md:text-xl font-bold tracking-wide">
                {title}
            </h3>
            <p className="mt-2 text-sm md:text-base">
                {description}
            </p>
        </div>
    );
};

export default ShapeIcon;