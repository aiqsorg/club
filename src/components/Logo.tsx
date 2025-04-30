import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
    return (
        <img
            src={`${import.meta.env.BASE_URL}favicon.svg`}
            alt="Logo"
            className={className}
        />
    );
};

export default Logo;