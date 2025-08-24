import React, { useEffect, useState } from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
    const basePath = import.meta.env.BASE_URL;
    const [isWindows, setIsWindows] = useState(false);

    useEffect(() => {
        // Simple OS detection
        const userAgent = window.navigator.userAgent;
        setIsWindows(userAgent.indexOf("Windows") !== -1);
    }, []);

    // Use PNG directly on Windows, SVG elsewhere
    const logoSrc = isWindows
        ? `${basePath}web-app-manifest-512x512.png`
        : `${basePath}favicon.svg`;

    return (
        <img
            src={logoSrc}
            alt="Logo"
            className={className}
            style={{
                objectFit: 'contain',
                // Valid imageRendering values
                imageRendering: isWindows ? 'crisp-edges' : 'auto'
            }}
        />
    );
};

export default Logo;
