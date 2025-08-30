import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

const Partnerships: React.FC = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:aiqsorg@gmail.com';
  };
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <PageHeader title="PARTNERSHIPS" />
        
        <div className="max-w-4xl mx-auto mt-8 md:mt-12">
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Whether your organization brings proprietary technology or would like to engage in a mutually beneficial value creation please reach out
            </p>
            
            <p className="text-lg mb-8">
              AIQS values our institutional allies who help us carry out our vision
            </p>
          </div>
          
          <div className="mt-12 flex flex-col items-center space-y-6">
            <Button 
              label="CONTACT US" 
              variant="primary" 
              size="lg" 
              onClick={handleContactClick}
            />
            
            <p className="text-sm mt-2 text-gray-600">
              If the above link is not functioning please email directly to aiqsorg@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
