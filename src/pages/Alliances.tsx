import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

const Alliances: React.FC = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:northeasternaiqs@gmail.com';
  };
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <PageHeader title="ALLIANCES" />
        
        <div className="max-w-4xl mx-auto mt-8 md:mt-12">
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Whether your organization brings proprietary technology, wants to contribute funding, or would like to engage in a mutually beneficial value creation we would love to hear back
            </p>
            
            <p className="text-lg mb-8">
              AIQS values our institutional allies who help make what we do possible
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button 
              label="CONTACT US" 
              variant="primary" 
              size="lg" 
              onClick={handleContactClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alliances;