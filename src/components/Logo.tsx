import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
    const basePath = import.meta.env.BASE_URL;

    return (
        <picture>
            {/* SVG for modern browsers */}
            <source
                srcSet={`${basePath}favicon.svg`}
                type="image/svg+xml"
            />

            {/* High-resolution PNG fallback */}
            <source
                srcSet={`${basePath}web-app-manifest-192x192.png`}
                type="image/png"
                media="(min-resolution: 192dpi)"
            />

            {/* Standard PNG fallback */}
            <img
                src={`${basePath}favicon-96x96.png`}
                alt="Logo"
                className={className}
                style={{ objectFit: 'contain' }}
            />
        </picture>
    );
};

export default Logo;