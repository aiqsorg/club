import React from 'react';

interface PageHeaderProps {
  title: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, className = '' }) => {
  return (
    <div className={`pt-24 pb-6 md:pt-32 md:pb-10 ${className}`}>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
        {title}
      </h1>
      <div className="mt-4 h-1 w-16 bg-[#C8102E] mx-auto"></div>
    </div>
  );
};

export default PageHeader;