import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

const Apply: React.FC = () => {
  const applicationFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSejcUR7qwfgT08BLPKXSHETsu08NVHEZabcg9apGk_FEI6umQ/viewform?usp=dialog";
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <PageHeader title="APPLY" />
        
        <div className="max-w-4xl mx-auto mt-8 md:mt-12">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#C8102E] text-white px-4 py-2 mb-6">
              <h2 className="text-xl font-bold">Fall 2025 Applications: Open</h2>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              We are accepting for roles focused on leveraging specific skill sets to contribute to our vision
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
             Subsequent details will be provided to applicants
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button 
              label="APPLY NOW" 
              variant="primary" 
              size="lg" 
              href={applicationFormUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;